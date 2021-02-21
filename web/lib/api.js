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

export async function getPostAndMorePosts(slug, preview) {
  const singleObjectParams = {
    slug,
    include: 'authors',
    ...(preview && { status: 'all' }),
  }
  const moreObjectParams = {
    limit: 3,
    include: 'authors',
    ...(preview && { status: 'all' }),
  }
  const post = await api.posts.read(singleObjectParams).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  })
  const morePosts = (await api.posts.browse(moreObjectParams))
    ?.filter(({ slug }) => post.slug !== slug)
    .slice(0, 2)

  return {
    post,
    morePosts,
  }
}

export async function getAllPostsWithSlug() {
  const params = {
    fields: 'slug',
    limit: 'all',
  }
  const posts = await api.posts.browse(params)
  return posts
}

export async function getAllPostsForHome(preview) {
  const params = {
    limit: 'all',
    include: 'authors',
    order: 'published_at DESC',
    ...(preview && { status: 'all' }),
  }
  const posts = await api.posts.browse(params)
  return posts
}