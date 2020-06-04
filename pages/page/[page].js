import Head from 'next/head'
import Layout from '../../components/layout'
import List from '../../components/list'
import { getAllPostSlugs } from '../../lib/utilities'
import { getStaticProps } from '../tag/[tag]/page/[page]'
export { getStaticProps }


export default function Index({ entries, page, hasNextPage, tag }) {
  return (
    <Layout>
      <Head>
        <link rel="canonical" href="https://blog.notsobad.jp" />
      </Head>

      <List entries={ entries } page={ page } hasNextPage={ hasNextPage } tag={ tag } />
    </Layout>
  )
}


const perPage = 10;

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  const pageCount = Math.ceil(slugs.length/perPage);

  let paths = [];
  for(let i = 2; i <= pageCount; i++) {
    paths.push({
      params: {
        page: String(i)
      }
    });
  }

  return {
    paths,
    fallback: false
  }
}
