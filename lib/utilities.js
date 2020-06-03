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
          slug: item.fields.slug.split('/'),
          tag: item.fields.tag
        }
      }
    })
  })
}

export async function getAllTags() {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  let tags = [];
  return await client.getEntries({
     content_type: 'post',
     order: '-fields.date',
   })
  .then(function (entries) {
    entries.items.map(item => {
      tags = tags.concat(item.fields.tag)
    })
    return [...new Set(tags)];
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


export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}
