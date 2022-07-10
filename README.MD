# TEST PT BESTARI ADITAMA PERSADA2

Proyek ini dikerjakan oleh Elga Ridlo Sinatriya

## I HOPE THAT I CAN PASS THIS TEST

If you want to see the repository just go to https://github.com/elgaridlo/bestari_aditama_persada2.git

## Installasi

Proyek ini membutuhkan [Node.js](https://nodejs.org/) 16+ untuk menjalankan aplikasi.

Install the dependencies and devDependencies and start the server.
Installasi dependency dan devDependency.

```sh
npm i
```
Untuk menjalankan server lakukan

```sh
npm run server
```
## Features

- Membuat Tempat Parkir
Terdapat validasi nama blok sudah ada atau belum.
```sh
POST http://localhost:4000/api/block
body: {
 "name": "{Tulis Nama Blok}",
 "size": {jumlah slot diblok ini}
}
```
- Check blok tertentu dengan slot yang kosong
```sh
GET http://localhost:4000/api/block/check/{pilihBlok}
```
- Mengecek semua blok yang ada
```sh
GET http://localhost:4000/api/block
```
- Mengisi kendaraan parkir
Terdapat validasi wajib mengisi nama blok, pengecekan nama blok ada atau tidak, pengecekan blok penuh atau tidak, dan pengecekan nomor mobil tidak boleh sama.
```sh
POST http://localhost:4000/api/slot/fillslot
body : {
    "name": "{nama blok}", 
    "car_number": "{nomor plat mobil}" // harus unik karena terdapat validasi
}
```
- Kendaraan meninggalkan tempat parkir
Terdapat validasi check nomor kendaraan
```sh
PUT http://localhost:4000/api/slot/leave/{Nomor Kendaraan}
```
## Tech

Parkir APP menggunakan framework open-source:

- [node.js]
- [Express]
- [mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [morgan](https://www.npmjs.com/package/morgan)

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>


