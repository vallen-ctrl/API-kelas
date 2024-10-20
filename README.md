
<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  Markdownify
  <br>
</h1>

<h4 align="center">Pembuatan API untuk jual beli tiket <a href="http://electron.atom.io" target="_blank">-</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

<p align="center">
  <a href="#Fitur Utama"> fitur utama</a> •
  <a href="#Cara menggunakan">cara menggunakan</a> •
  <a href="#API FITUR">API</a> •
  <a href="#Cara menggunakan di salah satu fungsi">contoh</a>
</p>

![screenshot](https://manpro.id/blog/wp-content/uploads/2021/06/mengenal-manfaat-penggunaan-api.png)

## Fitur Utama

* Melihat jumlah kursi tiap kelas
* Menambahkan data kursi per kelas
* Memperbaharui jumlah kursi yang salah 
* kode bayar dan melakukan verivikasi pembayaran via *soon*
* Mengubah kondisi kursi yang telah dipesan 

## Cara menggunakan

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone "ss"

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install
```

> **Note**
> Setelah menginstall semua kebutuhan, buat file *.EVN* untuk menambahkan beberapa kunci penting didalamnya dengan tempalte .env sebagai berikut.

``` bash
dbUser = "nama DB anda"
dbPasswd = "password DB anda"
TOKENS = ["token anda"]
```
> **Note**
> token digunakan untuk melihat apakah orang mengakses api kita adalah orang orang tertrntu. anda dapat menghapus fitur ini di file index.js

``` javascript
.....
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cukup hapus bagian yang di bawah ini
app.use((req, res, next) => { 
  const token = req.headers.token;
  if (tokens.includes(token)) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
});
.....
```

lalu anda dapat menjalankan file dengan ``` npm run ```

## API FITUR

| kunci   | kegunaan | umpan balik |metode|
|---------|----------|-------------|------|
| / | hanya menampilkan kata selamat datang   | -     |``` get```|
| /jumlahKursi|untuk melihat jumlah kursi yang disiapkan tiap kelasnya| {int, int}     |```get```|
| /tambahKelas| untuk menambahkan kelas yang belum memiliki data prihal kursi yang disediakan| {int, int}    |```post```|
|/perbaharuiKelas|soon|{int}|```post```|
|/perbaharuijumlahKursi|untuk memperbaharui nilai bangku yang telah ada| {int}|```post```|
|/kodebayar|soon|{soon}|```get```|
|/mengubahkondisi|mengubah kondisi bangku yang sudah terbeli ataupun belum|[int]|```post```|

## Cara menggunakan di javascript
``` javascript

//async function
let data = await fetch('https://api.example.com', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'token': 'token-anda' //ini bila tidak ada token maka akses anda ke server akan terbatas.
  },
  body:{
    params1: "",
    params2: ""
    ...
  }
})
```

| kunci   | paramater body |
|---------|----------|
|/jumlahkursi|kelas: int|
|/tambahKelas|kelas: int, jumlahKursi: int|
|/perbaharuijumlahKursi|kelas: int, jumlahKursi: int|
|/perbaharuiKelas|soon|
|/kodebayar|soon|
|/mengubahkondisi|statusbangku:[int], kelas: int|


## Cara menggunakan di salah satu fungsi
``` javascript

//async function
let data = await fetch('https://api.example.com/tambahKelas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token': 'token-anda' //ini bila tidak ada token maka akses anda ke server akan terbatas.
  },
  body:{
    kelas: 1,
    jumlahKursi: 20
  }
})
```

untuk params kelas harus unik dan tidak bisa sama dengan yang lainnya. akan ada throwback bila params *kelas* memiliki nilai yang sama dengan yang ada.
## Credits

This software uses the following open source packages:


- [Node.js](https://nodejs.org/)
- [showdown](http://showdownjs.github.io/showdown/)
- Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)
- [highlight.js](https://highlightjs.org/)

## Support

<a href="https://saweria.co/vantan2212" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Instagram

- [Vallen Malia](https://www.instagram.com/vallen_malia/) - Back End developer
- [Tegar](https://www.instagram.com/tegarvirgi_/) - Front end developer

## License

MIT

---

> [amitmerchant.com](https://www.amitmerchant.com) &nbsp;&middot;&nbsp;
> GitHub [@amitmerchant1990](https://github.com/amitmerchant1990) &nbsp;&middot;&nbsp;
> Twitter [@amit_merchant](https://twitter.com/amit_merchant)

