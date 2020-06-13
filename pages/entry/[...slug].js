import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'
import { getAllPostSlugs, getPostData, formatDate } from '../../lib/utilities'

export default function Entry({ entry }) {
  /* markdown内のタグをclass付きで出力する（styled-jsxが適用されないので。。） */
  const renderers = {
    heading: props => renderHeading(props),
    list: props => <ul className='text-left list-disc ml-6'>{props.children}</ul>,
    listItem: props => <li className='leading-8'>{props.children}</li>,
    paragraph: props => <p className='my-6'>{ props.children }</p>,
    link: props => <a href={props.href} target="_blank" className='text-blue-600 underline'>{ props.children }</a>,
  };

  return (
    <Layout>
      <Head>
        <title key="title">{ entry.title }</title>
        <meta content={ entry.title } property="og:title" key="og:title" />
        <meta content={ `https://notsobad.jp/blog/${entry.slug}` } property="og:url" key="og:url" />
        <link rel="canonical" href={ `https://blog.notsobad.jp/${entry.slug}` } />
        { entry.image && <meta content={ entry.image } property="og:image" key="og:image" /> }
        { entry.image && <meta content={ entry.image } name="twitter:image:src" key="twitter:image:src" /> }
        <meta content={ entry.excerpt.replace(/!\[f:id:o_tomomichi.*?\)/, '') } property="og:description" key="og:description" />
        <meta content={ entry.title } name="twitter:title" key="twitter:title" />
        <meta content={ entry.excerpt.replace(/!\[f:id:o_tomomichi.*?\)/, '') } name="twitter:description" key="twitter:description" />
      </Head>

      <section className="text-gray-700 body-font overflow-hidden break-all">
        <div className="container px-5 md:px-24 pb-24 mx-auto max-w-screen-lg">
          <div className="-my-8">
            <div className="py-12 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-900 font-bold">{ formatDate(entry.date) }</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 title-font mb-4">{ entry.title }</h2>
                { entry.tag &&
                  <div className='mb-4'>
                    { entry.tag.map(tag => (
                      <Link href="/tag/[tag]" as={`/tag/${ tag }`}>
                        <a><span class='bg-gray-200 px-2 py-1 mr-2 text-sm rounded-md'>{ tag }</span></a>
                      </Link>
                    )) }
                  </div>
                }
                { entry.image &&
                  <img src={ entry.image } alt={ entry.title } className='mb-4' />
                }
                <div id='mainText' className="leading-relaxed">
                  <ReactMarkdown source={ entry.content.replace(/!\[f:id:o_tomomichi.*?\)/, '') } renderers={ renderers } escapeHtml={ false } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

function renderHeading(props) {
  const baseClass = "font-bold inline-block my-4 md:my-8";
  switch (props.level) {
    case 1:
      return <h1 className={`${baseClass} text-3xl`}>{ props.children }</h1>
    case 2:
      return <h2 className={`${baseClass} text-2xl`}>{ props.children }</h2>
    case 3:
      return <h3 className={`${baseClass} text-xl`}>{ props.children }</h3>
    case 4:
      return <h4 className={`${baseClass} text-lg`}>{ props.children }</h4>
    default:
      return <h5 className={`${baseClass} text-lg`}>{ props.children }</h5>
  }
}
