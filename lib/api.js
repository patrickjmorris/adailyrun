import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  // process.env.GHOST_CMS_URL,
  key: '3b8d5cbc4b12c7911aef6f04e5',
  // process.env.GHOST_API_KEY,
  version: 'v3',
  // process.env.GHOST_API_VERSION,
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err)
    })
}
