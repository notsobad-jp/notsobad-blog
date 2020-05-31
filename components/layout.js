import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />
        <link rel="icon" href="/images/notsobad/favicon.ico" />
        <title key="title">NOT SO BADなブログ</title>
        <meta content="NOT SO BADなブログ" property="og:title" key="og:title" />
        <meta content="website" property="og:type" />
        <meta content="https://notsobad.jp/blog" property="og:url" key="og:url" />
        <meta content="https://notsobad.jp/images/notsobad/ogp.png" property="og:image" key="og:image" />
        <meta content="ぼっちスタートアップが日々がんばっています。" property="og:description" key="og:description" />
        <meta content="NOT SO BADなブログ" property="og:site_name" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="NOT SO BADなブログ" name="twitter:title" key="twitter:title" />
        <meta content="ぼっちスタートアップが日々がんばっています。" name="twitter:description" key="twitter:description" />
        <meta content="https://notsobad.jp/images/notsobad/ogp.png" name="twitter:image:src" key="twitter:image:src" />
      </Head>

      <section className="text-gray-700 body-font">
        <div className="container px-5 md:px-24 p-5 md:pb-12 mx-auto max-w-screen-lg">
          <h1 className="text-xl font-bold title-font text-gray-900 mb-4 inline-block border-b-4 border-gray-900">
            <Link href='/blog'>
              <a>NOT SO BAD なブログ</a>
            </Link>
          </h1>
          <h2 className="text-xs text-gray-600 tracking-widest font-medium title-font">ぼっちスタートアップが日々がんばっています。</h2>
        </div>
      </section>

      { children }

      <footer className="text-gray-200 body-font">
        <div className="bg-gray-900">
          <div className="container mx-auto py-6 px-5 md:px-24 flex flex-wrap flex-col sm:flex-row max-w-screen-lg">
            <p className="text-gray-200 text-sm text-center sm:text-left">
              <a href="/blog" className="text-gray-500 hover:text-gray-200 ml-1" target="_blank">© 2020 NOT SO BADなブログ</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href='https://twitter.com/kame_f_no7' target='_blank' rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-gray-200">
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
