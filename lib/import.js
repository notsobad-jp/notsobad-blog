// const client = require('contentful').createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// })
//
// const entries = await client.getEntries({ 'content_type': 'post' })
// .then(function (entries) {
//   const items = entries.items;
//   console.log(items)
//   return { items }
// })

const fs = require('fs');

const file = fs.readFileSync('lib/export.txt', 'utf-8');
const posts = file.split(/-----[\r\n]--------/);
posts.map((post) => {
  const contents = post.split(/-----[\r\n]/)
  console.log(contents);
});
