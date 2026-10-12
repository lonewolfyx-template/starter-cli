import type { ArgDef } from 'citty'
import * as process from 'node:process'

export const cwdArgs = {
  cwd: {
    type: 'string',
    description: 'Specify the root directory of your project',
    default: process.cwd(),
  },
} as const satisfies Record<string, ArgDef>

// TODO https://github.com/unjs/citty/pull/269
/**
 * The root command's `--cwd`, forwarded to every subcommand so it can be passed
 * before the command name.
 *
 * No default, unlike {@link cwdArgs}: commands taking a ROOTDIR positional treat an
 * explicit `--cwd` as an override of it, and cannot tell the two apart if it is
 * always set.
 */
// export const globalCwdArgs = {
//   cwd: {
//     ...cwdArgs.cwd,
//     default: undefined as string | undefined,
//     inherit: true,
//   },
// } as const satisfies Record<string, ArgDef>
