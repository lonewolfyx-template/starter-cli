import type { ConfigOptions } from './types.ts'
import pkg from '../package.json'

export const NAME = pkg.name

export const VERSION = pkg.version

export const DEFAULT_OPTIONS: Partial<ConfigOptions> = {
}
