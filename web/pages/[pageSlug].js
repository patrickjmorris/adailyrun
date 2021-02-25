import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import Error from 'next/error'
import Head from 'next/head'
import SiteHeader from '../components/partials/SiteHeader'
import { getPageSlugs, getPageBySlug, getSiteSettings } from '../lib/api'
import OpenGraph from '../components/OpenGraph'

const Page = props => {
  const { page, site } = props
  const router = useRouter()

  if(!isEmpty(page)){
    const {
      feature_image,
    } = page

    // adding string to make featuer image responseive
    let srcset
    if(feature_image) {
      // Flag to check if image is ghost default image
      if(!feature_image.includes("static.ghost.org")){
        const sizes = [300, 600, 1000, 2000];
        srcset = sizes.map(size => `${feature_image.replace('images', `images/size/w${size}`)} ${size}w`).join(', ');
      }
    }
  }

  if (!router.isFallback && isEmpty(page)) {
    return <Error statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <OpenGraph
            router={router}
            description={page.meta_description}
            image={page.og_image}
            title={page.meta_title}
          />
          <div className="page-template">
            <header className="site-header">
              <SiteHeader {...{site, post: page }} />
            </header>
            <main id="site-main" className="site-main outer">
              <div className="inner">

                <article className={`post-full post ${!page.feature_image && "no-image"}`}>
                  <header className="post-full-header">
                    <h1 className="post-full-title">{page.title}</h1>
                  </header>
                  {page.feature_image && (
                    <figure className="post-full-image">
                      <img
                        srcSet={srcset}
                        sizes="(max-width: 800px) 400px, (max-width: 1170px) 1170px, 2000px"
                        src={`${page.feature_image}`}
                        alt={page.title}
                      />
                    </figure>
                  )}

                  <section className="post-full-content">
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: page.html }}/>
                  </section>

                </article>

              </div>
            </main>
          </div>
        </>
      )}
    </>
  )
}

Page.propType = {
  page: PropTypes.object.isRequired,
  site: PropTypes.object.isRequired,
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.pageSlug)
  const site = await getSiteSettings()

  return {
    props: {
      site,
      page: {
        ...page,
      },
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getPageSlugs()
  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          pageSlug: slug,
        },
      }
    }),
    fallback: true,
  }
}

export default Page
