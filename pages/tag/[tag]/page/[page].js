import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from '../../../../components/layout'
import List from '../../../../components/list'
import { getAllTags, formatDate } from '../../../../lib/utilities'

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
  const tags = await getAllTags();
  // const posts = await getAllPostSlugs();

  /* FIXME */
  let paths = [];
  tags.map((tag) => (
    paths.push({
      params: {
        page: '2',
        tag: tag
      }
    })
  ));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const page = (params && params.page) ? Number(params.page) : 1;
  const tag = (params && params.tag) ? params.tag : null;
  let hasNextPage = true;

  // 検索条件
  let searchParams = {
    content_type: 'post',
    order: '-fields.date',
    skip: (page - 1) * perPage,
    limit: perPage,
  }
  if(tag) { searchParams['fields.tag[all]'] = tag; }

  const entries = await client.getEntries(searchParams)
  .then(function (entries) {
    if(entries.skip + entries.limit >= entries.total) { hasNextPage = false; }
    const items = entries.items;
    return { items }
  })

  return {
    props: {
      entries,
      tag: tag,
      page: page,
      hasNextPage: hasNextPage,
    },
  }
}
