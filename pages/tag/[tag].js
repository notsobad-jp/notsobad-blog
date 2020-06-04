import Head from 'next/head'
import Layout from '../../components/layout'
import List from '../../components/list'
import { getAllTags } from '../../lib/utilities'
import { getStaticProps } from './[tag]/page/[page]'
export { getStaticProps }


export default function Index({ entries, page, hasNextPage, tag }) {
  return (
    <Layout>
      <Head>
        <link rel="canonical" href={ `https://blog.notsobad.jp/tag/${ tag }`} />
      </Head>

      <List entries={ entries } page={ page } hasNextPage={ hasNextPage } tag={ tag } />
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = await getAllTags();

  let paths = [];
  tags.map((tag) => (
    paths.push({
      params: {
        tag: tag
      }
    })
  ));

  return {
    paths,
    fallback: false
  }
}
