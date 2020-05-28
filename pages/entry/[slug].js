import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Home({ entries }) {
  return (
    <div>
      <Head>
        <title>NOT SO BADなブログ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-12 md:py-24 mx-auto max-w-screen-lg">
          <h1 className="md:text-2xl text-xl font-bold title-font text-gray-900 mb-4 inline-block border-b-4 border-gray-900">NOT SO BAD なブログ</h1>
          <h2 className="text-xs text-gray-600 tracking-widest font-medium title-font">ぼっちスタートアップが日々がんばっています。</h2>
        </div>
      </section>


      <section className="text-gray-700 body-font overflow-hidden break-all">
        <div className="container px-5 pb-24 mx-auto max-w-screen-lg">
        </div>
      </section>



      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row max-w-screen-lg">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">© 2020 NOT SO BAD, LLC.</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
