import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'

export default function Home({ entries }) {
  return (
    <Layout>
      <Head>
        <title>NOT SO BADなブログ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-700 body-font overflow-hidden break-all">
        <div className="container px-5 md:px-24 pb-24 mx-auto max-w-screen-lg">
          <div className="-my-8">
            { entries.items.map((item) => (
              <div className="py-12 flex flex-wrap md:flex-no-wrap" key={ item.sys.id }>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="mt-1 text-gray-900 font-bold">{ formatDate(item.fields.date) }</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 title-font mb-4">
                    <Link href={`/entry/${ item.fields.slug }`}>
                      <a>{ item.fields.title }</a>
                    </Link>
                  </h2>
                  { item.fields.image &&
                    <Link href={`/entry/${ item.fields.slug }`}>
                      <a><img src={ item.fields.image } alt={ item.fields.title } className='mb-4' /></a>
                    </Link>
                  }
                  <div className="leading-relaxed">
                    <ReactMarkdown source={ item.fields.excerpt.replace(/!\[f:id:o_tomomichi.*?\)/, '') } />
                  </div>

                  <Link href={`/entry/${ item.fields.slug }`}>
                    <a className="text-indigo-500 inline-flex items-center mt-4">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            )) }
          </div>
        </div>

        <div className="container px-5 md:px-24 pb-24 mx-auto max-w-screen-lg text-center">
          <Link href={`/?page=1`}><a className="pr-8 md:pr-16">前のページ</a></Link>
          <Link href={`/?page=2`}><a>次のページ</a></Link>
        </div>
      </section>
    </Layout>
  )
}


function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}

export async function getStaticPaths() {
  // const paths = await getAllPostSlugs();
  const paths = [
    {
      params: {
        page: ["2"]
      }
    }
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const entries = await client.getEntries({
     content_type: 'post',
     order: '-fields.date',
     limit: 5,
   })
  .then(function (entries) {
    const items = entries.items;
    return { items }
  })

  return {
    props: {
      entries,
    },
  }
}
