import { useEffect, useRef, useState } from "react";
import mishkatLogo from "./assets/mishkat-logo.png";
import mishkatLogoWhite from "./assets/mishkat-logo-black.png";

const images = {
  hero: "/mishkat/storefront-hero.png",
  story: "/mishkat/pollichathu.png",
  fish: "/mishkat/banana-leaf-fish.png",
  kebab: "/mishkat/al-faham.png",
  feast: "/mishkat/chicken-grill.png",
  curry: "/mishkat/shawarma-platter.png",
  interior: "https://images.unsplash.com/photo-1774989423979-6a7bf5add3f0?auto=format&fit=crop&w=1800&q=88",
};

const signatureDishes = [
  {
    name: "Malabar Fish Roast",
    detail: "Whole fish, coastal masala & curry leaf",
    image: images.fish,
    number: "01",
  },
  {
    name: "Al Faham",
    detail: "Charcoal chicken, Kerala spice & lime",
    image: images.kebab,
    number: "02",
  },
  {
    name: "Mishkat Chicken Grill",
    detail: "Fire-roasted, deeply spiced & made to share",
    image: images.feast,
    number: "03",
  },
  {
    name: "Shawarma Bites",
    detail: "Soft khubz, roasted chicken & house toum",
    image: images.curry,
    number: "04",
  },
];

const menuGroups = [
  {
    title: "From the Fire",
    items: [
      ["Al Faham", "Classic charcoal-grilled chicken", "₹190"],
      ["Al Faham Peri Peri", "A warmer, sharper house marinade", "₹200"],
      ["Chicken Tikka", "Yoghurt, chilli and the heat of the tandoor", "₹299"],
    ],
  },
  {
    title: "House Favourites",
    items: [
      ["Mishkat Special Platter", "A generous selection from our grills", "₹1,499"],
      ["Mutton Chops Kebab", "Spiced chops, charred over open flame", "₹399"],
      ["Mutton Pepper", "Black pepper, curry leaf and tender mutton", "₹330"],
    ],
  },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function MishkatSeal({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
      <path d="M24 3.5 30.2 14 42 12l-2 11.8L44.5 34 34 40.2 24 44.5 14 40.2 3.5 34 8 23.8 6 12l11.8 2L24 3.5Z" stroke="currentColor" strokeWidth="1" />
      <path d="M24 10.5 28.3 18l8.7-1.4-1.4 8.7 3.3 7.4-7.5 4.4L24 40.2l-7.4-3.1-7.5-4.4 3.3-7.4-1.4-8.7 8.7 1.4 4.3-7.5Z" stroke="currentColor" strokeWidth=".75" />
      <circle cx="24" cy="25" r="5.5" stroke="currentColor" strokeWidth=".75" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem("introShown"));
  const [fadeOutIntro, setFadeOutIntro] = useState(false);
  const dismissIntro = () => {
    if (!showIntro || fadeOutIntro) return;
    setFadeOutIntro(true);
    sessionStorage.setItem("introShown", "true");
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  useEffect(() => {
    if (showIntro && !fadeOutIntro) {
      const timer = setTimeout(dismissIntro, 5000);
      return () => clearTimeout(timer);
    }
  }, [showIntro, fadeOutIntro]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      {menuModalOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-charcoal/95 backdrop-blur-md">
          <div className="flex h-20 shrink-0 items-center justify-between px-6 lg:px-12">
            <h2 style={{ fontFamily: "'Aref Ruqaa', serif" }} className="text-2xl text-ivory">Mishkat Menu</h2>
            <button
              onClick={() => setMenuModalOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="mx-auto max-w-4xl space-y-8 pb-20">
              <img src="/mishkat/menu-starters.png" alt="Starters Menu" className="w-full rounded-lg shadow-2xl" />
              <img src="/mishkat/menu-dry-delights.png" alt="Dry Delights Menu" className="w-full rounded-lg shadow-2xl" />
              <img src="/mishkat/menu-grills.png" alt="Grills Menu" className="w-full rounded-lg shadow-2xl" />
              <img src="/mishkat/menu-main-course.png" alt="Main Course Menu" className="w-full rounded-lg shadow-2xl" />
              <img src="/mishkat/menu-platters.png" alt="Platters Menu" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      )}
      {showIntro && (
        <div
          onClick={dismissIntro}
          style={{ transitionDuration: '800ms' }}
          className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-royal transition-opacity ease-in-out ${fadeOutIntro ? "opacity-0" : "opacity-100"}`}
        >
          <img src={mishkatLogoWhite} alt="Mishkat" className="h-64 w-64 object-contain md:h-96 md:w-96" />
          <p className="mt-12 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brass opacity-80 animate-pulse">
            Click anywhere to dive into our world
          </p>
        </div>
      )}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
        <div className="mx-auto flex h-32 max-w-[1500px] items-center justify-between px-6 lg:px-12">
          <a className="block flex items-center justify-center" href="#top" aria-label="Mishkat home">
            <span style={{ fontFamily: "'Aref Ruqaa', serif" }} className="text-4xl md:text-5xl tracking-wide text-white drop-shadow-md">MISHKAT</span>
          </a>
          <nav className="hidden items-center gap-8 text-[0.69rem] font-medium uppercase tracking-[0.2em] lg:flex xl:gap-11">
            <a className="nav-link" href="#story">Our Story</a>
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="button button-light ml-2" href="#reserve">Book a table</a>
          </nav>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/40 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-6 border-t border-white/20 bg-navy px-6 py-8 text-sm uppercase tracking-[0.2em] lg:hidden">
            {["story", "menu", "experience", "gallery", "reserve"].map((item) => (
              <a href={`#${item}`} key={item} onClick={() => setMenuOpen(false)}>
                {item === "reserve" ? "Book a table" : item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="hero relative flex min-h-[760px] h-[100svh] items-end">
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="hero-copy relative mx-auto w-full max-w-[1500px] px-6 pb-14 text-white md:pb-16 lg:px-12">
          <h1 className="sr-only">Mishkat Restaurant — authentic Kerala dining in Chennai</h1>
          <div className="flex max-w-3xl flex-col gap-7 border-l border-brass pl-5 md:pl-7">
            <p className="max-w-xl text-base font-normal leading-7 text-white md:text-lg md:leading-8">
              Authentic Kerala flavours, warm hospitality and a dining experience made to remember.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button button-light" href="#menu">Explore menu</a>
              <a className="button button-outline" href="#reserve">Book a table</a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="relative lg:col-span-6">
            <div className="image-frame aspect-[4/5] max-h-[760px] overflow-hidden">
              <img className="h-full w-full object-cover" src={images.story} alt="Fish wrapped and roasted in banana leaf" />
            </div>
            <div className="absolute -bottom-10 -right-2 hidden aspect-square w-52 border-[14px] border-ivory bg-royal p-6 text-ivory md:flex md:flex-col md:justify-end lg:-right-14">
              <span className="font-display text-5xl">03</span>
              <span className="mt-2 text-[0.58rem] uppercase leading-relaxed tracking-[0.22em]">Coasts meet at our Chennai table</span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-6">From Malabar,<br />with <em>warmth.</em></h2>
            <p className="mt-8 text-lg leading-8 text-charcoal/72">
              Mishkat is rooted in the food culture of Kerala’s Malabar coast—where recipes travel through families, hospitality is instinctive and every table is meant to be shared.
            </p>
            <p className="mt-5 leading-7 text-charcoal/60">
              In Chennai, we bring that spirit forward with coastal masalas, banana-leaf roasts, charcoal grills and the comfort of food prepared with patience. Familiar, generous and unmistakably ours.
            </p>
            <a className="text-link mt-9" href="#experience">Discover our philosophy <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="brand-pattern bg-royal py-24 text-ivory md:py-32">
        <div className="reveal mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow text-brass">From our kitchen</p>
              <h2 className="section-title mt-5">Signature <em>dishes.</em></h2>
            </div>
          </div>
        </div>
        <div className="slider-mask relative w-full overflow-hidden">
          <div className="infinite-scroll flex w-max gap-5">
            {[...signatureDishes, ...signatureDishes].map((dish, index) => (
              <article className="group relative w-[84vw] flex-shrink-0 overflow-hidden md:w-[40vw] lg:w-[28vw]" key={`${dish.name}-${index}`}>
                <div className="aspect-[5/4] overflow-hidden">
                  <img className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" src={dish.image} alt={dish.name} />
                </div>
                <div className="absolute inset-0 bg-charcoal/25 transition group-hover:bg-charcoal/40" />
                <span className="absolute left-5 top-5 font-display text-lg text-white/80">{dish.number}</span>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                  <p className="font-display text-3xl text-white md:text-5xl">{dish.name}</p>
                  <p className="mt-2 text-sm tracking-wide text-white/70">{dish.detail}</p>
                </div>
                {index === 0 && <span className="absolute right-5 top-5 border border-white/60 px-3 py-2 text-[0.52rem] uppercase tracking-[0.25em] text-white">House icon</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ivory px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-7">
            <div className="overflow-hidden border border-royal/20 bg-white p-3 md:p-5">
              <img className="aspect-[8/5] h-full w-full object-cover transition duration-700 hover:scale-[1.02]" src="/mishkat/shawarma-platter.png" alt="Mishkat chicken shawarma bites with dips and fries" />
            </div>
            <span className="absolute -bottom-5 right-4 bg-navy px-5 py-3 text-[0.58rem] uppercase tracking-[0.24em] text-ivory md:right-10">Rolled fresh · served warm</span>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow">Shawarma &amp; grills</p>
            <h2 className="section-title mt-6">Fire, spice<br />&amp; the <em>perfect char.</em></h2>
            <p className="mt-7 leading-7 text-charcoal/65">
              From creamy shawarma bites to smoky Al Faham and kebabs, our grill is where Malabar seasoning meets open flame. Bold, familiar and made for passing around.
            </p>
            <div className="mt-9 border-y border-royal/20 py-5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-royal">
              Shawarma · Al Faham · Tikka · Kebab
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto max-w-[1240px]">
          <div className="grid gap-7 border-b border-charcoal/20 pb-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">A taste of Mishkat</p>
              <h2 className="section-title mt-5">The <em>menu.</em></h2>
            </div>
            <p className="max-w-md text-base leading-7 text-charcoal/65 md:justify-self-end">
              Malabar favourites, Arabic-inspired grills and Chennai classics—served generously, just as they should be.
            </p>
          </div>
          <div className="grid gap-14 py-14 md:grid-cols-2 md:gap-20 lg:gap-28">
            {menuGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-8 font-display text-3xl text-navy">{group.title}</h3>
                <div className="space-y-7">
                  {group.items.map(([name, description, price]) => (
                    <div className="group" key={name}>
                      <div className="flex items-baseline gap-3">
                        <h4 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em]">{name}</h4>
                        <span className="h-px flex-1 bg-charcoal/15 transition group-hover:bg-brass" />
                        <span className="font-display text-lg">{price}</span>
                      </div>
                      <p className="mt-2 text-sm text-charcoal/55">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="button button-dark" onClick={() => setMenuModalOpen(true)}>View complete menu</button>
          </div>
        </div>
      </section>

      <section id="experience" className="relative min-h-[760px] bg-charcoal text-white">
        <img className="absolute inset-0 h-full w-full object-cover object-center" src={images.interior} alt="Warm, elegant restaurant dining room" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-end px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="reveal lg:col-span-7">
              <p className="eyebrow text-brass">The Mishkat experience</p>
            <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,7.2rem)] leading-[0.9]">
              Come for dinner.<br /><em>Stay for the feeling.</em>
            </h2>
          </div>
          <div className="reveal mt-10 border-l border-brass pl-6 lg:col-span-3 lg:col-start-10 lg:mt-0">
            <p className="leading-7 text-white/72">
              Warm service, generous plates and room for everyone. The spirit of Malabar hospitality, brought into a contemporary Chennai setting.
            </p>
            <a className="text-link mt-7 text-white" href="#gallery">Step inside <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-ivory px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Moments at Mishkat</p>
              <h2 className="section-title mt-5">At the <em>table.</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-charcoal/55">An evening unfolds in details: a passing plate, a poured drink, the glow after dusk.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-a"><img src="/mishkat/banana-leaf-fish.png" alt="Malabar fish roast presented on banana leaf" /></figure>
            <figure className="gallery-b"><img src="/mishkat/al-faham.png" alt="Charcoal-grilled Al Faham chicken" /></figure>
            <figure className="gallery-c"><img src="/mishkat/chicken-grill.png" alt="Spiced grilled chicken with fresh onion and lime" /></figure>
            <figure className="gallery-d"><img src="/mishkat/pollichathu.png" alt="Fish roasted in banana leaf" /></figure>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-ivory md:py-32 lg:px-12">
        <div className="reveal mx-auto max-w-[1300px]">
          <div className="grid gap-10 border-b border-white/15 pb-14 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-brass">Around our tables</p>
              <h2 className="section-title mt-5">Guest <em>notes.</em></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55 md:justify-self-end">The kind words that bring us back to the kitchen, service after service.</p>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              ["“The fish roast has real depth—the kind of flavour that stays with you long after the meal.”", "A regular from Nungambakkam"],
              ["“Generous portions, wonderful grills and the warmth of a proper family restaurant.”", "Family dinner guest"],
              ["“The Al Faham is beautifully charred, and the service makes every visit feel easy.”", "Weekend diner"],
            ].map(([quote, source], index) => (
              <blockquote className={`py-10 md:px-8 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : ""}`} key={source}>
                <MishkatSeal className="mb-7 h-7 w-7 text-brass" />
                <p className="font-display text-2xl leading-snug text-white">{quote}</p>
                <footer className="mt-7 text-[0.58rem] uppercase tracking-[0.2em] text-white/45">{source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="brand-pattern bg-royal px-6 py-24 text-ivory md:py-32 lg:px-12">
        <div className="reveal mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-brass">Your table awaits</p>
            <h2 className="mt-6 font-display text-[clamp(3.6rem,7vw,7rem)] leading-[0.88]">
              Make an evening<br /><em>of it.</em>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-ivory/70">
              Intimate dinners, family gatherings, or a celebration worth remembering. Let us set the table.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-light" href="tel:+914442424242">Reserve a table</a>
              <a className="button button-outline" href="tel:+914442424242">Call +91 44 4242 4242</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-20 md:px-12 lg:px-[max(3rem,calc((100vw-1400px)/2))] lg:py-28">
            <p className="eyebrow">Find us in Chennai</p>
            <h2 className="section-title mt-5">Come <em>by.</em></h2>
            <div className="mt-12 grid gap-9 sm:grid-cols-2">
              <div>
                <p className="info-label">Address</p>
                <p className="mt-3 leading-7 text-charcoal/65">14, Khader Nawaz Khan Road<br />Nungambakkam, Chennai 600006</p>
              </div>
              <div>
                <p className="info-label">Hours</p>
                <p className="mt-3 leading-7 text-charcoal/65">Monday–Sunday<br />12:00 PM–11:30 PM</p>
              </div>
              <div>
                <p className="info-label">Reservations</p>
              <a className="mt-3 block leading-7 text-charcoal/65 hover:text-royal" href="tel:+914442424242">+91 44 4242 4242</a>
              <a className="leading-7 text-charcoal/65 hover:text-royal" href="mailto:tables@mishkat.in">tables@mishkat.in</a>
              </div>
              <div className="flex items-end">
                <a className="text-link" href="https://maps.google.com/?q=Khader+Nawaz+Khan+Road+Chennai" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
              </div>
            </div>
          </div>
          <iframe
            className="min-h-[460px] w-full border-0 grayscale-[.65] contrast-[.9]"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=80.238%2C13.048%2C80.265%2C13.075&layer=mapnik&marker=13.0604%2C80.2496"
            title="Map showing Mishkat in Nungambakkam, Chennai"
          />
        </div>
      </section>

      <footer className="bg-navy px-6 pb-9 pt-16 text-white/60 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row md:items-end">
            <div className="flex items-center gap-5">
              <img className="h-36 w-36 shrink-0 object-contain" src={mishkatLogo} alt="Mishkat Restaurant" />
              <p className="max-w-xs text-sm leading-6">The warmth of Malabar dining, served with a contemporary Chennai spirit.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[0.62rem] uppercase tracking-[0.2em] text-white/80">
              <a className="hover:text-brass" href="#story">Our story</a>
              <a className="hover:text-brass" href="#menu">Menu</a>
              <a className="hover:text-brass" href="#gallery">Gallery</a>
              <a className="hover:text-brass" href="#reserve">Reservations</a>
              <a className="hover:text-brass" href="#">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pt-8 text-[0.58rem] uppercase tracking-[0.16em] sm:flex-row">
            <p>© 2025 Mishkat Restaurant, Chennai</p>
            <p>Made for evenings worth remembering</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
