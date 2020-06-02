import React from "react";
const Feed = require("feed").Feed;

export default class Rss extends React.Component {
  static async getInitialProps({ res }) {
    const client = require('contentful').createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const entries = await client.getEntries({
       content_type: 'post',
       order: '-fields.date',
       limit: 20,
     })
    .then(function (entries) {
      const items = entries.items;
      return { items }
    })


    const feed = new Feed({
      title: "NOT SO BADなブログ",
      description: "ぼっちスタートアップが日々がんばっています。",
      id: "https://blog.notsobad.jp/",
      link: "https://blog.notsobad.jp/",
      language: "ja", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
      image: "https://blog.notsobad.jp/images/notsobad/ogp.png",
      favicon: "https://blog.notsoabd.jp/images/notsobad/favicon.ico",
      copyright: "All rights reserved 2020, NOT SO BAD, LLC.",
      feedLinks: {
        atom: "https://blog.notsobad.jp/feed"
      },
      author: {
        name: "ほげにし",
        email: "info@notsobad.jp",
        link: "https://notsobad.jp/"
      }
    });

    entries.items.forEach(post => {
      feed.addItem({
        title: post.fields.title,
        id: `https://blog.notsobad.jp/entry/${post.fields.slug}`,
        link: `https://blog.notsobad.jp/entry/${post.fields.slug}`,
        description: post.fields.excerpt,
        date: new Date(post.fields.date),
        image: post.fields.image
      });
    });

    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.write(feed.atom1());
    res.end();
  }
}
