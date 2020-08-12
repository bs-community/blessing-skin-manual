import fetch from 'node-fetch'
import { NowRequest, NowResponse } from '@vercel/node'

type Query = { url: string }
type UpdateInfo = { latest: string }

const OFFICIAL =
  'https://dev.azure.com/blessing-skin/51010f6d-9f99-40f1-a262-0a67f788df32/_apis/git/repositories/a9ff8df7-6dc3-4ff8-bb22-4871d3a43936/Items?path=%2Fupdate.json'

export default async (request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'image/svg+xml')

  const official = await fetch(OFFICIAL)
  const { latest }: UpdateInfo = await official.json()

  const { url } = request.query as Query

  try {
    const resp = await fetch(url)
    const info: UpdateInfo = await resp.json()
    const color = info.latest === latest ? 'brightgreen' : 'yellow'
    const badge = await fetch(
      `https://img.shields.io/badge/latest-${info.latest}-${color}`
    )
    badge.body.pipe(response)
  } catch (_) {
    const badge = await fetch(
      'https://img.shields.io/badge/latest-unavailable-red'
    )
    badge.body.pipe(response)
  }
}
