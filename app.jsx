/* Portfolio app — hash router, bilingual, data-driven (see data.js) */
const { useState, useEffect, useRef, useCallback, createContext, useContext } = React;
const P = window.PORTFOLIO;

const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

/* ---------- tiny inline icons (lucide geometry) ---------- */
const Ico = ({ d, size = 18, stroke = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const IArrowRight = (p) => <Ico {...p} d={<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>} />;
const IArrowLeft = (p) => <Ico {...p} d={<><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>} />;
const IExternal = (p) => <Ico {...p} d={<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>} />;
const IArchive = (p) => <Ico {...p} d={<><rect x="2" y="3" width="20" height="5" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M10 12h4" /></>} />;
const IMenu = (p) => <Ico {...p} d={<><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>} />;
const IX = (p) => <Ico {...p} d={<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>} />;
const IMail = (p) => <Ico {...p} d={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>} />;
const IInstagram = (p) => <Ico {...p} d={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>} />;
const IWhatsapp = (p) => <Ico {...p} d={<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>} />;

/* ---------- router (path bersih, tanpa #) ---------- */
function parsePath() {
  const parts = location.pathname.replace(/index\.html$/, "").replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  if (parts[0] === "work" && parts[1]) return { page: "case", slug: decodeURIComponent(parts[1]) };
  return { page: "home", section: parts[0] || "home" };
}
/* Navigasi internal lewat History API, lalu beri tahu router. */
function navigate(to, replace) {
  if (to === location.pathname + location.search) return;
  history[replace ? "replaceState" : "pushState"]({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
function useRoute() {
  const [route, setRoute] = useState(parsePath);
  useEffect(() => {
    const on = () => setRoute(parsePath());
    window.addEventListener("popstate", on);
    return () => window.removeEventListener("popstate", on);
  }, []);
  return route;
}
function scrollToId(id, smooth = true) {
  if (id === "home") { window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" }); return; }
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
}

/* ---------- reveal on scroll ---------- */
function useRevealAll(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

/* ---------- small atoms ---------- */
function Kicker({ n, children }) {
  return <div className="kicker"><span className="kicker-n">{n}</span><span>{children}</span></div>;
}
function Btn({ href, children, variant = "solid", external, onClick }) {
  return (
    <a className={"btn btn-" + variant} href={href} onClick={onClick}
       {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <span>{children}</span>
      {external ? <IExternal size={16} /> : <IArrowRight size={16} />}
    </a>
  );
}

/* ---------- header ---------- */
function Header({ route }) {
  const { lang, setLang, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [route.page, route.section, route.slug]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const items = ["about", "projects", "contact"];
  const active = route.page === "case" ? "projects" : route.section;

  const LangSwitch = () => (
    <div className="lang" role="group" aria-label="Language">
      {["id", "en"].map((l) => (
        <button key={l} className={lang === l ? "on" : ""} aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className={"hdr" + (scrolled ? " scrolled" : "") + (open ? " menu-open" : "")}>
      <div className="hdr-in">
        <a className="logo" href="/" aria-label={P.person.name}>
          <span className="logo-mark">{P.person.initials}</span>
          <span className="logo-name">{P.person.shortName}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {items.map((k) => (
            <a key={k} href={"/" + k} className={active === k ? "on" : ""}>{t.nav[k]}</a>
          ))}
        </nav>
        <div className="hdr-r">
          <LangSwitch />
          <button className="burger" aria-label={t.menu} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <IX size={22} /> : <IMenu size={22} />}
          </button>
        </div>
      </div>
      <div className={"mnav" + (open ? " open" : "")} aria-hidden={!open}>
        {["home", ...items].map((k, i) => (
          <a key={k} href={k === "home" ? "/" : "/" + k} style={{ transitionDelay: open ? 60 + i * 50 + "ms" : "0ms" }}
             tabIndex={open ? 0 : -1}>
            <span className="mnav-n">0{i + 1}</span>{t.nav[k]}
          </a>
        ))}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
/* Kata yang berganti-ganti secara slide (naik ke atas) di judul hero. */
function RotatingWord({ words }) {
  const [i, setI] = useState(0);
  const n = words.length;
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % n), 2200);
    return () => clearInterval(id);
  }, [n]);
  return (
    <span className="rot">
      {words.map((w, k) => {
        // Jarak relatif kata terhadap kata aktif, dinormalkan ke -2..2 agar
        // kata yang lewat berpindah dari bawah (masuk) ke atas (keluar).
        let d = (k - i + n) % n;
        if (d > n / 2) d -= n;
        return (
          <span key={w} className="rot-w" aria-hidden={d !== 0}
            style={{ transform: "translateY(" + d * 100 + "%)", opacity: d === 0 ? 1 : 0 }}>{w}</span>
        );
      })}
    </span>
  );
}

function Hero() {
  const { t, lang } = useApp();
  return (
    <section className="hero" id="home" aria-labelledby="hero-title" data-screen-label="Home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow ld" style={{ "--d": "0ms" }}><span className="dot" />{t.heroEyebrow}</p>
          <h1 id="hero-title" className="hero-h">
            {t.heroTitle.map((line, i) => (
              <span key={i} className="hl ld" style={{ "--d": 80 + i * 70 + "ms" }}>{line}</span>
            ))}
            <span className="hl ld" style={{ "--d": 80 + t.heroTitle.length * 70 + "ms" }}>
              <span className="mark"><RotatingWord words={t.heroRotate} /></span>
            </span>
          </h1>
          <p className="hero-lead ld" style={{ "--d": "420ms" }}>{t.heroLead}</p>
          <div className="hero-cta ld" style={{ "--d": "500ms" }}>
            <Btn href="/projects">{t.ctaProjects}</Btn>
            <Btn href="/contact" variant="ghost">{t.ctaContact}</Btn>
          </div>
        </div>
        <div className="hero-visual ld" style={{ "--d": "200ms" }}>
          <a className="now" href="/work/bravepay">
            <span className="now-l"><span className="pulse" />{t.currentLabel}</span>
            <span className="now-t">{t.currentText}</span>
            <IArrowRight size={16} />
          </a>
          <div className="photo-frame">
            <div className="photo-glow" aria-hidden="true" />
            <div className="visual-note" aria-hidden="true">
              {lang === "id" ? "Mengubah ide menjadi pengalaman web yang kuat." : "Turning ideas into powerful web experiences."}
            </div>
            <image-slot id="profile-photo" shape="rect" fit="contain" src="assets/img/Foto.webp" placeholder={t.photoPlaceholder} class="photo-slot"></image-slot>
            <div className="photo-tag">
              <span className="photo-tag-name">{P.person.name}</span>
              <span className="photo-tag-role">{P.person.role[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const { t, lang } = useApp();
  const other = lang === "id" ? "en" : "id";
  return (
    <section className="sec about" id="about" aria-labelledby="about-title" data-screen-label="About">
      <div className="wrap">
        <Kicker n="01">{t.aboutKicker}</Kicker>
        <div className="about-grid">
          <h2 id="about-title" className="sec-h rv">{t.aboutTitle}</h2>
          <div className="about-body rv">
            <p className="about-p">{P.about[lang]}</p>
            <details className="about-alt">
              <summary>{other === "en" ? "Read in English" : "Baca dalam Bahasa Indonesia"}</summary>
              <p lang={other}>{P.about[other]}</p>
            </details>
          </div>
        </div>

        <div className="approach">
          <h3 className="sub-h rv">{t.approachTitle}</h3>
          <ol className="approach-list">
            {P.approach.map((a, i) => (
              <li key={i} className="rv" style={{ "--rd": i * 80 + "ms" }}>
                <span className="ap-n">0{i + 1}</span>
                <h4>{a[lang].t}</h4>
                <p>{a[lang].d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="tech">
          <div className="tech-head rv">
            <h3 className="sub-h">{t.techTitle}</h3>
            <p className="tech-note">{t.techNote}</p>
          </div>
          <div className="marquee rv" role="img" aria-label={P.tech.map((it) => it.name).join(", ")}>
            <div className="marquee-track">
              {[...P.tech, ...P.tech].map((it, i) => (
                <span key={i} className={"logo-chip lvl-" + it.level} title={it.name} aria-hidden={i >= P.tech.length}>
                  <img src={"https://cdn.simpleicons.org/" + it.icon} alt="" loading="lazy" decoding="async" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function StatusBadge({ p }) {
  const { t } = useApp();
  if (p.status === "archive") return <span className="badge badge-arch"><IArchive size={13} />{t.archived}</span>;
  if (p.featured) return <span className="badge badge-feat">{t.featured}</span>;
  return null;
}

function ProjectCard({ p, idx, big }) {
  const { t, lang } = useApp();
  const href = "/work/" + p.slug;
  return (
    <article className={"card rv" + (big ? " card-big" : "")} style={{ "--rd": (idx % 2) * 90 + "ms" }}>
      <div className="card-media">
        <image-slot id={"shot-" + p.slug + "-1"} shape="rect" src={p.images && p.images[0]}
          placeholder={p.name + " — " + t.shotPlaceholder}
          class={"card-slot" + (p.status === "archive" ? " is-archive" : "")}></image-slot>
        <span className="card-idx">{String(idx + 1).padStart(2, "0")}</span>
      </div>
      <div className="card-body">
        <div className="card-top">
          <span className="card-type">{p.type[lang]}</span>
          <StatusBadge p={p} />
        </div>
        <h3 className="card-h"><a href={href} className="card-link">{p.name}</a></h3>
        <p className="card-p">{p.short[lang]}</p>
        {p.tags.length > 0 && (
          <ul className="chips chips-sm">{p.tags.map((tg) => <li key={tg} className="chip">{tg}</li>)}</ul>
        )}
        <div className="card-actions">
          <a className="tlink" href={href}>{t.caseStudy}<IArrowRight size={15} /></a>
          {p.status === "live" && p.url
            ? <a className="tlink tlink-mute" href={p.url} target="_blank" rel="noopener noreferrer">{t.visit}<IExternal size={14} /></a>
            : p.url
              ? <span className="tlink tlink-off" title={t.archived}>{p.url.replace(/^https?:\/\//, "")}</span>
              : null}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useApp();
  const [feat, ...rest] = [...P.projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return (
    <section className="sec projects" id="projects" aria-labelledby="projects-title" data-screen-label="Projects">
      <div className="wrap">
        <Kicker n="02">{t.projectsKicker}</Kicker>
        <div className="proj-head">
          <h2 id="projects-title" className="sec-h rv">{t.projectsTitle}</h2>
          <p className="proj-lead rv">{t.projectsLead}</p>
        </div>
        <ProjectCard p={feat} idx={0} big />
        <div className="card-grid">
          {rest.map((p, i) => <ProjectCard key={p.slug} p={p} idx={i + 1} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const { t } = useApp();
  const c = P.contact;
  const links = [
    { k: "WhatsApp", ic: <IWhatsapp size={18} />, href: c.whatsapp, v: c.whatsapp && c.whatsapp.replace(/^https?:\/\//, ""), ext: true },
    { k: "Instagram", ic: <IInstagram size={18} />, href: c.instagram, v: c.instagram && c.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, ""), ext: true },
    { k: "Email", ic: <IMail size={18} />, href: c.email && "mailto:" + c.email, v: c.email, ext: false },
    c.linkedin && { k: "LinkedIn", v: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true },
    c.github && { k: "GitHub", v: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github, ext: true },
  ].filter(Boolean);
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-title" data-screen-label="Contact">
      <div className="wrap">
        <Kicker n="03">{t.contactKicker}</Kicker>
        <h2 id="contact-title" className="contact-h rv">{t.contactTitle}</h2>
        <p className="contact-lead rv">{t.contactLead}</p>
        <ul className="contact-list rv">
          {links.map((l) => (
            <li key={l.k}>
              {l.href ? (
                <a href={l.href} {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span className="cl-ic">{l.ic}</span>
                  <span className="cl-k">{l.k}</span><span className="cl-v">{l.v}</span>
                  {l.ext ? <IExternal size={18} /> : <IArrowRight size={18} />}
                </a>
              ) : (
                <span className="contact-row is-empty">
                  <span className="cl-ic">{l.ic}</span>
                  <span className="cl-k">{l.k}</span><span className="cl-v cl-v-empty">{t.contactEmpty}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- CASE STUDY ---------- */
function CSSection({ n, title, children }) {
  return (
    <section className="cs-sec rv">
      <div className="cs-label">
        <span className="cs-n">{n}</span>
        <h2>{title}</h2>
      </div>
      <div className="cs-content">{children}</div>
    </section>
  );
}

function CaseStudy({ slug }) {
  const { t, lang } = useApp();
  const idx = P.projects.findIndex((p) => p.slug === slug);
  const p = P.projects[idx];
  if (!p) {
    return (
      <div className="wrap cs-404">
        <h1 className="sec-h">404</h1>
        <Btn href="/projects" variant="ghost">{t.back}</Btn>
      </div>
    );
  }
  const next = P.projects[(idx + 1) % P.projects.length];
  const gallery = (p.images || []).slice(1);
  const S = t.sections;
  const textOf = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);
  const fmt = (i) => String(i + 1).padStart(2, "0");

  const bodySections = [
    { title: S.overview, show: !!p.overview, body: <p className="cs-p">{textOf(p.overview)}</p> },
    { title: S.problem, show: !!p.problem, body: <p className="cs-p">{textOf(p.problem)}</p> },
    { title: S.role, show: !!p.role, body: <p className="cs-p">{textOf(p.role)}</p> },
    {
      title: S.approach, show: !!p.approach, body: (
        <>
          {p.flow && (
            <ol className="flow" aria-label="Flow">
              {p.flow[lang].map((s, i) => (
                <li key={i}><span className="flow-n">{i + 1}</span><span className="flow-t">{s}</span></li>
              ))}
            </ol>
          )}
          {p.approach && (
            <ul className="appr">
              {p.approach[lang].map((a, i) => (
                <li key={i}><h3>{a.t}</h3><p>{a.d}</p></li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    {
      title: S.stack, show: !!(p.stack && p.stack.length),
      body: <ul className="chips">{(p.stack || []).map((s) => <li key={s} className="chip">{s}</li>)}</ul>,
    },
    {
      title: S.screens, show: gallery.length > 0, body: (
        <div className={"shots shots-" + (gallery.length + 1)}>
          {gallery.map((src, i) => (
            <image-slot key={i} id={"shot-" + p.slug + "-" + (i + 2)} shape="rect" src={src}
              placeholder={t.shotPlaceholder + " " + (i + 2)} class="shot-slot"></image-slot>
          ))}
        </div>
      ),
    },
    { title: S.outcome, show: !!p.outcome, body: <p className="cs-p">{textOf(p.outcome)}</p> },
  ].filter((s) => s.show);

  return (
    <article className="cs" data-screen-label={"Case — " + p.name}>
      <header className="cs-hero">
        <div className="wrap">
          <a className="back" href="/projects"><IArrowLeft size={16} />{t.back}</a>
          <div className="cs-top ld" style={{ "--d": "0ms" }}>
            <span className="card-type">{t.caseStudy} · {p.type[lang]}</span>
            <StatusBadge p={p} />
          </div>
          <h1 className="cs-h ld" style={{ "--d": "60ms" }}>{p.name}</h1>
          <p className="cs-lead ld" style={{ "--d": "120ms" }}>{p.short[lang]}</p>
          <dl className="cs-meta ld" style={{ "--d": "180ms" }}>
            <div><dt>{t.meta.type}</dt><dd>{p.type[lang]}</dd></div>
            {p.started && <div><dt>{t.meta.started}</dt><dd>{p.started[lang]}</dd></div>}
            <div><dt>{t.meta.status}</dt><dd>{p.status === "archive" ? t.archived : "Live"}</dd></div>
            {p.url && <div><dt>{t.meta.link}</dt><dd>
              {p.status === "live"
                ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="ulink">{p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} <IExternal size={13} /></a>
                : <span className="strike">{p.url.replace(/^https?:\/\//, "")}</span>}
            </dd></div>}
          </dl>
        </div>
      </header>

      <div className="wrap cs-cover ld" style={{ "--d": "240ms" }}>
        <image-slot id={"shot-" + p.slug + "-1"} shape="rect" src={p.images && p.images[0]} placeholder={p.name + " — " + t.shotPlaceholder + " 1"} class="cs-cover-slot"></image-slot>
      </div>

      <div className="wrap cs-body">
        {bodySections.map((s, i) => (
          <CSSection key={s.title} n={fmt(i)} title={s.title}>{s.body}</CSSection>
        ))}
      </div>

      <a className="next" href={"/work/" + next.slug}>
        <div className="wrap next-in">
          <span className="next-l">{t.next}</span>
          <span className="next-h">{next.name}</span>
          <IArrowRight size={40} stroke={1.75} />
        </div>
      </a>
    </article>
  );
}

/* ---------- footer ---------- */
function Footer() {
  const { t } = useApp();
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <span>© 2026 {P.person.name}</span>
        <span className="ftr-r">{t.footer}</span>
      </div>
    </footer>
  );
}

/* ---------- SEO per route ---------- */
function useSeo(route, lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
    const base = P.person.name + " — " + P.person.role[lang];
    let title = base, desc = P.ui[lang].heroLead;
    if (route.page === "case") {
      const p = P.projects.find((x) => x.slug === route.slug);
      if (p) { title = p.name + " · " + P.ui[lang].caseStudy + " — " + P.person.name; desc = p.short[lang]; }
    }
    document.title = title;
    const set = (sel, v) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", v); };
    set('meta[name="description"]', desc);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', desc);
    set('meta[property="og:locale"]', lang === "id" ? "id_ID" : "en_US");
  }, [route.page, route.slug, lang]);
}

/* ---------- cursor companion: pixel capybara + sparkle trail ---------- */
/* Efek kursor hanya untuk perangkat berpenunjuk presisi (mouse/trackpad),
   dan dilewati saat pengguna memilih "prefers-reduced-motion". */
function hasFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Sprite capybara 18x13 px. Dibangun dari daftar kotak supaya konsisten:
   o=outline  f=bulu  d=bulu gelap  e=mata  n=moncong */
function buildCapy() {
  const W = 18, H = 13;
  const g = Array.from({ length: H }, () => new Array(W).fill("."));
  const put = (x, y, w, h, c) => {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) g[j][i] = c;
  };
  put(2, 3, 15, 8, "o");   // tubuh + kepala
  put(3, 4, 13, 6, "f");   // bulu
  put(3, 9, 12, 1, "d");   // perut lebih gelap
  put(9, 0, 4, 4, "o");    // telinga
  put(10, 1, 2, 2, "f");
  put(13, 5, 1, 2, "e");   // mata
  put(15, 6, 2, 2, "n");   // moncong
  put(4, 11, 2, 2, "d");   // kaki
  put(11, 11, 2, 2, "d");
  return g;
}

function CapybaraCompanion() {
  const hostRef = useRef(null);
  const cvRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer()) return;
    const host = hostRef.current, cv = cvRef.current;
    if (!host || !cv) return;

    // Palet dibaca dari CSS variable (lihat styles.css) agar warna tetap terpusat.
    const g = buildCapy();
    const cs = getComputedStyle(document.documentElement);
    const col = {};
    const keys = { o: "--capy-line", f: "--capy-fur", d: "--capy-fur-dark", e: "--capy-eye", n: "--capy-nose" };
    Object.keys(keys).forEach((k) => { col[k] = cs.getPropertyValue(keys[k]).trim(); });
    cv.width = g[0].length; cv.height = g.length;
    const ctx = cv.getContext("2d");
    g.forEach((row, y) => row.forEach((ch, x) => {
      if (ch === ".") return;
      ctx.fillStyle = col[ch];
      ctx.fillRect(x, y, 1, 1);
    }));

    const OFF_X = 46, OFF_Y = 30;   // posisi capybara relatif ke kursor
    let mx = 0, my = 0, x = 0, y = 0, prevX = 0, face = 1, started = false, raf = 0, running = false;
    const t0 = performance.now();

    const draw = (cx, cy, tilt) => {
      host.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) +
        "px,0) rotate(" + tilt.toFixed(2) + "deg) scaleX(" + face + ")";
    };

    // Loop hanya jalan saat capybara masih bergerak; begitu diam, RAF
    // dihentikan supaya halaman tidak terus dirender 60fps.
    const loop = (now) => {
      const t = (now - t0) / 1000;
      const dx = (mx - OFF_X) - x, dy = (my + OFF_Y) - y;
      x += dx * 0.085;
      y += dy * 0.085;
      const vx = x - prevX; prevX = x;
      if (vx < -0.3) face = -1; else if (vx > 0.3) face = 1;
      const bob = Math.sin(t * 4.2) * 2.6;                                  // langkah naik-turun
      const tilt = Math.max(-9, Math.min(9, -vx * 1.4));                    // miring saat bergerak
      // Ditahan di dalam viewport supaya tidak menghilang di tepi layar.
      const cx = Math.max(8, Math.min(window.innerWidth - 76, x));
      const cy = Math.max(8, Math.min(window.innerHeight - 58, y + bob));
      draw(cx, cy, tilt);
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {                       // sudah tenang
        draw(cx, Math.max(8, Math.min(window.innerHeight - 58, y)), 0);
        running = false; raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (!started) {
        // Muncul tepat di samping kursor, jadi tidak meluncur dari tengah layar.
        started = true; x = mx - OFF_X; y = my + OFF_Y; prevX = x;
        host.classList.add("on");
      }
      if (!running) { running = true; raf = requestAnimationFrame(loop); }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <div ref={hostRef} className="capy" aria-hidden="true">
      <canvas ref={cvRef} width="18" height="13" />
    </div>
  );
}

/* Jejak kilau mengikuti kursor + ledakan kilau saat tombol/tautan ditekan.
   Satu host dipakai bersama supaya tidak ada dua layer animasi tambahan. */
function SparkleLayer() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Pengguna yang memilih reduced-motion tidak mendapat kilau sama sekali.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const COLORS = ["", "c2", "c3"];
    const MAX = 60;                     // batas elemen aktif agar render tetap ringan
    const fine = hasFinePointer();

    const spawn = (px, py, spread, size, delay) => {
      if (host.childElementCount >= MAX) return;
      const a = Math.random() * Math.PI * 2;
      const d = spread * (0.35 + Math.random() * 0.75);
      const s = document.createElement("i");
      s.className = "spark " + COLORS[(Math.random() * COLORS.length) | 0];
      s.style.cssText =
        "left:" + px.toFixed(1) + "px;top:" + py.toFixed(1) + "px;--s:" + size + "px;" +
        "--dx:" + (Math.cos(a) * d).toFixed(1) + "px;" +
        "--dy:" + (Math.sin(a) * d).toFixed(1) + "px;" +
        "--r:" + (Math.random() * 180 - 90).toFixed(0) + "deg;" +
        "--dl:" + delay + "ms";
      host.appendChild(s);
      let alive = true;
      const done = () => { if (!alive) return; alive = false; s.remove(); };
      s.addEventListener("animationend", done, { once: true });
      setTimeout(done, 1400);   // cadangan bila animationend tidak terpanggil
    };

    // Jejak kilau: hanya di perangkat berpenunjuk presisi (mouse/trackpad).
    let lx = 0, ly = 0;
    const onMove = (e) => {
      if (Math.hypot(e.clientX - lx, e.clientY - ly) < 14) return;   // jarak minimum antar kilau
      lx = e.clientX; ly = e.clientY;
      spawn(e.clientX, e.clientY, 14, (4 + Math.random() * 5).toFixed(1), 0);
    };
    if (fine) window.addEventListener("mousemove", onMove, { passive: true });

    // Ledakan kilau saat tombol atau tautan ditekan — berlaku juga di layar sentuh.
    const onPress = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const el = e.target && e.target.closest ? e.target.closest("a,button,[role=button]") : null;
      if (!el) return;
      const n = 8 + ((Math.random() * 4) | 0);
      for (let i = 0; i < n; i++) {
        spawn(e.clientX, e.clientY, 46, (5 + Math.random() * 6).toFixed(1), i * 16);
      }
    };
    window.addEventListener("pointerdown", onPress, { passive: true });

    return () => {
      if (fine) window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerdown", onPress);
    };
  }, []);

  return <div ref={hostRef} className="sparkles" aria-hidden="true" />;
}

/* ---------- App ---------- */
function App() {
  const route = useRoute();
  const [lang, setLangState] = useState(() => localStorage.getItem("wp-lang") || "id");
  const setLang = (l) => { setLangState(l); localStorage.setItem("wp-lang", l); };
  const t = P.ui[lang];

  useSeo(route, lang);

  // scroll on route change
  const first = useRef(true);
  useEffect(() => {
    if (route.page === "case") { window.scrollTo({ top: 0, behavior: "auto" }); }
    else {
      const smooth = !first.current;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(route.section, smooth)));
    }
    first.current = false;
  }, [route.page, route.section, route.slug]);

  useRevealAll(route.page + (route.slug || "") + lang);

  // Marquee logo berjalan tanpa henti; hentikan saat keluar layar agar
  // kompositor tidak terus bekerja di halaman yang tidak dilihat.
  useEffect(() => {
    const tracks = document.querySelectorAll(".marquee-track");
    if (!tracks.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      e.target.classList.toggle("paused", !e.isIntersecting);
    }), { rootMargin: "150px" });
    tracks.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route.page, route.slug]);

  // Intersep klik tautan internal (href diawali "/") agar dinavigasi tanpa reload.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest ? e.target.closest("a[href]") : null;
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href[0] !== "/" || href.startsWith("//")) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const ctx = { lang, setLang, t };
  return (
    <AppCtx.Provider value={ctx}>
      <button className="skip" onClick={() => { const m = document.getElementById("main"); if (m) m.focus(); }}>{t.skip}</button>
      <Header route={route} />
      <main id="main" tabIndex={-1} key={route.page + (route.slug || "")} className="page">
        {route.page === "case"
          ? <CaseStudy slug={route.slug} />
          : (<><Hero /><About /><Projects /><Contact /></>)}
      </main>
      <Footer />
      <CapybaraCompanion />
      <SparkleLayer />
    </AppCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
