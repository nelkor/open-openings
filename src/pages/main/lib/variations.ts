import { kebabize } from '@/shared'
import { Move, openings, FinalMove, PassingMove } from '@/entities/openings'

import { BoardMode, SelectorItem } from '../types'

const isFinal = (move: Move): move is FinalMove => 'name' in move

const findVariations = (root: PassingMove): SelectorItem[] => {
  const result: SelectorItem[] = []

  const walk = (move: Move) => {
    if (isFinal(move)) {
      result.push({
        name: move.name,
        value: kebabize(move.name),
      })

      return
    }

    for (const key of Object.keys(move.replies)) {
      walk(move.replies[key])
    }
  }

  for (const key of Object.keys(root.replies)) {
    walk(root.replies[key])
  }

  return result
}

export const getVariationsList = (
  openingValue: string,
  mode: BoardMode,
): SelectorItem[] => {
  const opening = openings.find(({ name }) => kebabize(name) === openingValue)

  if (!opening) throw new Error(`No opening found by value ${openingValue}`)

  return [
    mode === 'learn'
      ? {
          name: 'Initial Line',
          value: 'initial-line',
        }
      : {
          name: 'All Lines',
          value: 'all-lines',
        },
    ...findVariations(opening.tree),
  ]
}
