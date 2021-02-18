import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
// const api = new GhostContentAPI({
//   url: 'http://localhost:2368',
//   key: 'e85a6a94817a1be37ed056d2af',
//   version: 'v3',
// })

const api = new GhostContentAPI({
  url: process.env.GHOST_CMS_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
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

export async function getHomePosts() {
  return await api.posts
    .browse({
      limit: 3,
      include: 'tags,authors',
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

export async function getAuthors() {
  return await api.authors
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getTags() {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug,
    })
    .catch((err) => {
      console.error(err)
    })
}
