require('dotenv').config()
const fs = require('fs');
const photoTxt = fs.readFileSync('tmp/20200603/photo.txt', 'utf-8');

(async () => {
  // console.log(file);
  let photos = [];
  for(let i = 1; i < 7; i++) {
    const file = fs.readFileSync(`tmp/20200603/${i}.xml`, 'utf-8');
    const matches = file.match(/https\:\/\/cdn-ak\.f\.st-hatena\.com\/images\/fotolife\/o\/o_tomomichi\/\d+\/\d+\.(png|jpg)/g);
    console.log('---');
    console.log(i);
    const uniq = [...new Set(matches)];
    console.log(uniq.length);
    photos = photos.concat(uniq);
  }
  console.log('======')
  console.log(photos.length);

  fs.writeFile("tmp/20200603/photo.txt", photos.join("\r\n"), (res) => console.log(res))
})();
