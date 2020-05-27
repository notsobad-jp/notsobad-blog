require('dotenv').config()

const contentful = require('contentful-management')
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
})

const TurndownService = require('turndown')
const turndownService = new TurndownService()

const fs = require('fs');

const file = fs.readFileSync('lib/export.txt', 'utf-8');
const posts = file.split(/-----[\r\n]--------/);

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

(async () => {
  for(const [index, post] of posts.entries()) {
    const contents = post.split(/-----[\r\n]/)
    if(contents[1]==undefined) { return; }

    const meta = contents[0];
    let title, slug, published_at, status, image;
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
      }else if( key.includes('IMAGE') ) {
        image = val;
      }else if( key.includes('CATEGORY') ) {
        categories.push(val);
      }
    });

    let imageUrl;
    if(image && image != '') {
      const fileName = image.match(/\/(\d+)\./)[1]
      imageUrl = `https://storage.googleapis.com/blog-notsobad/images/${fileName}.png`
    }

    const body = contents[1].split(/BODY:\n/)[1];
    const extended_body = contents[2].split(/EXTENDED BODY:\n/)[1];

    client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'))
    .then((env) => env.createEntry('post', {
      fields: {
        title: {
          'en-US': title,
        },
        slug: {
          'en-US': slug,
        },
        excerpt: {
          'en-US': turndownService.turndown(body),
        },
        content: {
          'en-US': turndownService.turndown(body) + turndownService.turndown(extended_body),
        },
        date: {
          'en-US': Date.parse(published_at),
        },
        image: {
          'en-US': imageUrl,
        }
      }
    }))
    .then((entry) => entry.publish())

    console.log(`${index}:${title}`);
    await sleep(1000);
  };
})();
