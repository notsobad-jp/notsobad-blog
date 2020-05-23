import Head from 'next/head'

export default function Home({ entries }) {
  return (
    <div className="ui container my-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='mb-10'>
          <h1 className="text-3xl font-bold mb-4">
            NOT SO BADなブログ
            <p className="text-sm text-gray-600 font-thin">
              ぼっちスタートアップが日々がんばっています。
            </p>
          </h1>
        </div>

        <div className='ui button'>Button</div>

        <div className="grid">
          { entries.items.map((item) => (
            <a href="https://nextjs.org/docs" className="card" key={ item.sys.id }>
              <h3>{ item.fields.title }</h3>
              <p>{ item.fields.description }</p>
              <button className="ui blue button">Follow</button>
            </a>
          )) }
        </div>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        * {
          font-family: "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps(context) {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const entries = await client.getEntries({ 'content_type': 'post' })
  .then(function (entries) {
    const items = entries.items;
    console.log(items)
    return { items }
  })

  return {
    props: {
      entries,
    },
  }
}
