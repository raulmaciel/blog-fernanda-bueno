import { withPayload } from '@payloadcms/next/withPayload'

if (!process.env.DATABASE_URL || !process.env.PAYLOAD_SECRET) {
  throw new Error('DATABASE_URL and PAYLOAD_SECRET are required')
}

export default withPayload({ agentRules: false })
