# nxtirfan-portfolio

Portofolio editorial akademik M. Irfan Al Hakim (Statistika & Sains Data, UNNES) —
**100% statis** (HTML+CSS+JS murni, tanpa build step) sehingga bisa di-hosting di GCS,
Cloudflare Pages, dan GitHub Pages.

Desain: tenang, gelap, dan tipografis (near-black violet-charcoal `#0d0b14`,
panel mantle `#161221`, off-white `#f4f1fa`, satu ungu brand `#884499` +
tint 15% + lavender mikro + sky `#58e0fe` untuk taut penting) dengan lapisan
visual Nightcord/Ena yang samar: figur kontur monokrom, halftone, grain, dan
ghost type `25時、ナイトコードで。`. Navigasi memakai mark tipografis
`❖ 25時、ナイトコードで。` + indikator aktif; peran tipografi ketiga memakai
`IBM Plex Mono` untuk metadata (`STATUS / PUBLISHED`, `01 / 07`).
Stempel Ena PNG asli (3 buah: riset, tentang, kontak) dipakai sebagai
interupsi editorial kecil — bukan visual utama.

## Isi (hanya karya terverifikasi)

- `index.html` — 01 Tentang · pita malam full-width · 02 Riset Unggulan (artikel
  jurnal SMDS flood susceptibility Semarang–Demak, Vol. 1 No. 1, hlm. 22–47,
  strip `ARTICLE / JOURNAL · STATUS / PUBLISHED`) · 03 Proyek (PresensiGPS,
  aplikasi presensi GPS + selfie — Laravel 10/MySQL, Tugas Kelompok 9 MK Basis
  Data 2025, beserta tangkapan layar `proyek-presensi.png` yang digrayscale
  agar monokrom) · 04 Kemampuan · 05 Pengalaman (Backend AI Engineer Intern
  @ FlyRank AI, Teknisi Stock Opname & CCTV @ GSI CCTV) · 06 Pendidikan
  (S1 UNNES, SMK) · 07 Sertifikasi (3 Dicoding + 1 MikroTik, beserta taut
  verifikasi) · 08 Kontak.
  Ikon brand/UI disisipkan inline SVG (`currentColor`, 6 titik pakai).
- `404.html` — halaman Not Found editorial (untuk konfigurasi Website GCS).
- `assets/css/main.css` — seluruh gaya (plain CSS, tanpa framework).
- `assets/js/main.js` — drawer navigasi mobile, status navbar, scrollspy
  indikator aktif, smooth scroll, tahun otomatis (menghormati
  `prefers-reduced-motion`).
- `assets/img/ena-hero-contour.jpg` — figur kontur monokrom untuk hero (crop
  kanan, mask + halftone, menyatu sebagai latar editorial);
  `assets/img/ena-still.jpg` — still-life labu/terarium mono untuk panel riset
  (crop tanpa wajah); `assets/img/ena-night-band.jpg` — pita malam monokrom
  untuk divider full-width; `assets/img/ena-line-inv.jpg` — motif line-art
  untuk kontak; `assets/img/ena-line2.jpg` — linework samar latar Kemampuan;
  `assets/img/og-image.jpg` — pratinjau sosial 1200×630;
  `assets/img/niigo.svg` — favicon; `assets/img/icons/` — pustaka 28 ikon
  (simple-icons + lucide, cadangan lokal).
- `assets/stamps/ena-stamp-{research,about,contact}.png` — 3 stempel Ena resmi
  (artwork asli, tanpa glow/bingkai/kartu).

Catatan: taut DOI artikel (`10.15294/smds.v1i1.62500`) ditampilkan sebagai teks
sampai resolusi DOI-nya aktif; taut halaman artikel menuju jurnal SMDS UNNES.

## Deploy

- **GCS:** upload ISI folder ini ke root bucket, Main page `index.html`,
  Not found `404.html`.
- **Cloudflare Pages (Upload):** drag isi folder ini.
- **Cloudflare Pages (Git):** connect ke repo GitHub `nxtirfan/nxtirfan-portfolio`,
  root `/`, build command kosong, output directory `/`.
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` → `/ (root)`.
