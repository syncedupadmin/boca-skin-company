/**
 * Every string in this file was extracted from the live bocaskincompany.com
 * (rendered DOM, 2026-09-02). Nothing here is invented. Prices, hours,
 * downtime ratings and clinical claims are deliberately absent because the
 * source site does not publish them.
 */

export const site = {
  name: "Boca Skin Company",
  short: "BSC",
  positioning: "Medical Meets Luxury",
  phone: "954-674-8173",
  phoneHref: "tel:+19546748173",
  email: "bocaskinco5499@gmail.com",
  address: {
    street: "5499 N Federal Hwy Suite D",
    city: "Boca Raton",
    state: "FL",
    zip: "33487",
  },
  maps: "https://maps.app.goo.gl/b5YM3T2dwymxWEXo9",
  booking: "https://www.joinblvd.com/b/bocaskincompany/widget#/visit-type",
  instagram: "https://www.instagram.com/bocaskincompany",
  reviews:
    "https://www.google.com/search?q=boca+skin+company+bsc&sca_esv=571066675",
  // The original site's Vagaro gift-certificate URL returns 404. Gift cards
  // are sold through the Boulevard widget ("Gift Card - Purchase a gift card
  // for future visits"), so this points there until Vagaro is confirmed.
  giftCards: "https://www.joinblvd.com/b/bocaskincompany/widget#/visit-type",
  // The original site's Cherry tracked link returns 403 ("This URL could not
  // be verified"). This is Cherry's direct practice URL, which resolves 200.
  // Ask Cherry for a fresh tracked link if attribution matters.
  financing: "https://pay.withcherry.com/skinbychloerose",
  /**
   * Canonical origin. Defaults to the Vercel URL so a preview deployment never
   * claims the client's live domain. Set NEXT_PUBLIC_SITE_URL to
   * https://www.bocaskincompany.com when the domain is pointed here; that also
   * flips the site from noindex to indexable (see app/robots.ts).
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://boca-skin-company.vercel.app",
  liveDomain: "https://www.bocaskincompany.com",
} as const;

/** True only once the real domain is attached. Gates indexing. */
export const isLiveDomain = site.url === site.liveDomain;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------------------------------------------------------------- HOME --- */

export const hero = {
  eyebrow: "Boca Raton, FL / Advanced Aesthetics",
  headlineLead: "There is no",
  headlineItalic: "one-size-fits-all",
  headlineTail: "approach to your skin.",
  positioning: "Medical Meets Luxury",
  sub: "Personalized beauty solutions at Boca Skin Company, where your unique needs shine.",
};

export const philosophy = {
  eyebrow: "The Premise",
  statement:
    "At Boca Skin Company, we're firm believers that when it comes to skincare and beauty treatments, there is no one-size-fits-all approach.",
  statementItalic: "there is no one-size-fits-all approach",
  body: "We understand that each individual is unique, and their skin deserves tailored care that addresses their specific concerns and goals. That's why we take pride in offering a wide range of customized services that cater to your distinct needs, ensuring your beauty truly shines.",
};

export const soundsLikeYou = {
  eyebrow: "Does this sound like you?",
  close: "You are ready to take your skin health to the next level.",
  items: [
    {
      claim: "Tried every product",
      body: "Just like everyone else, you see a product on Instagram or TikTok because an influencer is using it. Skincare isn't a one-size-fits-all. We are here to help guide you and create a customized regimen specifically for your skin.",
    },
    {
      claim: "Nothing is clearing my acne",
      body: "Your provider plays a key role in clearing your skin. If nothing has worked, they could not be applying or treating the skin properly. We will dive deeper to figure out what is happening and come up with a game plan.",
    },
    {
      claim: "Why can't I have clear skin",
      body: "Consistency is key. Clear skin doesn't happen overnight, you need a trusted professional to help you down the right path.",
    },
  ],
};

export const ourWork = {
  eyebrow: "Our Work",
  body: "Every person's skin is a canvas with its own story, challenges, and aspirations. We recognize the importance of personalization in achieving the best results, which is why we've made it our specialty to craft treatments that are as unique as you are.",
  specialties: [
    {
      title: "Core Specialties",
      image: "/img/spec-device.webp",
      lead: "One of our core specialties lies in the art of combining treatments to create a synergistic effect.",
      body: "One of our core specialties lies in the art of combining treatments to create a synergistic effect. Take, for instance, our Hydrafacial x Microneedling fusion. This innovative pairing harnesses the deep exfoliation and rejuvenation of a Hydrafacial with the collagen-boosting power of Microneedling, resulting in a treatment that not only refreshes your skin but also enhances its youthful radiance.",
    },
    {
      title: "Custom Facials",
      image: "/img/skin-glow.webp",
      lead: "Our custom facials are another testament to our commitment to personalized beauty.",
      body: "Our custom facials are another testament to our commitment to personalized beauty. By blending carefully chosen facial treatments with the appropriate peels, we address your unique concerns, whether it's combating acne, reducing pigmentation, or simply achieving a radiant glow. These facials are meticulously tailored to your skin type and condition, ensuring you experience the most effective and enjoyable skincare journey.",
    },
  ],
};

export const welcome = {
  eyebrow: "The Room",
  statement:
    "When you step into Boca Skin Company, you're welcomed into a world where your beauty goals are our top priority.",
  body: [
    "Our team of skilled professionals takes the time to understand your skin's needs, your preferences, and your aspirations. We believe that this personal connection is the foundation of a successful beauty journey.",
    "Our dedication to customization has resulted in countless success stories, where our clients have seen remarkable transformations in their skin and overall confidence. We take immense pride in helping you achieve your unique beauty goals, one personalized treatment at a time.",
  ],
};

/* ---------------------------------------------------------- TESTIMONIALS - */

export const testimonials = [
  { quote: "Hands-down the best skincare place in South Florida! Chloe & Jordan are A M A Z I N G. If you want immediate results, this is the place! My skin has improved significantly! Jordan, thanks for being so caring and knowledgeable I'm very happy with my skin :)", name: "Bianca F" },
  { quote: "Jordan is the BEST! She has literally changed my skin. I used to have horrible break-outs and uneven skin texture and I can honestly say since I've been getting facials from her, my skin has never looked better. I am so beyond grateful for all she has done for me and HIGHLY recommend going to her! You won't regret it!", name: "Morgan S" },
  { quote: "I love working with Chloe! She is so personable and easy to talk to! I always leave her feeling fresh and beautiful. Thank you, Chloe!!", name: "Samantha S" },
  { quote: "Jordan is amazing at what she does, she is the absolute best!! She is friendly, kind, knowledgeable, and accommodating. My skin has never looked better! I highly recommend her to anyone and everyone.", name: "Allison J" },
  { quote: "I absolutely love going to see Chloe. My skin looks and feels so much better. She is so caring and really has a great understanding of what's going on with your skin. It's a game-changer. One visit and you will be hooked.", name: "Gina B" },
  { quote: "I got a hydrafacial with Jordan & it was an amazing experience! I learned so much about my individual skin & left feeling refreshed. My skin was so soft & glowing! Can't wait for my next appt.", name: "Meagan" },
  { quote: "I've been seeing Chloe for the past couple of months and she is amazing! Chloe is a great person, honest, attentive, and knowledgeable. My skin has never looked better. Thank you again Chloe for transforming my skin!", name: "Lindsay K" },
  { quote: "Jordan was amazing! Never had a facial like this… my skin was shining after.", name: "Kasey W" },
];

/* --------------------------------------------------------------- ABOUT --- */

export const about = {
  eyebrow: "About BSC",
  headline:
    "Our team of skilled professionals takes the time to understand your skin's needs, your preferences, and your aspirations.",
  sub: "We believe that this personal connection is the foundation of a successful beauty journey.",
  chloe: {
    name: "Chloe Elliott",
    role: "Founder, Aesthetician",
    image: "/img/chloe.webp",
    lead: "Chloe Elliott, a passionate and skilled aesthetician, stands as the driving force behind the transformative journey of Boca Skin Company.",
    body: [
      "With her unwavering dedication to beauty and skincare, Chloe has not only honed her craft but also established herself as a trusted expert in the industry.",
      "Her story is one of determination, creativity, and a relentless pursuit of excellence.",
    ],
    chapters: [
      {
        k: "Where",
        body: "Born and raised in Boca Raton, Florida, Chloe's fascination with aesthetics began at a young age. Growing up in a community where the pursuit of beauty was not just a preference but a way of life, she felt drawn to the world of skincare and aesthetics. As a teenager, she spent countless hours researching skincare products and experimenting with homemade treatments.",
      },
      {
        k: "When",
        body: "Chloe's journey toward becoming an aesthetician was driven by a passion to help people look and feel their best. After completing her high school and college education, she pursued formal training in aesthetics and skincare. Her dedication and commitment to her studies paid off as she quickly gained expertise in various skincare techniques, from facials to advanced skin treatments.",
      },
      {
        k: "Why",
        body: "Chloe discovered her true calling. She was inspired to create a unique medspa experience that combined the latest in aesthetic technologies with a serene and inviting atmosphere. This vision led her to the birth of Boca Skin Company, a place where clients could indulge in luxurious treatments while achieving their skincare goals.",
      },
      {
        k: "How",
        body: "With unwavering determination, Chloe embarked on the journey of opening Boca Skin Company. She meticulously researched the latest trends and technologies in the industry, handpicked a team of talented professionals, and designed the spa's interior to exude sophistication and comfort. Her dream was to create a space where clients could escape the stresses of everyday life and focus on self-care.",
      },
    ],
    solidified: {
      title: "What has solidified Chloe's reputation as a visionary aesthetician:",
      points: ["Innovative approach to skincare", "Genuine care for her clients' well-being"],
      close: "Chloe Elliott's journey from a young girl fascinated by beauty to the founder of Boca Skin Company is a testament to her unwavering dedication, passion, and expertise in the world of aesthetics.",
      legacy: "BSC medspa is not just a business; it's a reflection of Chloe's commitment to helping others enhance their natural beauty and boost their confidence. Her legacy as an aesthetician is bound to leave an indelible mark on the community of skincare and beauty for years to come.",
    },
  },
  jordan: {
    name: "Jordan",
    role: "Aesthetician",
    image: "/img/jordan.webp",
    body: [
      "Jordan's journey from her roots in New Jersey to her flourishing career in Florida is a testament to her unwavering entrepreneurial spirit. With four years of experience in the aesthetics industry, Jordan's path took a unique turn when she transitioned from being a client to becoming trained and employed by Chloe, her aesthetician.",
      "It was a serendipitous discovery that they shared not only a strong bond but also an unbridled passion for their craft. Jordan's heart truly lies in making a difference in people's lives, and she finds immense joy in helping pregnant women discover their radiant glow, assisting brides-to-be in achieving their dream looks, and addressing problematic skin concerns to boost confidence.",
      "Her areas of expertise encompass tackling acne, texture issues, and pigmentation irregularities. Jordan's favorite treatments include the transformative Morpheus, rejuvenating HydraFacials, and skin-refining microneedling sessions.",
      "In her precious moments of leisure, she dedicates time to fitness, meditation, journaling, and indulges in the ultimate self-care by receiving facials from her partner and friend, Chloe.",
    ],
    close: "Jordan's journey is a testament to her dedication and the artistry she brings to her beloved clients, leaving them not only looking their best, but also feeling their most confident selves.",
  },
  teamWork: {
    title: "Our (Team) Work",
    body: [
      "Our team of skilled professionals takes the time to understand your skin's needs, your preferences, and your aspirations. We believe that this personal connection is the foundation of a successful beauty journey.",
      "We take immense pride in helping you achieve your unique beauty goals, one personalized treatment at a time.",
    ],
  },
};

/* ------------------------------------------------------------ SERVICES --- */

export type Treatment = {
  name: string;
  body?: string;
  tiers?: { name: string; body: string }[];
  items?: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
  treatments: Treatment[];
};

export const servicesIntro = {
  eyebrow: "Explore Our Services",
  headline:
    "We'll help you achieve your unique beauty goals, one personalized treatment at a time.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "facial-systems",
    title: "Facial Systems",
    blurb:
      "Named systems and structured facial experiences, built around the HydraFacial platform and DMK Enzyme Therapy.",
    image: "/img/facial-cards.webp",
    treatments: [
      {
        name: "BSC Custom HydraFacial",
        body: "Our custom facials blend carefully chosen facial treatments with the appropriate peels to address your unique concerns, whether it's combating acne, reducing pigmentation, or simply achieving a radiant glow.",
        tiers: [
          {
            name: "The Deluxe",
            body: "A rejuvenating treatment that includes everything in the HydraFacial™ Basic plus a level 1 or level 2 glycolic & salicylic peel for extra exfoliation and optimal absorption of all serums & a custom booster infusion! This treatment also comes with 1 customized mask, dermaplaning, LED & manual extractions.",
          },
          {
            name: "The Platinum",
            body: "The platinum HydraFacial™ is customized and tailored to meet your individual needs. This treatment features all the essentials of the HydraFacial™ Deluxe while addressing your specific skin concerns with a custom booster. This specialty facial includes Dermaplaning, Manual Extractions, 1 Customized Mask, Ice Globe Massage, Celluma LED Light Therapy & an optional PCA Chemical Peel.",
          },
        ],
      },
      {
        name: "DMK Enzyme Therapy",
        body: "DMK Enzyme Therapy is the most powerful, effective method for hydrolyzing dead skin cell material from the skin tissues, detoxifying the skin of all impurities, and lifting and tightening it for a firmer, youthful, glowing appearance. This mask is capable of tightening the skin progressively and removing impurities from the skin cells by a process known as reverse osmosis (the most oxygen your skin will receive). The best lymphatic drainage facial there is! Safe for all skin types and pregnancy.",
      },
    ],
  },
  {
    slug: "collagen-induction",
    title: "Infusion & Collagen Induction",
    blurb:
      "Two different routes to the same objective: getting active ingredients past the surface and prompting the skin to rebuild.",
    image: "/img/spec-device.webp",
    treatments: [
      {
        name: "Skin Pen Microneedling",
        body: "The Skin Pen is the first FDA-cleared micro-needling device & made in the USA. Collagen induction therapy has been around for decades to rebuild the skin by producing collagen & elastin. This is the ultimate anti-aging Treatment. A hydrating growth factor serum is used as a glide on the skin while 6 slanted needles penetrate the epidermis. We can customize this service with different boosters to help reduce acne scarring and pigmentation.",
      },
      {
        name: "Nano Infusion",
        body: "The NanoFacial is an amazing alternative to micro-needling. It is a painless treatment that requires zero downtime while achieving incredible results! With the Rezenerate pen, custom serums for your skin type are infused, optimizing skin health by delivering nutrients without any discomfort. No needles are involved. Instead, the Rezenerate pen uses Nanotechnology with a 3-phased system of Stratum Disruption through a custom array of pyramid-like nanostructures.",
      },
    ],
  },
  {
    slug: "energy-based",
    title: "Energy-Based Treatments",
    blurb:
      "Device-led resurfacing and remodeling. These carry a different commitment profile than a facial.",
    // The LED-room shot is lit in saturated blue and fights the warm palette.
    // This is the actual RF console and handpieces, which is both on-category
    // and on-brand.
    image: "/img/room-led.webp",
    treatments: [
      {
        name: "Morpheus8",
        body: "Morpheus8 is a minimally invasive skin tightening procedure that pairs microneedling with RF (radio frequency). This FDA-cleared technology uses tiny needles to deliver RF energy deep into your dermis (at customizable depths and energies) creating controlled micro lesions that trigger your body's natural healing process and promote the production of new collagen and elastin to firm and remodel skin. It delivers the deepest fractional treatments available, heating subdermal tissue to 8mm (7mm + 1mm thermal profile). It resurfaces and rejuvenates the skin and skin texture, while also reducing pore size, acne scars, pigmentation, fine lines, wrinkles, stretch marks, and tightening laxity.",
      },
      {
        name: "Clear and Brilliant Laser",
        body: "Clear + Brilliant® laser system (1440nm and 1927nm handpieces) is indicated for dermatological procedures requiring the coagulation of soft tissue and general skin resurfacing. This laser is safe for all skin types and treats skin conditions such as melasma, acne, acne scarring, pigmentation, sun spots, enlarged pores, uneven or dull skin complexion & more!",
      },
    ],
  },
  {
    slug: "chemical-resurfacing",
    title: "Chemical Resurfacing",
    blurb:
      "Seven peels, chosen against your skin type and the post-peel experience you want. Unsure which? Book the PCA and we will decide in person.",
    image: "/img/spec-facial.webp",
    treatments: [
      { name: "The Perfect Peel", body: "The only medium depth medical grade chemical peel with glutathione for all skin types & all ethnicities." },
      { name: "Reve Skin Enlighten Peel", body: "Noninvasive and painless with limited downtime. Enlighten™ is designed for all skin types, especially for darker skin types at higher risk of hyperpigmentation. Lightening peels block pigmentation production so that no new pigmentation surfaces during the treatment cycle. Home care requirements before treatment." },
      { name: "PCA Chemical Peel", body: "PCA has a variety of TCA chemical peels for all skin types. These peels can be easily customized to your skin and what type of post-peel experience you would like to have. If you're unsure but want a peel, book this service! We will analyze your skin in person to decide which peel is the right fit." },
      { name: "Jan Marini Refine Peel", body: "This is a medium-depth chemical peel. Excellent in providing overall skin rejuvenation to address fine lines, wrinkles, mild acne, and pigmentation. We recommend a series of 3-4 peels, spaced out 3–4 weeks apart, for best results." },
      { name: "Jan Marini Clarity Peel", body: "This is a medium-depth chemical peel. It has a combination of salicylic and mandelic acids. Amazing for addressing acne and acne scarring but also will address lines, wrinkles, and pigmentation. Best to do a series of 3 peels, approximately 3–4 weeks apart." },
      { name: "Skin Better Alpharet Peel", body: "This peel has no downtime! It improves the overall appearance of skin tone and texture for patients with mild photodamage using skin betters famous alpharet. This quick pick-me-up service comes with Dermaplaning and light extractions. Get ready to GLOW! This peel is amazing to do in combination with our custom hydrafacials." },
      { name: "Body Peels", body: "With the PCA Body Peel solution, the sky is the limit to what area of the body we are able to treat. Great for “backne” or sun damage anywhere on the body." },
    ],
  },
  {
    slug: "combination-treatments",
    title: "Combination Treatments",
    blurb:
      "Our core specialty: pairing treatments so they compound. This is the clearest evidence that we do not treat every service as an isolated item on a menu.",
    image: "/img/tools-linen.webp",
    treatments: [
      { name: "Skin Pen Microneedling + HydraFacial™", body: "Get ready for the ultimate glow-up! This is BSC's most popular service! Exfoliate & Extract with the HydraFacial™ Machine + Microneedle with the Skin Pen. We infuse the skin with Growth Factors after the microneedling treatment is over. This treatment is amazing for anyone who is looking to produce collagen, rid fine lines/wrinkles, diminish sun spots/pigmentation, tighten and firm the skin & shrink pores." },
      { name: "Nano Infusion + HydraFacial™", body: "Receive all the amazing benefits of Nano Infusion while also getting your skin squeaky clean with the HydraFacial™! If you are looking for an effective treatment with little to no downtime, this is for you!" },
    ],
  },
  {
    slug: "enhancements",
    title: "Enhancements",
    blurb: "Add-ons. These attach to a treatment above rather than standing alone.",
    treatments: [
      { name: "Add-ons", items: ["Dermaplaning", "PCA Peel", "Skin Better Alpharet Peel", "LED", "Exosomes"] },
    ],
  },
  {
    slug: "wellness",
    title: "Wellness",
    blurb: "IV therapy and vitamin injections. Kept separate from skin services on purpose.",
    image: "/img/room-niche.webp",
    treatments: [
      { name: "IV Bags", items: ["All in One IV", "Hangover Recovery IV", "Myers Cocktail IV", "Skinny Confidential IV", "Get Well Soon IV", "The Jet Setter IV", "Beauty Elixer IV", "NAD+ Injection"] },
      { name: "Vitamin Injections", items: ["Glutathione", "Vitamin D", "B12"] },
    ],
  },
];

/* ----------------------------------------------------------- SHOP LINKS -- */

export const shopLinks = [
  { label: "Book an appointment", href: site.booking, note: "Boulevard" },
  { label: "View or leave a review", href: site.reviews, note: "Google" },
  { label: "Morpheus8 payment plans with Cherry", href: site.financing, note: "Financing" },
  { label: "Gift cards", href: site.giftCards, note: "Boulevard" },
  { label: "Shop Skin Better Science", href: "https://skinbetter.pro/skinbychloerose", note: "Shop" },
  { label: "Shop Colorescience", href: "https://colorescience.com/Skin-by-Chloe-Rose", note: "Shop" },
  { label: "Shop Jan Marini Skin Research", href: "https://marini.life/208574", note: "Shop" },
  { label: "Shop Oxygenetix", href: "https://www.oxygenetix.com?rfsn=5967092.db3c7d", note: "Shop" },
  { label: "Shop GlyMed Plus", href: "https://glymedplus.io/store/skinbychloerose", note: "Shop" },
];
