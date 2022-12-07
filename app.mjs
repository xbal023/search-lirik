import fetch from "node-fetch";
import cheerio from "cheerio";
import pretty from "pretty";
import fs from "fs";

// by bolaxd
// https://www.lirikterjemahan.id/search?q=

function laguBaratSearch(query, page = 1) {
   return new Promise(async (resolve, reject) => {
      await fetch(`https://www.lirikterjemahan.id/search?q=${query.replace(/ /gi,"+")}&m=${page}`, {
            method: "GET",
         }).then((v) => v.text())
         .then((o) => {
            const X = cheerio.load(o);
            const H = [];
            X(".blog-posts > article").map((b, i) => {
               const Z = X(i);
               const title = Z.find(".post-title > a").text();
               const urlHtml = Z.find(".post-title > a").attr("href");
               const label = Z.find(".post-label").text();
               const snippet = Z.find(".post-snippet").text()
               H.push({
               	title,
               	urlHtml,
               	label,
               	snippet
               })
            });
            resolve(H)
            // fs.writeFileSync("isi.html", pretty(v));
         })
         .catch(reject);
   });
}

function laguBaratGet(html, page = 1) {
	return new Promise(async (resolve, reject) => {
		await fetch(html, {
			method: "GET"
		}).then(v => v.text())
		.then(o => /*fs.writeFileSync('tes2.html', pretty(o))*/ {
			const kont = cheerio.load(o)
			resolve(kont('.post-body').text())
		})
	})
}

console.log(await laguBaratSearch("maroon"));
// console.log(await laguBaratGet('https://www.lirikterjemahan.id/2015/10/lirik-passenger-fools-gold-terjemahan.html'));
