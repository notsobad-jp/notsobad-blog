import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../../components/layout'
import { getAllPostSlugs, getPostData, formatDate } from '../../../lib/utilities'

export default function Entry({ entry }) {
  /* markdown内のタグをclass付きで出力する（styled-jsxが適用されないので。。） */
  const renderers = {
    heading: props => <h className={`font-bold inline-block my-4 md:my-8 ${headingClass(props.level)}`}>{ props.children }</h>,
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
        <link rel="canonical" href={ `https://notsobad.jp/blog/${entry.slug}` } />
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
                { entry.image &&
                  <img src={ entry.image } alt={ entry.title } className='mb-4' />
                }
                <div id='mainText' className="leading-relaxed">
                  <ReactMarkdown source={ entry.content.replace(/!\[f:id:o_tomomichi.*?\)/, '') } renderers={ renderers } />
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

function headingClass(level) {
  switch (level) {
    case 1:
      return 'text-3xl'
    case 2:
      return 'text-2xl'
    case 3:
      return 'text-xl'
    default:
      return 'text-lg'
  }
}
