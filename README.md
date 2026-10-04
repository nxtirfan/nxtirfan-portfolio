# nxtirfan-portfolio

Situs portofolio pribadi M. Irfan Al Hakim, mahasiswa Program Studi Statistika
dan Sains Data, Universitas Negeri Semarang.

Situs ini dibangun sepenuhnya dengan HTML, CSS, dan JavaScript tanpa proses
build sehingga dapat dihosting sebagai situs statis pada layanan seperti GitHub
Pages, Google Cloud Storage, atau Cloudflare Pages. Seluruh tautan aset memakai
path relatif agar dapat dijalankan dari root domain maupun subdirektori.

## Isi situs

- `index.html` berisi delapan bagian: Tentang, Riset Unggulan, Proyek,
  Kemampuan, Pengalaman, Pendidikan, Sertifikasi, dan Kontak.
- `404.html` adalah halaman galat Not Found untuk konfigurasi hosting.
- `assets/css/main.css` memuat seluruh gaya tampilan.
- `assets/js/main.js` menangani navigasi mobile, penanda bagian aktif saat
  menggulir, dan penyesuaian tahun pada footer.
- `assets/img/` memuat gambar, favicon, dan pustaka ikon dalam format SVG.
- `assets/stamps/` memuat elemen dekoratif untuk bagian tertentu.

## Pratinjau lokal

Jalankan server statis sederhana dari direktori ini, lalu buka
`http://localhost:8000`:

```
python -m http.server 8000
```

## Deployment

- **GitHub Pages:** Settings, halaman Pages, pilih Deploy from a branch, branch
  `main`, folder `/ (root)`.
- **Google Cloud Storage:** unggah seluruh isi direktori ini ke root bucket,
  isi Main page dengan `index.html` dan Not found page dengan `404.html`.
- **Cloudflare Pages:** hubungkan repositori GitHub ini, kosongkan build
  command, dan tetapkan output directory ke `/`.
