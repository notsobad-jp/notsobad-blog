import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getAllPostSlugs, formatDate } from '../lib/utilities'

export default function List({ entries, page, hasNextPage }) {
  return (
    <section className="text-gray-700 body-font overflow-hidden break-all">
      <div className="container px-5 md:px-24 pb-24 mx-auto max-w-screen-lg">
        <div className="-my-8">
          { entries.items.map((item) => (
            <div className="py-12 flex flex-wrap md:flex-no-wrap" key={ item.sys.id }>
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-900 font-bold">{ formatDate(item.fields.date) }</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 title-font mb-4">
                  <Link href="/entry/[...slug]" as={`/entry/${ item.fields.slug }`}>
                    <a>{ item.fields.title }</a>
                  </Link>
                </h2>
                { item.fields.tag &&
                  <div className='mb-4'>
                    { item.fields.tag.map(tag => (
                      <Link href="/tag/[tag]" as={`/tag/${ tag }`} key={ tag }>
                        <a><span className='bg-gray-200 px-2 py-1 mr-2 text-sm rounded-md'>{ tag }</span></a>
                      </Link>
                    )) }
                  </div>
                }
                { item.fields.image &&
                  <Link href="/entry/[...slug]" as={`/entry/${ item.fields.slug }`}>
                    <a><img src={ item.fields.image } alt={ item.fields.title } className='mb-4' /></a>
                  </Link>
                }
                <div className="leading-relaxed">
                  <ReactMarkdown source={ item.fields.excerpt.replace(/!\[f:id:o_tomomichi.*?\)/, '') } />
                </div>

                <Link href="/entry/[...slug]" as={`/entry/${ item.fields.slug }`}>
                  <a className="text-blue-700 inline-flex items-center mt-4">記事の続きを読む
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

        <div className="py-12 flex flex-wrap md:flex-no-wrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"></div>
          <div className="md:flex-grow">
            <div className="inline-block w-1/2 text-left">
              { page && page > 1 &&
                <Link href={ (page == 2) ? '/' : '/page/[page]' } as={ (page == 2) ? '/' : `/page/${page - 1}`}><a>前のページ</a></Link>
              }
            </div>
            <div className="inline-block w-1/2 text-right">
              { hasNextPage &&
                <Link href='/page/[page]' as={`/page/${page + 1}`}><a>次のページ</a></Link>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
