import { BoardMode } from '../types'

const MODE_LS_KEY = 'preffered-mode'

export const getPrefferedMode = (): BoardMode => {
  const fromLs = localStorage.getItem(MODE_LS_KEY)

  if (fromLs === 'practice') {
    return fromLs
  }

  localStorage.setItem(MODE_LS_KEY, 'learn')

  return 'learn'
}

export const setPrefferedMode = (mode: BoardMode) =>
  localStorage.setItem(MODE_LS_KEY, mode)
