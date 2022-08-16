#!/usr/bin/env node

import _yargs, { Arguments } from 'yargs'
import { hideBin } from 'yargs/helpers'
import { EdgeAddonsAPI } from '@plasmohq/edge-addons-api'

type CommandArgs = {
  source?: string
  productId: string
  clientId: string
  clientSecret: string
  accessTokenUrl: string
  autoPublish?: boolean
}

async function uploadAddons({
  source,
  productId,
  clientId,
  clientSecret,
  accessTokenUrl
}: CommandArgs) {
  const client = new EdgeAddonsAPI({
    productId,
    clientId,
    clientSecret,
    accessTokenUrl
  })

  console.log('Start uploading add-ons')

  const result = await client.submit({
    filePath: source
  })

  console.log('Add-ons uploaded: %s', result)
}

async function publishAddons({
  productId,
  clientId,
  clientSecret,
  accessTokenUrl
}: CommandArgs) {
  const client = new EdgeAddonsAPI({
    productId,
    clientId,
    clientSecret,
    accessTokenUrl
  })

  console.log('Start publishing add-ons')

  const result = await client.publish()

  console.log('Add-ons published: %s', result)
}

const yargs = _yargs(hideBin(process.argv))

yargs.command({
  command: 'upload [source]',
  describe: 'Upload extension to Microsoft Edge web store',
  builder: {
    source: {
      string: true,
      demandOption: true,
      description: 'Path to zip file'
    },
    productId: {
      string: true,
      demandOption: true,
      description: 'The ID of the Edge Add-ons'
    },
    clientId: {
      string: true,
      demandOption: true,
      description: 'Client ID'
    },
    clientSecret: {
      string: true,
      demandOption: true,
      description: 'Client Secret'
    },
    accessTokenUrl: {
      string: true,
      demandOption: true,
      description: 'Access token URL'
    },
    autoPublish: {
      boolean: true,
      description: 'Auto publish'
    }
  },
  handler: async function (argv: Arguments<CommandArgs>) {
    await uploadAddons(argv)

    if (argv.autoPublish) {
      await publishAddons(argv)
    }
  }
})

yargs.command({
  command: 'publish',
  describe: 'Publish extension in Microsoft Edge web store',
  builder: {
    productId: {
      string: true,
      demandOption: true,
      description: 'The ID of the Edge Add-ons'
    },
    clientId: {
      string: true,
      demandOption: true,
      description: 'Client ID'
    },
    clientSecret: {
      string: true,
      demandOption: true,
      description: 'Client Secret'
    },
    accessTokenUrl: {
      string: true,
      demandOption: true,
      description: 'Access token URL'
    }
  },
  handler: async function (argv: Arguments<CommandArgs>) {
    await publishAddons(argv)
  }
})

yargs.recommendCommands().demandCommand(1).parse()
