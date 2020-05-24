import Head from 'next/head'

export default function Home({ entries }) {
  return (
    <div className="ui container mb-10 mt-5 mg:mt-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='mb-16'>
          <h1 className="text-3xl font-bold mb-4">
            NOT SO BADなブログ
            <p className="text-sm text-gray-600 font-thin">
              ぼっちスタートアップが日々がんばっています。
            </p>
          </h1>
        </div>

        <div>
          { entries.items.map((item) => (
            <div className="md:flex mb-12" key={ item.sys.id }>
              <div className='md:w-1/4'>
                <img src={ item.fields.heroImage.fields.file.url + '?w=500' } />
              </div>
              <div className='md:ml-4'>
                <div className='md:mb-4'>
                  <h3 className='text-lg font-bold'>{ item.fields.title }</h3>
                  { item.fields.tags.map((tag) => (
                    <span className='mr-2 text-gray-500'>{tag}</span>
                  )) }
                </div>
                <p>{ item.fields.description }</p>
              </div>
            </div>
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

  const entries = await client.getEntries({ 'content_type': 'blogPost' })
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
