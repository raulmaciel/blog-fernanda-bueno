import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

const databaseURL = process.env.DATABASE_URL
const secret = process.env.PAYLOAD_SECRET

if (!databaseURL || !secret) {
  throw new Error('DATABASE_URL and PAYLOAD_SECRET are required')
}

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
  }),
  secret,
  collections: [],
})
