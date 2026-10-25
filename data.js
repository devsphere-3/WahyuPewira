/* ==========================================================
   PORTFOLIO CONTENT — single source of truth.
   Edit this file to add / update projects and copy.
   Any field set to null is treated as "not yet provided"
   and is hidden from the published site.
   ========================================================== */

window.PORTFOLIO = {
  person: {
    name: "Wahyu Perwira Sanusi Sihombing",
    shortName: "Wahyu Perwira",
    initials: "WP",
    role: { id: "Full-Stack Developer & Digital Product Builder", en: "Full-Stack Developer & Digital Product Builder" },
  },

  /* Contact — isi hanya dengan data asli di sini.
     Bagian Kontak selalu tampil; baris yang belum diisi ditandai
     "Belum diisi" agar mudah dilengkapi nanti. */
  contact: {
    email: "wahyuperwirasanusi0323@gmail.com",     // Gmail: e.g. "nama@gmail.com"
    whatsapp: "https://wa.me/6282283130010",  // WhatsApp: e.g. "https://wa.me/62812xxxxxxx"
    instagram: "https://instagram.com/xwhyu_23", // Instagram: e.g. "https://instagram.com/username"
    linkedin: "https://www.linkedin.com/in/wahyu-perwira-sanusi/",  // LinkedIn: full URL
    github: "https://github.com/devsphere-3",    // GitHub: full URL
  },

  ui: {
    id: {
      nav: { home: "Beranda", about: "Tentang", projects: "Proyek", contact: "Kontak" },
      heroEyebrow: "Full-Stack Developer · Digital Product Builder",
      heroTitle: ["Membangun produk", "digital yang", "benar-benar"],
      heroRotate: ["Berfungsi.", "Terstruktur.", "Andal.", "Adaptif.", "Berkembang."],
      heroLead: "Saya mengembangkan aplikasi web dan solusi digital praktis — dari backend Laravel hingga antarmuka React dan Next.js — dengan fokus pada sistem yang terstruktur dan sesuai kebutuhan nyata.",
      ctaProjects: "Lihat Proyek",
      ctaContact: "Hubungi Saya",
      currentLabel: "Sedang dikerjakan",
      currentText: "BravePay — platform registrasi digital dengan QRIS",
      photoPlaceholder: "Foto profil — seret gambar ke sini",
      aboutKicker: "Tentang",
      aboutTitle: "Fungsional dulu, lalu rapi dan mudah dirawat.",
      approachTitle: "Pendekatan kerja",
      techTitle: "Teknologi",
      techNote: "Alat dan teknologi yang saya gunakan untuk membangun produk digital.",
      projectsKicker: "Proyek",
      projectsTitle: "Karya terpilih",
      projectsLead: "Proyek yang pernah dan sedang saya kerjakan — dari platform pembayaran hingga website organisasi dan acara.",
      caseStudy: "Studi kasus",
      visit: "Kunjungi situs",
      archived: "Arsip — hosting kedaluwarsa",
      featured: "Proyek utama",
      contactKicker: "Kontak",
      contactTitle: "Punya proyek atau peluang kerja?",
      contactLead: "Saya terbuka untuk diskusi proyek web, produk digital, dan kolaborasi.",
      contactEmpty: "Belum diisi",
      back: "Kembali ke proyek",
      next: "Proyek berikutnya",
      sections: {
        overview: "Overview", problem: "Masalah", role: "Peran Saya", approach: "Pendekatan Teknis",
        stack: "Tech Stack", screens: "Screenshot / Demo", outcome: "Hasil",
      },
      meta: { status: "Status", started: "Mulai", type: "Jenis", link: "Tautan" },
      shotPlaceholder: "Screenshot",
      footer: "Membangun Dengan Cinta.",
      skip: "Lewati ke konten",
      menu: "Menu",
    },
    en: {
      nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
      heroEyebrow: "Full-Stack Developer · Digital Product Builder",
      heroTitle: ["Building digital", "products that", "actually"],
      heroRotate: ["Works.", "Structured.", "Reliable.", "Adaptive.", "Evolving."],
      heroLead: "I build web applications and practical digital solutions — from Laravel backends to React and Next.js interfaces — focused on structured systems that fit real-world needs.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      currentLabel: "Currently building",
      currentText: "BravePay — a digital registration platform with QRIS",
      photoPlaceholder: "Profile photo — drop an image here",
      aboutKicker: "About",
      aboutTitle: "Functional first, then clean and maintainable.",
      approachTitle: "How I work",
      techTitle: "Technologies",
      techNote: "The tools and technologies I use to build digital products.",
      projectsKicker: "Projects",
      projectsTitle: "Selected work",
      projectsLead: "Projects I have built or am building — from payment platforms to organisation and event websites.",
      caseStudy: "Case study",
      visit: "Visit site",
      archived: "Archive — hosting expired",
      featured: "Main project",
      contactKicker: "Contact",
      contactTitle: "Have a project or an opportunity?",
      contactLead: "I'm open to discussing web projects, digital products and collaborations.",
      contactEmpty: "Not set yet",
      back: "Back to projects",
      next: "Next project",
      sections: {
        overview: "Overview", problem: "Problem", role: "My Role", approach: "Technical Approach",
        stack: "Tech Stack", screens: "Screenshots / Demo", outcome: "Outcome",
      },
      meta: { status: "Status", started: "Started", type: "Type", link: "Link" },
      shotPlaceholder: "Screenshot",
      footer: "Building with love",
      skip: "Skip to content",
      menu: "Menu",
    },
  },

  about: {
    id: "Saya adalah Full-Stack Developer dan pengembang produk digital yang berfokus pada aplikasi web dan solusi digital praktis. Saya menggunakan Laravel untuk pengembangan backend, React dan Next.js pada proyek berbeda, serta MySQL, PostgreSQL, dan SQLite. Salah satu proyek utama saya adalah BravePay, platform registrasi digital dengan integrasi QRIS, payment gateway, dan webhook, yang mulai saya kerjakan pada Agustus 2026. Saya tertarik membangun produk digital yang fungsional, terstruktur, dan sesuai kebutuhan nyata.",
    en: "I am a Full-Stack Developer and Digital Product Builder focused on web applications and practical digital solutions. My experience includes advanced Laravel development, using React and Next.js across different projects, and working with MySQL, PostgreSQL, and SQLite. My main project is BravePay, a digital registration platform incorporating QRIS, payment gateway integration, and webhooks, which I started in August 2026. I aim to build functional, maintainable digital products aligned with real-world needs.",
  },

  approach: [
    { id: { t: "Fungsional", d: "Fitur harus menyelesaikan kebutuhan pengguna yang nyata, bukan sekadar tampil." },
      en: { t: "Functional", d: "Features should solve a real user need, not just look good." } },
    { id: { t: "Terstruktur", d: "Kode dan data dirancang rapi agar mudah dikembangkan dan dirawat." },
      en: { t: "Structured", d: "Code and data are organised so the product is easy to extend and maintain." } },
    { id: { t: "Sesuai konteks", d: "Solusi disesuaikan dengan alur kerja dan kondisi pengguna di lapangan." },
      en: { t: "Context-fit", d: "Solutions are shaped around how people actually work on the ground." } },
  ],

  /* Tech logos — dirender sebagai marquee logo (tanpa teks) yang bergerak
     dari kanan ke kiri tanpa batas. `icon` = slug Simple Icons.
     level: "core" | "used" | "familiar" (mengatur penekanan visual). */
  tech: [
    { name: "Laravel", icon: "laravel", level: "core" },
    { name: "React", icon: "react", level: "used" },
    { name: "Next.js", icon: "nextdotjs", level: "used" },
    { name: "Tailwind CSS", icon: "tailwindcss", level: "used" },
    { name: "MySQL", icon: "mysql", level: "used" },
    { name: "PostgreSQL", icon: "postgresql", level: "used" },
    { name: "SQLite", icon: "sqlite", level: "used" },
    { name: "JavaScript", icon: "javascript", level: "familiar" },
    { name: "TypeScript", icon: "typescript", level: "familiar" },
    { name: "Python", icon: "python", level: "familiar" },
    { name: "C++", icon: "cplusplus", level: "familiar" },
  ],

  /* ---------------- PROJECTS ----------------
     status: "live" | "archive"
     images: [cover, ...screenshot] — cover tampil di kartu & header studi kasus.
     Field studi kasus = null → disembunyikan dari situs. */
  projects: [
    {
      slug: "bravepay",
      name: "BravePay",
      url: "https://bravepay.store",
      status: "live",
      featured: true,
      started: { id: "Agustus 2026", en: "August 2026" },
      type: { id: "Platform registrasi digital", en: "Digital registration platform" },
      tags: ["QRIS", "Payment Gateway", "Webhook", "E-Ticket"],
      images: ["assets/img/BRAVEMASTER.png", "assets/img/BRAVE1.png"],
      short: {
        id: "Platform registrasi lomba dan event tanpa login: isi data, bayar dengan QRIS, dan e-ticket dikirim ke WhatsApp & email.",
        en: "Registration platform for competitions and events with no login: fill in details, pay via QRIS, and receive an e-ticket by WhatsApp & email.",
      },
      overview: {
        id: "BravePay adalah platform registrasi digital untuk lomba dan event di Indonesia. Peserta tidak perlu membuat akun — cukup memilih event, mengisi data, membayar dengan QRIS, lalu menerima e-ticket berisi QR Code untuk check-in di lokasi.",
        en: "BravePay is a digital registration platform for competitions and events in Indonesia. Participants don't need an account — they pick an event, fill in their details, pay via QRIS, and receive an e-ticket with a QR code for on-site check-in.",
      },
      problem: {
        id: "Pendaftaran event yang mewajibkan pembuatan akun dan konfirmasi pembayaran manual menambah langkah bagi peserta dan beban bagi panitia. Dibutuhkan alur yang singkat bagi peserta, dengan status pembayaran yang dapat dipercaya oleh panitia.",
        en: "Event registration that requires creating an account and manually confirming payments adds friction for participants and workload for organisers. The goal: a short flow for participants, with payment status organisers can trust.",
      },
      role: {
        id: "Full-stack developer — merancang alur registrasi, membangun backend, mengintegrasikan payment gateway QRIS, menangani webhook, dan mengirim e-ticket ke peserta.",
        en: "Full-stack developer — designed the registration flow, built the backend, integrated the QRIS payment gateway, handled webhooks, and delivered e-tickets to participants.",
      },
      flow: {
        id: ["Pilih lomba", "Isi data", "Bayar QRIS", "Terima e-ticket", "Check-in QR"],
        en: ["Pick an event", "Fill details", "Pay via QRIS", "Get e-ticket", "QR check-in"],
      },
      approach: {
        id: [
          { t: "Pembayaran QRIS via payment gateway", d: "Peserta membayar dengan memindai QRIS dari aplikasi bank atau e-wallet." },
          { t: "Status dikonfirmasi melalui webhook", d: "Status registrasi hanya berubah setelah konfirmasi webhook dari payment gateway, bukan dari sisi klien." },
          { t: "Registrasi tanpa akun & multi peserta", d: "Satu transaksi dapat mendaftarkan satu atau beberapa peserta tanpa proses login." },
          { t: "E-ticket & check-in", d: "E-ticket dikirim ke email dan WhatsApp; panitia memindai QR Code peserta untuk verifikasi kehadiran." },
        ],
        en: [
          { t: "QRIS payments via a payment gateway", d: "Participants pay by scanning a QRIS code from any banking or e-wallet app." },
          { t: "Status confirmed by webhook", d: "Registration status only changes after a webhook confirmation from the payment gateway — never from the client side." },
          { t: "Account-free, multi-participant registration", d: "One transaction can register one or several participants without a login." },
          { t: "E-ticket & check-in", d: "E-tickets are delivered by email and WhatsApp; organisers scan the participant's QR code to verify attendance." },
        ],
      },
      stack: ["Laravel", "MySQL", "QRIS Payment Gateway", "Webhook API", "WhatsApp Gateway"],
      outcome: {
        id: "Registrasi event berjalan tanpa pembuatan akun: peserta membayar dengan QRIS dan langsung menerima e-ticket, sementara status pembayaran terkonfirmasi otomatis melalui webhook.",
        en: "Event registration now runs without account creation: participants pay via QRIS and immediately receive an e-ticket, while payment status is confirmed automatically through webhooks.",
      },
    },
    {
      slug: "pramuka-badang-perkasa",
      name: "Pramuka Badang Perkasa",
      url: "https://pramukabadangperkasa.com",
      status: "live",
      started: null,
      type: { id: "Website organisasi", en: "Organisation website" },
      tags: ["Website Organisasi", "Profil", "Responsif"],
      images: ["assets/img/badangperkasa.png", "assets/img/badangperkasa1.png"],
      short: {
        id: "Website resmi organisasi Pramuka Badang Perkasa sebagai pusat informasi profil dan kegiatan kepramukaan.",
        en: "The official website of the Pramuka Badang Perkasa scouting organisation — a hub for its profile and activities.",
      },
      overview: {
        id: "Website organisasi untuk Pramuka Badang Perkasa. Situs ini menjadi kanal resmi yang menampilkan profil, kegiatan, dan informasi keanggotaan sehingga anggota maupun masyarakat umum dapat mengaksesnya dari satu tempat.",
        en: "An organisation website for Pramuka Badang Perkasa. It serves as the official channel presenting the profile, activities and membership information, so members and the public can find everything in one place.",
      },
      problem: {
        id: "Informasi organisasi dan agenda kegiatan sebelumnya tersebar dan sulit diikuti. Dibutuhkan satu halaman resmi yang mudah diperbarui serta nyaman diakses dari ponsel.",
        en: "Organisation information and activity agendas were scattered and hard to follow. A single official page was needed — easy to update and comfortable to read on a phone.",
      },
      role: {
        id: "Perancangan dan pengembangan website — menyusun struktur halaman, membangun antarmuka responsif, dan menyiapkan konten organisasi.",
        en: "Design and development — structured the pages, built a responsive interface and prepared the organisation's content.",
      },
      approach: {
        id: [
          { t: "Struktur informasi yang jelas", d: "Profil, kegiatan, dan kontak disusun dalam alur yang mudah dipindai." },
          { t: "Nyaman di semua perangkat", d: "Tata letak menyesuaikan diri dari ponsel hingga desktop." },
          { t: "Konten mudah diperbarui", d: "Bagian konten dipisahkan dari tata letak agar pembaruan cepat." },
        ],
        en: [
          { t: "Clear information structure", d: "Profile, activities and contact are arranged in an easy-to-scan flow." },
          { t: "Comfortable on every device", d: "The layout adapts from phones through to desktops." },
          { t: "Easy-to-update content", d: "Content is separated from layout so updates stay quick." },
        ],
      },
      stack: ["Laravel", "Tailwind CSS", "MySQL"],
      outcome: {
        id: "Organisasi memiliki satu kanal resmi yang aktif untuk membagikan profil dan kegiatannya.",
        en: "The organisation now has a single active official channel for sharing its profile and activities.",
      },
    },
    {
      slug: "miix-2026",
      name: "MIIX 2026",
      url: "https://miix2026.vercel.app/",
      status: "live",
      started: null,
      type: { id: "Website digital hub", en: "Digital hub website" },
      tags: ["Digital Hub", "Profil Usaha", "Vercel"],
      images: ["assets/img/MiixMaster.png", "assets/img/Miix1.png"],
      short: {
        id: "Halaman publik “BhipDo • DigitalHub” — profil digital galangan kapal dengan layanan dan proyek aktif.",
        en: "Public page “BhipDo • DigitalHub” — a shipyard's digital profile with services and active projects.",
      },
      overview: {
        id: "Halaman publik berjudul “BhipDo • DigitalHub” yang menampilkan profil galangan kapal, daftar layanan, dan proyek kapal yang sedang berjalan.",
        en: "A public page titled “BhipDo • DigitalHub” presenting a shipyard profile, its services and ongoing vessel projects.",
      },
      problem: {
        id: "Profil galangan kapal, layanan, dan proyek aktif belum tersedia dalam satu halaman digital, sehingga calon klien sulit melihat kapabilitas perusahaan secara cepat.",
        en: "The shipyard's profile, services and active projects were not available on a single digital page, making it hard for prospective clients to quickly grasp the company's capabilities.",
      },
      role: {
        id: "Perancangan antarmuka dan pengembangan halaman digital hub beserta penyusunan konten layanan dan proyek.",
        en: "Interface design and development of the digital hub page, including preparation of the services and projects content.",
      },
      approach: {
        id: [
          { t: "Katalog layanan & proyek", d: "Layanan dan proyek aktif disusun agar mudah dipindai calon klien." },
          { t: "Tata letak ringan & modern", d: "Halaman tampil rapi dan cepat di berbagai ukuran layar." },
          { t: "Publikasi cepat", d: "Deploy ke platform modern agar pembaruan bisa segera tayang." },
        ],
        en: [
          { t: "Services & projects catalogue", d: "Services and active projects are laid out so prospective clients can scan them quickly." },
          { t: "Light, modern layout", d: "The page stays tidy and fast across screen sizes." },
          { t: "Fast publishing", d: "Deployed on a modern platform so updates can go live quickly." },
        ],
      },
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome: {
        id: "Profil digital galangan kapal tersedia dalam satu halaman yang dapat dibagikan kepada calon klien.",
        en: "The shipyard's digital profile is now available on a single page that can be shared with prospective clients.",
      },
    },
    {
      slug: "tanjak-emas-2026",
      name: "Tanjak Emas 2026",
      url: "https://tanjakemas2026.vercel.app/",
      status: "live",
      started: null,
      type: { id: "Dashboard voting", en: "Voting dashboard" },
      tags: ["Dashboard Live", "Voting", "Saweria"],
      images: ["assets/img/Tanjak%20Emas%201.png"],
      short: {
        id: "“Dashboard Live Vote” — pilih kategori, beri dukungan, dan lihat peringkat pangkalan berdasarkan poin.",
        en: "“Dashboard Live Vote” — pick a category, give support, and see units ranked by points.",
      },
      overview: {
        id: "Halaman publik berjudul “Tanjak Emas 2026 – Dashboard Live Vote”. Pengunjung memilih kategori dan pangkalan, memberi dukungan (setiap Rp 1.000 donasi di Saweria = 1 poin), lalu melihat papan peringkat.",
        en: "A public page titled “Tanjak Emas 2026 – Dashboard Live Vote”. Visitors choose a category and a unit, give support (every Rp 1,000 donated via Saweria = 1 point), and view the leaderboard.",
      },
      problem: {
        id: "Dukungan peserta perlu terlihat transparan dan diperbarui cepat; dukungan donasi harus langsung terkonversi menjadi poin tanpa rekap manual.",
        en: "Support for participants needs to be transparent and updated quickly; donations must convert into points automatically instead of being tallied by hand.",
      },
      role: {
        id: "Pengembangan dashboard voting live — halaman kategori, papan peringkat, dan konversi dukungan menjadi poin.",
        en: "Development of the live voting dashboard — category pages, the leaderboard, and the conversion of support into points.",
      },
      approach: {
        id: [
          { t: "Dukungan menjadi poin", d: "Setiap Rp 1.000 dukungan melalui Saweria bernilai 1 poin." },
          { t: "Peringkat otomatis", d: "Papan peringkat menampilkan posisi pangkalan berdasarkan poin yang terkumpul." },
          { t: "Tanpa login", d: "Pengunjung langsung memilih kategori dan memberi dukungan." },
        ],
        en: [
          { t: "Support becomes points", d: "Every Rp 1,000 of support through Saweria is worth 1 point." },
          { t: "Automatic ranking", d: "The leaderboard shows each unit's position based on points collected." },
          { t: "No login required", d: "Visitors pick a category and give support right away." },
        ],
      },
      stack: ["Next.js", "Tailwind CSS", "Saweria API", "Vercel"],
      outcome: {
        id: "Papan peringkat live tersedia untuk publik sehingga hasil dukungan dapat dipantau secara terbuka.",
        en: "A live leaderboard is publicly available so the support results can be followed openly.",
      },
    },
    {
      slug: "lalus-swim",
      name: "Lalu’s Swim",
      url: "https://swim.my.id",
      status: "archive",
      started: null,
      type: { id: "Website (arsip)", en: "Website (archive)" },
      tags: ["Website (arsip)"],
      images: ["assets/img/LALUSWIM.png", "assets/img/LALUSWIM1.png"],
      short: {
        id: "Proyek website terdahulu. Hosting telah kedaluwarsa — ditampilkan sebagai arsip.",
        en: "An earlier website project. Hosting has expired — shown here as an archive.",
      },
      overview: {
        id: "Proyek website terdahulu untuk Lalu’s Swim. Situs tidak lagi aktif karena hosting kedaluwarsa; dokumentasi ditampilkan melalui screenshot.",
        en: "An earlier website project for Lalu’s Swim. The site is no longer live because hosting expired; it is documented here through screenshots.",
      },
      problem: {
        id: "Usaha renang membutuhkan halaman online untuk memperkenalkan layanan dan memudahkan calon pelanggan menghubungi pemiliknya.",
        en: "The swimming business needed an online page to introduce its services and make it easy for prospective customers to get in touch.",
      },
      role: {
        id: "Pengembangan website profil usaha beserta penyusunan kontennya.",
        en: "Development of the business profile website, including its content.",
      },
      approach: {
        id: [
          { t: "Halaman profil usaha", d: "Informasi layanan dan kontak disusun dalam satu halaman sederhana." },
        ],
        en: [
          { t: "Business profile page", d: "Service information and contact details are gathered on one simple page." },
        ],
      },
      stack: ["Laravel", "MySQL"],
      outcome: {
        id: "Situs sudah tidak aktif karena hosting kedaluwarsa dan kini didokumentasikan sebagai arsip.",
        en: "The site is no longer active because hosting expired and is now documented as an archive.",
      },
    },
    {
      slug: "batam-campus-expo",
      name: "Batam Campus Expo",
      url: null,
      status: "live",
      started: null,
      type: { id: "Website event kampus", en: "Campus event website" },
      tags: ["Event Kampus", "Informasi Acara", "Responsif"],
      images: ["assets/img/BATAMCAMPUSEXPO.png", "assets/img/BATAMCAMPUSXPO1.png"],
      short: {
        id: "Website informasi Batam Campus Expo — pusat informasi acara bagi pengunjung, peserta, dan calon mitra.",
        en: "Information website for the Batam Campus Expo — a hub of event information for visitors, participants and prospective partners.",
      },
      overview: {
        id: "Batam Campus Expo adalah acara pameran kampus yang membutuhkan halaman digital sebagai pusat informasi. Website ini menampilkan profil acara dan informasi penting agar pengunjung maupun peserta dapat mengaksesnya dengan mudah dari satu tempat.",
        en: "Batam Campus Expo is a campus exhibition event that needs a digital page as its information hub. The website presents the event profile and key information so visitors and participants can access everything in one place.",
      },
      problem: {
        id: "Informasi acara sebelumnya hanya tersebar melalui kanal informal, sehingga calon pengunjung sulit mendapatkan gambaran utuh mengenai acara dan kegiatannya.",
        en: "Event information used to be scattered across informal channels, making it hard for prospective visitors to get a complete picture of the event and its programme.",
      },
      role: {
        id: "Perancangan antarmuka dan pengembangan website acara beserta penyusunan konten informasinya.",
        en: "Interface design and development of the event website, including preparation of its information content.",
      },
      approach: {
        id: [
          { t: "Pusat informasi acara", d: "Profil acara dan informasi penting dirangkum dalam satu halaman yang mudah dipindai." },
          { t: "Tampilan responsif", d: "Nyaman dibuka dari ponsel maupun desktop sehingga bisa dibagikan lewat tautan." },
        ],
        en: [
          { t: "Single event information hub", d: "The event profile and key information are summarised on one easy-to-scan page." },
          { t: "Responsive layout", d: "Comfortable to open on phones and desktops, so the link can be shared anywhere." },
        ],
      },
      stack: ["HTML", "CSS", "JavaScript"],
      outcome: {
        id: "Tersedia satu pusat informasi acara yang dapat diakses publik secara online.",
        en: "A single publicly accessible event information hub is now available online.",
      },
    },
  ],
};
