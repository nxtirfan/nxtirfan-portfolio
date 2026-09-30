// nxtirfan-portfolio — interaksi ala mujica (drawer, navbar, trivia, smooth scroll)
(function () {
  var menuBtn = document.getElementById('mujica-menu-btn');
  var closeBtn = document.getElementById('mujica-close-btn');
  var mobileMenu = document.getElementById('mujica-mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
      });
    });
  }

  var jokes = [
    'Kenapa programmer tidak suka alam terbuka? Karena ada banyak bug di sana!',
    'Debugging: menghilangkan bug untuk membuat bug baru yang lebih kreatif.',
    'Kenapa programmer selalu bawa payung? Karena takut runtime error.',
    'Aku bukan malas, aku hanya dalam mode energy saving.',
    "Komit pertama: 'Initial commit'. Komit kedua: 'Fix previous commit'.",
    '99 little bugs in the code, take one down, patch it around, 127 little bugs.',
    'MikroTik tidak salah, yang salah biasanya firewall-nya.',
    'Jaringan bagus, hati tenang.'
  ];
  var jokeText = document.getElementById('mujica-joke-text');
  var jokeBtn = document.getElementById('mujica-joke-btn');
  if (jokeBtn && jokeText) {
    jokeBtn.addEventListener('click', function () {
      var cur = jokeText.textContent, next = cur, guard = 0;
      while (next === cur && guard < 10) {
        next = jokes[Math.floor(Math.random() * jokes.length)];
        guard++;
      }
      jokeText.style.opacity = '0';
      setTimeout(function () { jokeText.textContent = next; jokeText.style.opacity = '1'; }, 200);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  var navbar = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.scrollY > 10) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
})();
