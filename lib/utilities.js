export async function getAllPostSlugs() {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  return await client.getEntries({
     content_type: 'post',
     order: '-fields.date',
   })
  .then(function (entries) {
    const items = entries.items;
    return items.map(item => {
      return {
        params: {
          slug: item.fields.slug.split('/')
        }
      }
    })
  })
}


export async function getPostData(slug) {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  return await client.getEntries({
     content_type: 'post',
     'fields.slug': slug,
     order: '-sys.createdAt',
   })
  .then(function (entries) {
    return {
      ...entries.items[0].fields
    }
  })
}
