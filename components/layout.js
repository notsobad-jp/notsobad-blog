import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 md:px-24 p-5 md:pb-12 mx-auto max-w-screen-lg">
          <h1 className="text-xl font-bold title-font text-gray-900 mb-4 inline-block border-b-4 border-gray-900">
            <Link href='/'>
              <a>NOT SO BAD なブログ</a>
            </Link>
          </h1>
          <h2 className="text-xs text-gray-600 tracking-widest font-medium title-font">ぼっちスタートアップが日々がんばっています。</h2>
        </div>
      </section>

      { children }

      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto py-6 px-5 md:px-24 flex flex-wrap flex-col sm:flex-row max-w-screen-lg">
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
