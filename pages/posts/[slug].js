import {useRouter} from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import {getSinglePost, getPosts} from '../../lib/api'
import PostTitle from '../../components/post-title'

export default function Post({post}) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.og_image} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.feature_image}
                date={post.updated_at}
                author={post.primary_author}
              />
              {/* <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
              </div> */}
              <PostBody content={post.html} />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({params}) {
  // const data = await getSinglePost(params.slug, previewData)

  // return {
  //   props: {
  //     preview,
  //     post: data?.post ?? null,
  //     morePosts: data?.morePosts ?? [],
  //   },
  // }
  const post = await getSinglePost(params.slug)
  console.log(post)
  return {
    props: {post},
  }
}
export async function getStaticPaths() {
  const allPosts = await getPosts()
  const paths = allPosts?.map((post) => `/posts/${post.slug}`)
  return {
    paths,
    fallback: true,
  }
}
