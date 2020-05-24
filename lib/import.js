require('dotenv').config()

const contentful = require('contentful-management')
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
})


const fs = require('fs');

const file = fs.readFileSync('lib/export.txt', 'utf-8');
const posts = file.split(/-----[\r\n]--------/);
posts.forEach((post, index) => {
  if(index > 0) { return; }
  const contents = post.split(/-----[\r\n]/)

  const meta = contents[0];
  let title, slug, published_at, status;
  const categories = [];
  meta.split(/\n/).map((line) => {
    const [key, val] = line.split(/: /);
    if(key.includes('TITLE')) {
      title = val;
    }else if( key.includes('STATUS') ) {
      status = val;
    }else if( key.includes('BASENAME') ) {
      slug = val;
    }else if( key.includes('DATE') ) {
      published_at = val;
    }else if( key.includes('CATEGORY') ) {
      categories.push(val);
    }
  });

  const body = contents[1].split(/BODY:\n/)[1];
  const extended_body = contents[2].split(/EXTENDED BODY:\n/)[1];


  client.getSpace(process.env.CONTENTFUL_SPACE_ID)
  .then((space) => space.getEnvironment('master'))
  .then((env) => env.createEntryWithId('post', 'hogehoge', {
    fields: {
      title: {
        'en-US': title,
      },
      content: {
        'en-US': body,
      },
    }
  }))
  .then((entry) => console.log(entry))
});
