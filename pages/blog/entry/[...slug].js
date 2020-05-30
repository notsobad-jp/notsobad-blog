import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../../components/layout'
import { getAllPostSlugs, getPostData, formatDate } from '../../../lib/utilities'

export default function Entry({ entry }) {
  return (
    <Layout>
      <Head>
        <title>NOT SO BADなブログ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-700 body-font overflow-hidden break-all">
        <div className="container px-5 md:px-24 pb-24 mx-auto max-w-screen-lg">
          <div className="-my-8">
            <div className="py-12 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-900 font-bold">{ formatDate(entry.date) }</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 title-font mb-4">{ entry.title }</h2>
                { entry.image &&
                  <img src={ entry.image } alt={ entry.title } className='mb-4' />
                }
                <div id='mainText' className="leading-relaxed">
                  <ReactMarkdown source={ entry.content.replace(/!\[f:id:o_tomomichi.*?\)/, '') } escapeHtml={ false } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style global jsx>{`
        #mainText h1, #mainText h2, #mainText h3, #mainText h4, #mainText h5, #mainText h6 {
          font-weight: 700;
          margin: 2rem auto;
        }
        #mainText h1 { font-size: 1.875rem; }
        #mainText h2 { font-size: 1.5rem; }
        #mainText h3 { font-size: 1.25rem; }
        #mainText h4, h5, h6 { font-size: 1.25rem; }
        #mainText p { margin: 1.5rem auto; }
        #mainText hr { margin: 1.5rem auto; }
        #mainText a {
          color: #3182CE;
          text-decoration: underline;
        }
        #mainText ul {
          margin-left: 1.5rem;
          list-style-type: disc;
        }
        #mainText ul li { line-height: 1.75rem; }
      `}</style>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const entry = await getPostData(params.slug.join('/'));
  return {
    props: {
      entry
    }
  }
}
