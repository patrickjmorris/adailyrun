import React from 'react'
import Link from 'next/link'
import { getSiteSettings } from '../../lib/api'
import fitvids from 'fitvids'
import { useRouter } from 'next/router'
/*
  Since this layout component is used in the _app.js, we don't want to use
  getInitialProps and request site data as this will disable static rendering
  options for some of our other pages. And since the Footer is at the bottom of
  any page, we can render it on the client side.
*/
const Layout = (props) => {
  const { children } = props
  const [site, setSite] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const router = useRouter()

  

  /**
   * Gallery card support
   * Used on any individual post/page
   *
   * Detects when a gallery card has been used and applies sizing to make sure
   * the display matches what is seen in the editor.
   */
  let resizeImagesInGalleries = function resizeImagesInGalleries() {
      let images = document.querySelectorAll('.kg-gallery-image img');
      images.forEach(function (image) {
          let container = image.closest('.kg-gallery-image');
          let width = image.attributes.width.value;
          let height = image.attributes.height.value;
          let ratio = width / height;
          container.style.flex = ratio + ' 1 0%';
      });
  };

  React.useEffect(() => {
    async function getSiteData() {
      let response = await getSiteSettings()
      setSite(response)
    }

    getSiteData()
    setLoading(false)

    // if (router.pathname = '/')  {document.body.classList.add('home-template')}
    // else {document.body.classList.remove('home-template')};
    router.events.on('routeChangeComplete', () => document.body.classList.remove('home-template'));

    // for responsive sizing of video's
    fitvids(".post-full-content")
    // Gallery cards support
    resizeImagesInGalleries();
  }, [])

  return (
    <>
      <div className="site-wrapper">
          {children}

          {!loading && (
            <footer className="site-footer outer">
                <div className="site-footer-content inner">
                    <section className="copyright">
                      <Link href={'/'}>
                          <a>{site.title}</a>
                      </Link>{' '}
                      &copy; {new Date().getFullYear()}
                    </section>
                    <nav className="site-footer-nav">
                        <Link href={'/'}>
                            <a style={{cursor: "pointer"}} href={site.url}>Latest Posts</a>
                        </Link>{' '}
                        {site.facebook && <a href={ site.facebook } target="_blank" rel="noopener">Facebook</a>}
                        {site.twitter && <a href={site.twitter} target="_blank" rel="noopener">Twitter</a>}
                        
                    </nav>
                </div>
            </footer>
          )}
      </div>
    </>
  )
}

export default Layout
