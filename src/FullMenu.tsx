import React from "react";

const fullMenu = [
  {
    category: "Seafood Soup",
    items: [
      { name: "Shezwan Seafood Soup", price: "170" },
      { name: "Mancho Seafood Soup", price: "170" },
      { name: "Prawns Soup", price: "170" },
    ],
  },
  {
    category: "Salad",
    items: [
      { name: "Non Veg Arabian Salad", price: "170" },
      { name: "Veg Arabian Salad", price: "170" },
      { name: "Green Salad", price: "170" },
      { name: "Cucumber Salad", price: "170" },
    ],
  },
  {
    category: "Chicken Dry Delights",
    image: "/mishkat/chicken-grill.png",
    items: [
      { name: "Chicken Kabab", price: "290" },
      { name: "Pepper Chicken", price: "290" },
      { name: "Pudeena Chicken", price: "290" },
      { name: "Lemon Chicken", price: "290" },
      { name: "Chicken Chatpata", price: "290" },
      { name: "Leg Piece Dry (1 pc)", price: "140" },
      { name: "Chilly Chicken", price: "290" },
      { name: "Gunger Chicken", price: "290" },
      { name: "Garlic Chicken", price: "290" },
      { name: "Chicken 65", price: "290" },
      { name: "Chicken Manchoorian", price: "290" },
      { name: "Andra Chilly Chicken", price: "310" },
    ],
  },
  {
    category: "Classic Chicken Gravy",
    items: [
      { name: "Butter Chicken", price: "280" },
      { name: "Pepper Chicken", price: "280" },
      { name: "Kadai Chicken", price: "280" },
      { name: "Punjabi Chicken", price: "300" },
      { name: "Hyderabadi Chicken", price: "280" },
      { name: "Kolhapuri Chicken", price: "280" },
      { name: "Chicken Mughalaii", price: "280" },
      { name: "Chicken Masala", price: "280" },
      { name: "Chicken Tikka Masala", price: "300" },
      { name: "Pudeenaa Chicken", price: "300" },
      { name: "Chicken Mishkat Masala", price: "350" },
      { name: "Tandoori Chicken Masala", price: "350" },
      { name: "Leg Piece Masala", price: "190" },
      { name: "Chilly Chicken", price: "280" },
      { name: "Chicken Hong Kong", price: "300" },
      { name: "Ginger Chicken", price: "280" },
      { name: "Garlic Chicken", price: "300" },
      { name: "Chicken Manchoorian", price: "300" },
    ],
  },
  {
    category: "Mutton Dry Delights",
    image: "/mishkat/al-faham.png",
    items: [
      { name: "Mutton Fry", price: "330" },
      { name: "Mutton Pepper", price: "330" },
      { name: "Mutton Chilly", price: "340" },
      { name: "Mutton Machoorian", price: "340" },
      { name: "Mutton Garlic", price: "340" },
      { name: "Mutton Pudeeena", price: "330" },
    ],
  },
  {
    category: "Mutton Tandoori",
    items: [
      { name: "Mutton Sheek Kabab", price: "450" },
      { name: "Mutton Chops Kabab", price: "399" },
      { name: "Mutton Banjara Kabab", price: "399" },
      { name: "Mutton Peri Peri Tikka", price: "399" },
    ],
  },
  {
    category: "Chicken Platters",
    image: "/mishkat/shawarma-platter.png",
    items: [
      { name: "Mishkat Special Platter", price: "1499" },
      { name: "Chicken Platter", price: "899" },
    ],
  },
  {
    category: "Tikka & Kabab Specials",
    items: [
      { name: "Hariyali Chicken", price: "299" },
      { name: "Afghani Chicken", price: "299" },
      { name: "Malai Kabab", price: "299" },
      { name: "Reshmi Kabab", price: "299" },
      { name: "Banjara Kabab", price: "299" },
      { name: "Chicken Tikka", price: "299" },
      { name: "Andhra Tikka", price: "299" },
      { name: "Chicken Sasti Kabab", price: "299" },
      { name: "Kalmi Kabab", price: "299" },
      { name: "Tandoori Kabab", price: "310" },
      { name: "Chicken Sheekh Kabab", price: "350" },
      { name: "Chicken Peri Peri", price: "299" },
      { name: "Chicken Peshawari Tikka", price: "320" },
      { name: "Chicken Garlic Tikka", price: "299" },
      { name: "Chicken Broosi Tikka", price: "299" },
      { name: "Chicken Pepper Tikka", price: "299" },
      { name: "Tangdi Kabab", price: "320" },
      { name: "Chicken Chilly Sheekh Kabab", price: "350" },
    ],
  },
];

const tandooriAlFaham = {
  category: "Tandoori & Al Faham",
  image: "/mishkat/pollichathu.png",
  headers: ["Q", "H", "F"],
  items: [
    { name: "Al Faham", prices: ["190", "280", "540"] },
    { name: "Al Faham Peri Peri", prices: ["200", "360", "600"] },
    { name: "Al Faham Cheese", prices: ["200", "360", "600"] },
    { name: "Al Faham Green Chilli", prices: ["190", "280", "540"] },
    { name: "Al Faham Irani", prices: ["200", "360", "600"] },
    { name: "Al Faham Pepper", prices: ["190", "280", "540"] },
    { name: "Al Faham Red Chilli", prices: ["190", "280", "540"] },
    { name: "Tandoori", prices: ["170", "290", "460"] },
    { name: "Grill Chicken", prices: ["-", "250", "480"] },
  ],
};

export function FullMenuModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-ivory overflow-hidden">
      <div className="flex h-20 shrink-0 items-center justify-between px-6 lg:px-12 bg-ivory shadow-sm z-10">
        <h2 style={{ fontFamily: "'Aref Ruqaa', serif" }} className="text-3xl text-royal">Mishkat Menu</h2>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition hover:bg-charcoal/10"
          aria-label="Close menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          
          <div className="text-center mb-16">
            <p className="eyebrow text-brass">A Taste of Mishkat</p>
            <h1 className="section-title mt-4 text-charcoal">The <em>Complete</em> Menu.</h1>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-12 space-y-12 pb-24">
            
            {fullMenu.map((section) => (
              <div key={section.category} className="break-inside-avoid">
                <h3 className="mb-8 font-display text-4xl text-navy">{section.category}</h3>
                
                {section.image && (
                  <div className="mb-8 aspect-[4/3] overflow-hidden rounded-2xl">
                    <img src={section.image} alt={section.category} className="h-full w-full object-cover" />
                  </div>
                )}
                
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div className="group" key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <h4 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-charcoal/90">{item.name}</h4>
                        <span className="h-px flex-1 bg-charcoal/15 transition group-hover:bg-brass" />
                        <span className="font-display text-lg font-medium text-charcoal">₹{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Tandoori & Al Faham section with multiple prices */}
            <div className="break-inside-avoid">
              <h3 className="mb-8 font-display text-4xl text-navy">{tandooriAlFaham.category}</h3>
              {tandooriAlFaham.image && (
                <div className="mb-8 aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={tandooriAlFaham.image} alt={tandooriAlFaham.category} className="h-full w-full object-cover" />
                </div>
              )}
              <div className="mb-4 flex gap-3 pr-2 text-right text-[0.7rem] font-semibold uppercase tracking-wider text-charcoal/50">
                <div className="flex-1"></div>
                <div className="w-12 text-center">Q</div>
                <div className="w-12 text-center">H</div>
                <div className="w-12 text-center">F</div>
              </div>
              <div className="space-y-6">
                {tandooriAlFaham.items.map((item) => (
                  <div className="group" key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-charcoal/90">{item.name}</h4>
                      <span className="h-px flex-1 bg-charcoal/15 transition group-hover:bg-brass" />
                      <div className="flex gap-3">
                        {item.prices.map((p, i) => (
                          <span key={i} className="w-12 text-center font-display text-lg font-medium text-charcoal">
                            {p === "-" ? "-" : `₹${p}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
