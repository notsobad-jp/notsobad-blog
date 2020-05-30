import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../../components/layout'
import { getAllPostSlugs, getPostData } from '../../../lib/utilities'

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
                <div className="leading-relaxed">
                  <ReactMarkdown source={ entry.content.replace(/!\[f:id:o_tomomichi.*?\)/, '') } />
                </div>
              </div>
            </div>
          </div>
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
