import GhostContentAPI from '@tryghost/content-api'
// import GhostAdminAPI from '@tryghost/admin-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'ec43a61b937024b55e1bd075ff',
  version: 'v3',
})

// const adminapi = new GhostAdminAPI({
//   url: 'http://localhost:2368/',
//   // Admin API key goes here
//   key: '5ec85e5a1c20ab1c9be299e5:0a1933bb1f88d91e06d5a9a0b134f97eb2e419e9f64374d8809930190697c7ca',
//   version: 'v3'
// });

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
