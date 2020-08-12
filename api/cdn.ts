import fetch from 'node-fetch'
import { NowRequest, NowResponse } from '@vercel/node'

type Query = { cdn: string; version: string }

export default async (request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'image/svg+xml')

  const { cdn, version } = request.query as Query
  const host = cdn.replace(':version', version)

  const res = await fetch(`https://${host}/app/manifest.json`, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64; rv:79.0) Gecko/20100101 Firefox/79.0',
    },
  })
  if (res.status >= 300) {
    const badge = await fetch(
      `https://img.shields.io/badge/${version}-unavailable-red`
    )
    badge.body.pipe(response)
    return
  }

  try {
    const manifest: Record<string, unknown> = await res.json()
    if (
      typeof manifest['app.js'] === 'string' /** v5 or later */ ||
      typeof manifest['index.js'] === 'string' /** v4 */
    ) {
      const badge = await fetch(
        `https://img.shields.io/badge/${version}-working-brightgreen`
      )
      badge.body.pipe(response)
    } else {
      const badge = await fetch(
        `https://img.shields.io/badge/${version}-incorrect-red`
      )
      badge.body.pipe(response)
    }
  } catch (_) {
    const badge = await fetch(
      `https://img.shields.io/badge/${version}-incorrect-red`
    )
    badge.body.pipe(response)
  }
}
