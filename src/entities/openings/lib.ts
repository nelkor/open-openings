import { kebabize } from '@/shared'

import { openings } from './store'
import { Move, Opening, MoveBase, OpeningVariation } from './types'

const getInitialLine = (opening: Opening): OpeningVariation => {
  const moves: MoveBase[] = []
  let current: Move = opening.tree
  let opponentSAN: string | null = null

  while (true) {
    const san = opponentSAN ? `${opponentSAN} ${current.san}` : current.san
    moves.push({ san, comment: current.comment })

    if ('name' in current) {
      break
    }

    const entries: [string, Move][] = Object.entries(current.replies)

    if (entries.length !== 1) {
      break
    }

    const [replySAN, reply] = entries[0]
    opponentSAN = replySAN
    current = reply
  }

  return {
    name: opening.name,
    moves,
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

  if (variationUrlParam === 'initial-lize') {
    return getInitialLine(opening)
  }

  const path: MoveBase[] = []

  const findVariation = (
    move: Move,
    opponentSAN: string | null,
  ): string | null => {
    const san = opponentSAN ? `${opponentSAN} ${move.san}` : move.san
    path.push({ san, comment: move.comment })

    if ('name' in move) {
      if (kebabize(move.name) === variationUrlParam) {
        return move.name
      }
      path.pop()
      return null
    }

    for (const [replySAN, reply] of Object.entries(move.replies)) {
      const name = findVariation(reply, replySAN)
      if (name !== null) {
        return name
      }
    }

    path.pop()
    return null
  }

  const variationName = findVariation(opening.tree, null)

  if (variationName === null) {
    return null
  }

  return {
    name: variationName,
    moves: path,
    openingName: opening.name,
    firstMove: opening.firstMove,
  }
}
