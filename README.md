<p align="center">
<img src="https://github.com/bolaxd.png?size=500" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="uu" src="https://img.shields.io/badge/Search%20lagu%20barat-green?colorA=%23ff0000&colorB=C13584&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/bolaxd"><img title="Autor" src="https://img.shields.io/badge/Author-bolaxd-5851DB.svg?style=for-the-badge&logo=github"></a>
</p>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fbolaxd%2Fsearch-lirik.git&count_bg=%23833AB4&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/bolaxd/search-lirik?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/bolaxd/search-lirik/followers/"><img title="Followers" src="https://img.shields.io/github/followers/bolaxd?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/bolaxd/search-lirik/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/bolaxd/search-lirik?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/bolaxd/search-lirik/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/bolaxd/search-lirik?color=%23833AB4&logo=github&style=flat-square"></a>
</p>

### Bagaimana cara menggunakan nya?

Salin Kode yang berada pada file ber extensi ```app.mjs``` kedalam file anda
install lah module yang dibutuhkan disitu
```js
import fetch from "node-fetch";
import cheerio from "cheerio";
import pretty from "pretty";
```
```cmd 
$ npm install fetch cheerio pretty --save
```
setelah anda selesai menginstallnya, anda cukup memanggil function nya! 

```js
(async () => {
	const result = await laguBaratSearch('maroon');
	console.log(result)
})();
```
Jika berhasil? maka anda akan melihat result seperti dibawah ini 
```cmd 
[
	{
		title: "Maroon 5 - Can't Stop",
		urlHtml: 'https://www.lirikterjemahan.id/2014/11/maroon-5-cant-stop.html',
		label: '\nLirik Lagu Barat\n',
		snippet: '\n' +
		"Lirik lagu dan terjemahan Can't Stop dari Maroon 5 dirilis pada 16 Mei 2007 dalam alb…\n"
	},
	{
		title: 'Maroon 5 - Daylight',
		urlHtml: 'https://www.lirikterjemahan.id/2015/05/maroon-5-daylight.html',
		label: '\nLirik Lagu Barat\n',
		snippet: '\n' +
		'Lirik lagu dan terjemahan Daylight dari Maroon 5 dirilis pada 27 November 2012 dalam albu…\n'
  }
]
```
### Cara mendapatkan lirik dari searching... 

Tidak sampe disitu, anda juga saya tutori cara mendapatkan liriknya, caranya seperti dibawah 
```js 
(async () => {
	const result = await laguBaratGet(url)
	console.log(result)
})();
```
anda bisa mendapatkan url tersebut dari result search dengan property ```urlHtml```

Masih bingung? sini join gc :v

[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/Joejcs0ebWl5Kqn97YEl4z)