import Head from 'next/head'
import Layout from '../components/layout'
import List from '../components/list'
import { getStaticProps } from './tag/[tag]/page/[page]'
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
