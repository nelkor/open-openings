import { kebabize } from '@/shared'

import { openings } from './data'
import { Move, FinalMove, PassingMove } from './types'

const isFinal = (move: Move): move is FinalMove => 'name' in move

const collectVariationNames = (root: PassingMove): string[] => {
  const result: string[] = []

  const walk = (move: Move) => {
    if (isFinal(move)) {
      result.push(move.name)

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

export interface ResolvedRoute {
  openingName: string
  variationName: string
}

export const resolveRoute = (
  openingValue: string,
  variationValue: string,
  mode: string,
): ResolvedRoute | null => {
  const opening = openings.find(({ name }) => kebabize(name) === openingValue)

  if (!opening) {
    return null
  }

  const specialValue = mode === 'learn' ? 'initial-line' : 'all-lines'
  const specialName = mode === 'learn' ? 'Initial Line' : 'All Lines'

  if (variationValue === specialValue) {
    return {
      openingName: opening.name,
      variationName: specialName,
    }
  }

  const variationNames = collectVariationNames(opening.tree)
  const variationName = variationNames.find(
    name => kebabize(name) === variationValue,
  )

  if (!variationName) {
    return null
  }

  return {
    variationName,
    openingName: opening.name,
  }
}
