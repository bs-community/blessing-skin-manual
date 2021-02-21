import fetch from 'node-fetch'
import type { NowRequest, NowResponse } from '@vercel/node'

type Query = { cdn: string; version?: string }
type UpdateInfo = { latest: string }

const OFFICIAL =
  'https://dev.azure.com/blessing-skin/51010f6d-9f99-40f1-a262-0a67f788df32/_apis/git/repositories/a9ff8df7-6dc3-4ff8-bb22-4871d3a43936/Items?path=%2Fupdate.json'

export default async (request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'image/svg+xml')

  const { cdn, version } = request.query as Query
  const ver =
    version ||
    (await fetch(OFFICIAL).then((r): Promise<UpdateInfo> => r.json())).latest

  const host = cdn.replace(':version', ver)

  const res = await fetch(`https://${host}/app/manifest.json`, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64; rv:79.0) Gecko/20100101 Firefox/79.0',
    },
  })
  if (res.status >= 300) {
    const badge = await fetch(
      `https://img.shields.io/badge/${ver}-unavailable-red`
    )
    badge.body.pipe(response)
    return
  }

  const escapedVersion = ver.replace('-', '--')
  try {
    const manifest: Record<string, unknown> = await res.json()
    if (
      typeof manifest['app.js'] === 'string' /* v5 or later */ ||
      typeof manifest['index.js'] === 'string' /* v4 */
    ) {
      const badge = await fetch(
        `https://img.shields.io/badge/${escapedVersion}-working-brightgreen`
      )
      badge.body.pipe(response)
    } else {
      const badge = await fetch(
        `https://img.shields.io/badge/${escapedVersion}-incorrect-red`
      )
      badge.body.pipe(response)
    }
  } catch (_) {
    const badge = await fetch(
      `https://img.shields.io/badge/${escapedVersion}-incorrect-red`
    )
    badge.body.pipe(response)
  }
}
