import { kebabize } from '@/shared'
import { openings } from '@/entities/openings'

import { SelectorItem } from '../types'

const OPENING_LS_KEY = 'preffered-opening'

export const getOpeningsList = () =>
  openings.map<SelectorItem>(opening => ({
    name: opening.name,
    value: kebabize(opening.name),
  }))

export const getPrefferedOpening = (availableValues: string[]) => {
  const fromLs = localStorage.getItem(OPENING_LS_KEY)

  if (!fromLs || !availableValues.includes(fromLs)) {
    const newValue = availableValues[0]

    localStorage.setItem(OPENING_LS_KEY, newValue)

    return newValue
  }

  return fromLs
}

export const setPrefferedOpening = (value: string) =>
  localStorage.setItem(OPENING_LS_KEY, value)
