import { evansGambit } from './evans-gambit'
import { staffordGambit } from './stafford-gambit'
import type { Opening } from './types'

export const openings = [evansGambit, staffordGambit]

type Move = Opening['tree']['replies'][string]

const isFinal = (move: Move): move is Move & { name: string } => {
  return 'name' in move
}

export const findVariations = (tree: Opening['tree']): { name: string }[] => {
  const result: { name: string }[] = []

  const walk = (move: Move) => {
    if (isFinal(move)) {
      result.push({ name: move.name })

      return
    }

    for (const key of Object.keys(move.replies)) {
      walk(move.replies[key])
    }
  }

  for (const key of Object.keys(tree.replies)) {
    walk(tree.replies[key])
  }

  return result
}
