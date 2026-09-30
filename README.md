# nxtirfan-portfolio

Salinan modern dari `web/MuhIrfan-main/` dengan gaya meniru repo lokal `nxtirfan-mujica`
(Next.js Ave Mujica: dark purple `#1a0c2e`, magenta `#e0007c`, pink `#ff4081`,
glassmorphism, floating badges, grid overlay) — tetapi **100% statis** (HTML+CSS+JS murni,
tanpa build step) sehingga bisa di-hosting di GCS, Cloudflare Pages, dan GitHub Pages.

## Isi (konten dipertahankan dari MuhIrfan, kulit diganti ala Mujica)
- `index.html` — hero M. Irfan Al Hakim, about TJKT + sosmed, skills (MikroTik/CCNA/Infra),
  galeri velyuuart, program demo, sertifikat CCNA, trivia box.
- `kalkulator.html`, `umur-tinggi.html`, `perulangan.html` — logika PHP → JavaScript.
- `array.html` — render PHP di-hardcode jadi tabel statis.
- `login.html` — demo login statis (`irfan` / `irfan123`).
- `404.html` — halaman Not Found untuk Website configuration GCS.
- `assets/css/mujica.css` — adaptasi `styles.css` mujica (plain CSS, tanpa Tailwind v4).
- `assets/js/main.js` — adaptasi `public/index.js` mujica (drawer, navbar, trivia, smooth scroll).
- `assets/js/tailwind.js` — Tailwind Play CDN lokal (disalin dari web asli).
- `assets/img/` — gambar lama + `avemujica.png` (logo, disalin dari mujica).

## Deploy
- **GCS:** upload ISI folder ini ke root bucket, Main page `index.html`, Not found `404.html`.
- **Cloudflare Pages (Upload):** drag isi folder ini.
- **Cloudflare Pages (Git):** connect ke repo GitHub `nxtirfan/nxtirfan-portfolio`, root `/`,
  build command kosong, output directory `/`.
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Kredit style
Palet, glass card, badge, tombol, grid fade, dan jokes diadaptasi dari
`C:\Users\Administrator\Documents\TypeScript\nxtirfan-mujica` (pribadi, Ave Mujica).
Konten teks, gambar portofolio, dan logika program berasal dari `web/MuhIrfan-main/`.
