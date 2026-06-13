import { en } from './en'
import { ru } from './ru'
import type { Locale, SiteCopy } from './types'

export const content: Record<Locale, SiteCopy> = { ru, en }

export type { Locale, SiteCopy }
