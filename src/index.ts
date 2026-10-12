import { createMain, defineCommand } from 'citty'
import { description, version } from '../package.json' with { type: 'json' }
import { cwdArgs } from './args.ts'
import { resolveConfig } from './config.ts'

export const command = defineCommand({
  meta: {
    name: 'sdd',
    version,
    description,
  },
  args: {
    ...cwdArgs,
    name: {
      type: 'positional',
      description: 'Your name',
      required: true,
    },
    friendly: {
      type: 'boolean',
      description: 'Use friendly greeting',
    },
    age: {
      type: 'string',
      description: 'Your age',
      required: false,
    },
    adj: {
      type: 'enum',
      description: 'Adjective to use in greeting',
      options: ['awesome', 'cool', 'nice'],
      default: 'awesome',
      required: false,
    },
  },
  setup() {
    console.log('Setup')
  },
  cleanup() {
    console.log('Cleanup')
  },
  subCommands: {
    build: () => import('./commands/build.ts').then(r => r.default),
  },
  async run(ctx) {
    const isCompletionRequest = ctx.args._?.[0] === 'complete'
    if (isCompletionRequest) {
      return
    }

    const config = await resolveConfig(ctx.args)

    console.log(config)
  },
})

// runMain(command, {
//   // TODO https://github.com/unjs/citty/pull/269
//   // inheritedArgs: globalCwdArgs,
// })

createMain(command)()
