import { evansGambit } from './evans-gambit'
import { staffordGambit } from './stafford-gambit'

export type { Move, FinalMove, PassingMove } from './types'

export const openings = [evansGambit, staffordGambit]
