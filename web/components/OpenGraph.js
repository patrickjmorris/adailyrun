import Head from 'next/head';

// All meta tags can be added here
// This component will need to be modified, to accommadate twitter
// and facebook meta tags
const OpenGraph = ({ title, description, image, router, type }) => (

  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </>
    )}
    {description && (
      <>
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </>
    )}
    {image && (
      <meta
        property="og:image"
        content={image}
      />
    )}
    <meta property="og:type" content={type} />
    <meta
      property="og:url"
      content={`${process.env.SERVER_HOSTNAME}${router.asPath}`}
    />
  </Head>
);

export default OpenGraph;