import { kebabize } from '@/shared'

import { openings } from './store'
import { Move, Opening, MoveBase, OpeningVariation } from './types'

const getInitialLine = (opening: Opening): OpeningVariation => {
  const moves: MoveBase[] = []
  let current: Move = opening.tree

  while (true) {
    moves.push({ san: current.san, comment: current.comment })

    // Достигли листа — конец линии
    if ('name' in current) {
      break
    }

    const replies: Move[] = Object.values(current.replies)

    // Больше одного ответа — это развилка, останавливаемся
    if (replies.length !== 1) {
      break
    }

    // Ровно один ответ — продолжаем по единственному пути
    current = replies[0]
  }

  return {
    moves,
    name: opening.name,
    openingName: opening.name,
    firstMove: opening.firstMove,
  }
}

export const getVariation = (
  openingUrlParam: string,
  variationUrlParam: string,
): null | OpeningVariation => {
  const opening = openings.find(
    ({ name }) => kebabize(name) === openingUrlParam,
  )

  if (!opening) {
    return null
  }

  if (variationUrlParam === 'initial-line') {
    return getInitialLine(opening)
  }

  const path: MoveBase[] = []

  const findVariation = (move: Move): string | null => {
    path.push({ san: move.san, comment: move.comment })

    // Leaf node — проверяем имя вариации
    if ('name' in move) {
      if (kebabize(move.name) === variationUrlParam) {
        return move.name
      }

      path.pop()

      return null
    }

    // Inner node — рекурсивно обходим все ответы противника
    for (const reply of Object.values(move.replies)) {
      const name = findVariation(reply)

      if (name !== null) {
        return name
      }
    }

    // Ни одна ветка не привела к нужной вариации — откат
    path.pop()

    return null
  }

  const variationName = findVariation(opening.tree)

  if (variationName === null) {
    return null
  }

  return {
    moves: path,
    name: variationName,
    openingName: opening.name,
    firstMove: opening.firstMove,
  }
}
