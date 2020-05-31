import Head from 'next/head'
import Link from 'next/link'
import { getAllPostSlugs, formatDate } from '../lib/utilities'

export default function Home({ entries }) {
  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />
        <link rel="icon" href="/images/notsobad/favicon.ico" />
        <title>NOT SO BAD</title>
        <meta name="description" content="Towards a not so bad world." />
        <meta content="NOT SO BAD" property="og:title" />
        <meta content="website" property="og:type" />
        <meta content="https://notsobad.jp" property="og:url" />
        <meta content="https://notsobad.jp/images/notsobad/ogp.png" property="og:image" />
        <meta content="Towards a not so bad world." property="og:description" />
        <meta content="NOT SO BAD" property="og:site_name" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="NOT SO BAD" name="twitter:title" />
        <meta content="Towards a not so bad world." name="twitter:description" />
        <meta content="https://notsobad.jp/images/notsobad/ogp.png" name="twitter:image:src" />

        <meta content="Cj5CPp60p_YthkYoq1iWglo8d6yEfapurd-RmBKW0fs" name="google-site-verification" />
      </Head>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-12 md:py-24 items-center justify-center flex-col">
          <h1>
            <img className="lg:w-3/6 md:w-4/6 w-6/6 mb-10 object-cover object-center rounded mx-auto" alt="NOT SO BAD" src="/images/notsobad/logo.png" />
          </h1>
          <div className="text-center lg:w-2/3 w-full">
            <p className="title-font text-2xl md:text-3xl mb-4 text-gray-900">Towards a not so bad world.</p>
          </div>
        </div>
      </section>

      <header className="text-gray-500 body-font bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#policy" className="mr-5 hover:text-gray-100">Policy</a>
            <a href="#works" className="mr-5 hover:text-gray-100">Works</a>
            <a href="#member" className="mr-5 hover:text-gray-100">Member</a>
            <a href="#contact" className="mr-5 hover:text-gray-100">Contact</a>
          </nav>
        </div>
      </header>

      <section id="policy" className="text-gray-700 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-grow text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-5 flex-shrink-0">
                <svg fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 20 20">
                  <path d="M12 10a2 2 0 01-3.41 1.41A2 2 0 0110 8V0a9.97 9.97 0 0110 10h-8zm7.9 1.41A10 10 0 118.59.1v2.03a8 8 0 109.29 9.29h2.02zm-4.07 0a6 6 0 11-7.25-7.25v2.1a3.99 3.99 0 00-1.4 6.57 4 4 0 006.56-1.42h2.1z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">NICHE</h2>
                <p className="leading-relaxed text-base">Keep focusing on your favourite niche market.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-grow text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-5 flex-shrink-0">
                <svg fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 4 4 0 110-8 4 4 0 100-8zm0 13a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">UNIQUE</h2>
                <p className="leading-relaxed text-base">Do what other people never do.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-grow text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-5 flex-shrink-0">
                <svg fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 20 20">
                  <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm2.16 3a6 6 0 01-11.32 0h11.32z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">HUMOUR</h2>
                <p className="leading-relaxed text-base">Never forget a sense of humour in your life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="works" className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 mb-10">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://bungomail.com/" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/bungomail.png" alt="bungomail" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">ブンゴウメール</h1>
                  <p className="leading-relaxed mb-3">ブンゴウメールは、青空文庫の作品を小分けにして毎日メールで送信してくれる読書サポートサービスです。</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://search.bungomail.com/" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/bungosearch.png" alt="bungosearch" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">ブンゴウサーチ</h1>
                  <p className="leading-relaxed mb-3">ブンゴウサーチは、青空文庫の作品を目安の読了時間で検索できるサービスです。</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://the-timeline.jp/" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/timeline.png" alt="THE TIMELINE" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">THE TIMELINE</h1>
                  <p className="leading-relaxed mb-3">THE TIMELINE(ザ・タイムライン)は、簡単・便利な無料の年表作成サービスです。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 mb-10">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://the-tournament.jp/" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/tournament.png" alt="THE TOURNAMENT" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">THE TOURNAMENT</h1>
                  <p className="leading-relaxed mb-3">THE TOURNAMENT(ザ・トーナメント)は、簡単・便利な無料のトーナメント表作成サービスです。</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://chrome.google.com/webstore/detail/tab-sekki-%E4%BA%8C%E5%8D%81%E5%9B%9B%E7%AF%80%E6%B0%97%E4%B8%83%E5%8D%81%E4%BA%8C%E5%80%99/hpiplbccmdafmjoompeplcakgghggcfh" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/tabsekki.png" alt="tabsekki" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Tab Sekki</h1>
                  <p className="leading-relaxed mb-3">TabSekkiは、ブラウザの新しいタブに二十四節気七十二候の現在の暦を表示してくれるChrome拡張機能です。</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <a href="https://karta.notsobad.jp/" target="_blank">
                  <img className="lg:h-64 md:h-56 w-full object-cover object-center" src="/images/notsobad/products/spkarta.png" alt="スマホde百人一首" />
                </a>
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">スマホde百人一首</h1>
                  <p className="leading-relaxed mb-3">スマホde百人一首は、みんなのスマホを取り札にして遊べる、お正月にぴったりの百人一首サービスです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="member" className="text-gray-700 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 mx-auto">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/notsobad/profile.png" alt='CEO' />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Tomomichi Onishi</h2>
                  <h3 className="text-gray-500 mb-3">CEO / Web Developer</h3>
                  <span className="inline-flex">
                    <a href='https://twitter.com/kame_f_no7' target='_blank' className="ml-2 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Blog</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-12 break-all">
            { entries.items.map((item) => (
              <div className="p-12 md:w-1/3 flex flex-col items-start" key={ item.fields.slug }>
                <span className="inline-block py-1 px-3 rounded bg-gray-100 text-gray-500 text-sm font-medium tracking-widest">
                  { formatDate(item.fields.date) }
                </span>
                <h2 className="sm:text-2xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  <Link href="/blog/entry/[...slug]" as={`/blog/entry/${ item.fields.slug }`}>
                    <a>{ item.fields.title }</a>
                  </Link>
                </h2>
                { item.fields.image &&
                  <Link href="/blog/entry/[...slug]" as={`/blog/entry/${ item.fields.slug }`}>
                    <a><img src={ item.fields.image } alt={ item.fields.title } className='mb-4' /></a>
                  </Link>
                }
                <p className="leading-relaxed mb-8">{ item.fields.excerpt.replace(/!\[f:id:o_tomomichi.*?\)/, '') }</p>
                <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                  <Link href="/blog/entry/[...slug]" as={`/blog/entry/${ item.fields.slug }`}>
                    <a className="text-blue-500 inline-flex items-center">続きを読む
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="flex mx-auto mt-20 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
              <Link href="/blog">
                <a>ブログTOPへ</a>
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="text-gray-700 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <tbody>
                <tr>
                  <td className="border-t-2 border-gray-400 px-4 py-3">Company</td>
                  <td className="border-t-2 border-gray-400 px-4 py-3">NOT SO BAD, LLC.</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-400 px-4 py-3">Established</td>
                  <td className="border-t-2 border-gray-400 px-4 py-3">22 March 2018</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-400 px-4 py-3">CEO</td>
                  <td className="border-t-2 border-gray-400 px-4 py-3">Tomomichi Onishi</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-400 px-4 py-3">Address</td>
                  <td className="border-t-2 border-gray-400 px-4 py-3">4-16-6 Koishi-kawa, Bunkyo, Tokyo</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3">Contact</td>
                  <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3">Mail: info[at]notsobad.jp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="text-gray-200 body-font">
        <div className="bg-gray-900">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-gray-200 text-sm text-center sm:text-left">
              <a href="/" className="text-gray-500 hover:text-gray-200 ml-1" target="_blank">© 2020 NOT SO BAD, LLC.</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href='https://twitter.com/kame_f_no7' target='_blank' className="ml-3 text-gray-500">
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


export async function getStaticProps({params}) {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const entries = await client.getEntries({
     content_type: 'post',
     order: '-fields.date',
     skip: 0,
     limit: 3,
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
