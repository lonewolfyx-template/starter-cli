import type { ParsedArgs } from 'citty'
import type { command } from '.'
import type { ConfigOptions } from './types.ts'

type ArgsT = Exclude<
  Awaited<typeof command.args>,
  undefined | ((...args: unknown[]) => unknown)
>

export async function resolveConfig(options: Partial<ParsedArgs<ArgsT>>): Promise<ConfigOptions> {
  return {
    cwd: options.cwd!,
  }
}
