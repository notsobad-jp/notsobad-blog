export async function getAllPostIds() {
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
          id: item.slug
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
      id,
      ...entries[0].fields
    }
  })
}
