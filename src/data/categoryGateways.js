// import { collections } from "./collections";
// import { brands } from "./brands";

// const collectionBySlug = Object.fromEntries(
//   collections.map((collection) => [collection.slug, collection])
// );

// const makeTiles = (items) =>
//   items.map(({ slug, name }) => ({
//     ...collectionBySlug[slug],
//     name: name ?? collectionBySlug[slug].name,
//   }));

// const makeBrands = (names) => names.map((name) => brands.find((brand) => brand.name === name));

// const makeConsiderations = (items) =>
//   items.map(({ title, text, imageSlug }) => ({
//     title,
//     text,
//     image: collectionBySlug[imageSlug]?.image,
//   }));

// export const categoryGateways = {
//   laundry: {
//     eyebrow: "Laundry",
//     title: "Find the right laundry appliance",
//     description: "Choose a laundry solution that fits your space, routine, and the way you live.",
//     tiles: makeTiles([
//       { slug: "washing-machines" },
//       { slug: "tumble-dryers", name: "Dryers" },
//       { slug: "washer-dryers" },
//     ]),
//     popularLinks: [
//       { label: "Samsung washing machines", slug: "washing-machines", brand: "Samsung" },
//       { label: "LG washing machines", slug: "washing-machines", brand: "LG" },
//       { label: "Beko tumble dryers", slug: "tumble-dryers", brand: "Beko" },
//       { label: "Miele tumble dryers", slug: "tumble-dryers", brand: "Miele" },
//       { label: "Hisense washer dryers", slug: "washer-dryers", brand: "Hisense" },
//     ],
//     brands: makeBrands(["LG", "Samsung", "Beko", "Miele", "Hisense"]),
//     considerations: makeConsiderations([
//       { title: "Load size", text: "Choose a drum size that matches your household and weekly washing rhythm.", imageSlug: "washing-machines" },
//       { title: "Quick cycles", text: "Short programmes help when clothes need to be ready without waiting all day.", imageSlug: "washer-dryers" },
//       { title: "Energy use", text: "Compare efficient cycles and heat pump technology to make every load count.", imageSlug: "tumble-dryers" },
//     ]),
//     content: {
//       title: "Discover our laundry appliances",
//       paragraphs: [
//         "Make wash day feel more manageable with dependable appliances for cleaning, drying, and keeping clothes ready for the week ahead.",
//         "From quick everyday cycles to larger capacity drums, explore practical features that suit your home, your space, and your routine.",
//       ],
//     },
//   },
//   refrigerator: {
//     eyebrow: "Refrigeration",
//     title: "Make space for fresher living",
//     description: "Explore practical cooling options, from everyday fridges to flexible freezer storage.",
//     tiles: makeTiles([
//       { slug: "fridge-freezers" },
//       { slug: "fridges" },
//       { slug: "freezers" },
//       { slug: "chest-freezers" },
//     ]),
//     popularLinks: [
//       { label: "Samsung fridge freezers", slug: "fridge-freezers", brand: "Samsung" },
//       { label: "LG fridges", slug: "fridges", brand: "LG" },
//       { label: "Hisense fridge freezers", slug: "fridge-freezers", brand: "Hisense" },
//       { label: "Beko freezers", slug: "freezers", brand: "Beko" },
//       { label: "Smeg fridges", slug: "fridges", brand: "Smeg" },
//     ],
//     brands: makeBrands(["Samsung", "LG", "Hisense", "Beko", "Smeg"]),
//     considerations: makeConsiderations([
//       { title: "Capacity", text: "Find the right balance of chilled storage and freezer space for your household.", imageSlug: "fridge-freezers" },
//       { title: "Freshness features", text: "Flexible shelves and dedicated zones make everyday food storage easier to organise.", imageSlug: "fridges" },
//       { title: "Flexible freezing", text: "Choose compact or larger freezer storage for weekly shops and batch cooking.", imageSlug: "freezers" },
//     ]),
//     content: {
//       title: "Discover our refrigeration appliances",
//       paragraphs: [
//         "Keep ingredients organised and close at hand with cooling appliances designed around real household routines.",
//         "Compare layouts, storage capacity, and useful freshness features to create a setup that works beautifully in your kitchen.",
//       ],
//     },
//   },
//   cooking: {
//     eyebrow: "Cooking",
//     title: "Build your ideal cooking setup",
//     description: "Start with the appliance that matches your kitchen and the way you cook.",
//     tiles: makeTiles([
//       { slug: "cookers" },
//       { slug: "ovens" },
//       { slug: "hobs" },
//       { slug: "cooker-hoods" },
//     ]),
//     popularLinks: [
//       { label: "Miele ovens", slug: "ovens", brand: "Miele" },
//       { label: "Smeg cookers", slug: "cookers", brand: "Smeg" },
//       { label: "Beko hobs", slug: "hobs", brand: "Beko" },
//       { label: "Samsung ovens", slug: "ovens", brand: "Samsung" },
//       { label: "Hisense cooker hoods", slug: "cooker-hoods", brand: "Hisense" },
//     ],
//     brands: makeBrands(["Miele", "Smeg", "Beko", "Samsung", "Hisense"]),
//     considerations: makeConsiderations([
//       { title: "Cooking style", text: "Start with the format that suits the meals you make most often.", imageSlug: "cookers" },
//       { title: "Precise control", text: "Look for responsive hob controls and oven programmes that give you confidence.", imageSlug: "hobs" },
//       { title: "Kitchen fit", text: "Measure carefully and choose an appliance that sits naturally in your existing layout.", imageSlug: "ovens" },
//     ]),
//     content: {
//       title: "Discover our cooking appliances",
//       paragraphs: [
//         "Whether you cook quick weekday meals or host at the weekend, the right combination of appliances helps every recipe feel more achievable.",
//         "Explore flexible formats, considered controls, and finishes that bring a confident Alfa feel to the heart of your home.",
//       ],
//     },
//   },
//   dishwashers: {
//     eyebrow: "Dishwashers",
//     title: "Choose a cleaner way to reset",
//     description: "Find the right capacity and format for your kitchen, from slimline to full size.",
//     tiles: makeTiles([
//       { slug: "full-size-dishwashers" },
//       { slug: "slimline-dishwashers" },
//     ]),
//     popularLinks: [
//       { label: "Beko full size dishwashers", slug: "full-size-dishwashers", brand: "Beko" },
//       { label: "Miele full size dishwashers", slug: "full-size-dishwashers", brand: "Miele" },
//       { label: "LG slimline dishwashers", slug: "slimline-dishwashers", brand: "LG" },
//       { label: "Hisense dishwashers", slug: "full-size-dishwashers", brand: "Hisense" },
//     ],
//     brands: makeBrands(["Bosch", "Beko", "Miele", "Hisense", "LG"]).filter(Boolean),
//     considerations: makeConsiderations([
//       { title: "Place settings", text: "Choose a size that handles your usual load without taking over the kitchen.", imageSlug: "full-size-dishwashers" },
//       { title: "Quiet cleaning", text: "Quiet programmes make it easier to run a cycle while the household is still active.", imageSlug: "slimline-dishwashers" },
//       { title: "Flexible loading", text: "Adjustable racks and useful programmes help every item find its place.", imageSlug: "full-size-dishwashers" },
//     ]),
//     content: {
//       title: "Discover our dishwasher appliances",
//       paragraphs: [
//         "Take the effort out of clearing up with dependable cleaning performance and layouts designed for everyday dishes.",
//         "Choose the capacity and installation style that fits your kitchen, then let useful programmes handle the hard work.",
//       ],
//     },
//   },
//   "small-appliances": {
//     eyebrow: "Small Appliances",
//     title: "Small upgrades, easier routines",
//     description: "Discover useful everyday appliances selected to make the details of home life simpler.",
//     tiles: makeTiles([
//       { slug: "kettles" },
//       { slug: "toasters" },
//       { slug: "microwaves" },
//       { slug: "air-fryers" },
//       { slug: "hoovers" },
//     ]),
//     popularLinks: [
//       { label: "Smeg kettles", slug: "kettles", brand: "Smeg" },
//       { label: "Beko microwaves", slug: "microwaves", brand: "Beko" },
//       { label: "Samsung microwaves", slug: "microwaves", brand: "Samsung" },
//       { label: "Hisense air fryers", slug: "air-fryers", brand: "Hisense" },
//       { label: "Beko hoovers", slug: "hoovers", brand: "Beko" },
//     ],
//     brands: makeBrands(["Smeg", "Dualit", "Beko", "Samsung", "Hisense"]).filter(Boolean),
//     considerations: makeConsiderations([
//       { title: "Everyday speed", text: "Small appliances should make routine jobs quicker without adding clutter.", imageSlug: "kettles" },
//       { title: "Useful capacity", text: "Think about the portions, drinks, and surfaces you prepare most frequently.", imageSlug: "air-fryers" },
//       { title: "Easy storage", text: "Compact shapes and practical finishes help appliances earn their place on the worktop.", imageSlug: "toasters" },
//     ]),
//     content: {
//       title: "Discover our small appliances",
//       paragraphs: [
//         "The little details of a home day add up. Find compact helpers that bring speed, simplicity, and a touch of personality to your routines.",
//         "From breakfast essentials to flexible cooking tools, choose appliances that are easy to reach for and satisfying to use.",
//       ],
//     },
//   },
// };


import { collections } from "./collections";
import { brands } from "./brands";

const collectionBySlug = Object.fromEntries(
  collections.map((collection) => [collection.slug, collection])
);

const makeTiles = (items) =>
  items.map(({ slug, name }) => ({
    ...collectionBySlug[slug],
    name: name ?? collectionBySlug[slug]?.name,
  }));

const makeBrands = (names) => names.map((name) => brands.find((brand) => brand.name === name));

const makeConsiderations = (items) =>
  items.map(({ title, text, imageSlug }) => ({
    title,
    text,
    image: collectionBySlug[imageSlug]?.image,
  }));

export const categoryGateways = {
  laundry: {
    eyebrow: "Laundry",
    title: "Find the right laundry appliance",
    description: "Choose a laundry solution that fits your space, routine, and the way you live.",
    tiles: makeTiles([
      { slug: "washing-machines", name: "Washing Machines" },
      { slug: "tumble-dryers", name: "Tumble Dryers" },
      { slug: "washer-dryers", name: "Washer Dryers" },
    ]),
    popularLinks: [
      { label: "Samsung washing machines", slug: "washing-machines", brand: "Samsung" },
      { label: "LG washing machines", slug: "washing-machines", brand: "LG" },
      { label: "Beko tumble dryers", slug: "tumble-dryers", brand: "Beko" },
      { label: "Miele tumble dryers", slug: "tumble-dryers", brand: "Miele" },
      { label: "Hisense washer dryers", slug: "washer-dryers", brand: "Hisense" },
      { label: "Bosch washing machines", slug: "washing-machines", brand: "Bosch" },
    ],
    brands: makeBrands(["LG", "Samsung", "Beko", "Miele", "Hisense"]),
    considerations: makeConsiderations([
      { title: "Load size", text: "Choose a drum size that matches your household and weekly washing rhythm. Ensure capacity meets your peak demands.", imageSlug: "washing-machines" },
      { title: "Quick cycles", text: "Short programmes help when clothes need to be ready without waiting all day, maximizing efficiency for smaller loads.", imageSlug: "washer-dryers" },
      { title: "Energy use", text: "Compare efficient cycles and heat pump technology to make every load count, reducing long-term running costs.", imageSlug: "tumble-dryers" },
    ]),
    content: {
      title: "Discover our range of laundry appliances",
      paragraphs: [
        "Take the effort out of wash day with the right washing machine, tumble dryer, or washer dryer combination tailored to your household's rhythm. Modern laundry appliances come packed with intelligent technology designed to deliver spotless, fresh-smelling clothes with minimal hassle. From smart AI sensors that detect load weights to auto-dosing systems that calculate the precise amount of detergent needed, today's laundry solutions ensure optimal efficiency while keeping garments looking their best.",

        "Choosing the ideal laundry setup depends on your available space and daily routine. Integrated washing machines and washer dryers slot seamlessly behind kitchen cabinetry for a streamlined aesthetic, while freestanding models offer maximum flexibility in utility spaces. If space is tight, combined washer dryers offer the ultimate convenience by washing and drying clothes in a single continuous cycle without needing two separate machines.",

        "When selecting a tumble dryer, consider how moisture is managed. Condenser dryers collect water in an easily emptyable tank so you can place them anywhere, whereas vented dryers expel warm air through a wall duct or window. For maximum energy efficiency, heat pump tumble dryers reuse warm air during the drying process, significantly lowering electricity bills over time.",

        "Advanced features make everyday maintenance effortless. Steam cleaning cycles work deep into fabrics to lift stubborn stains and neutralize allergens, dramatically reducing time spent ironing. Rapid quick-wash options refresh light loads in as little as 15 minutes, while ultra-quiet inverter motors ensure smooth, whisper-quiet operation—allowing you to run laundry cycles late at night without disturbing the household.",
      ],
    },
  },
  refrigerator: {
    eyebrow: "Refrigeration",
    title: "Make space for fresher living",
    description: "Explore practical cooling options, from everyday fridges to flexible freezer storage built around your lifestyle.",
    tiles: makeTiles([
      { slug: "fridge-freezers", name: "Fridge Freezers" },
      { slug: "fridges", name: "Fridges" },
      { slug: "freezers", name: "Freezers" },
      { slug: "chest-freezers", name: "Chest Freezers" },
    ]),
    popularLinks: [
      { label: "Samsung fridge freezers", slug: "fridge-freezers", brand: "Samsung" },
      { label: "LG fridges", slug: "fridges", brand: "LG" },
      { label: "Hisense fridge freezers", slug: "fridge-freezers", brand: "Hisense" },
      { label: "Beko freezers", slug: "freezers", brand: "Beko" },
      { label: "Smeg fridges", slug: "fridges", brand: "Smeg" },
    ],
    brands: makeBrands(["Samsung", "LG", "Hisense", "Beko", "Smeg"]),
    considerations: makeConsiderations([
      { title: "Capacity & Ratio", text: "Find the right balance of chilled storage and freezer space. Pick 70/30 or 50/50 splits depending on your fresh food reliance.", imageSlug: "fridge-freezers" },
      { title: "Freshness Features", text: "Flexible humidity-controlled drawers and multi-airflow cooling zones keep produce crisp and reduce food waste.", imageSlug: "fridges" },
      { title: "Flexible Freezing", text: "Choose frost-free, high-efficiency upright or chest freezers for seamless weekly meal prep and long-term storage.", imageSlug: "freezers" },
    ]),
    content: {
      title: "Discover our refrigeration appliances",
      paragraphs: [
        "Keep your fresh ingredients and frozen essentials perfectly preserved with our comprehensive range of cooling appliances. Modern refrigeration has evolved beyond basic cold storage, offering flexible multi-temperature zones, precision humidity controls, and sleek designs that complement any kitchen layout.",

        "Whether you prefer the clean look of built-in integrated fridge freezers that fit standard cabinet dimensions or the versatile layout of freestanding units, there is a configuration for every lifestyle. American-style fridge freezers provide spacious side-by-side or French door storage alongside luxury conveniences like built-in cold water and ice dispensers. For compact kitchens or studio spaces, slimline models and under-counter mini fridges optimize every inch without sacrificing cooling performance.",

        "Dedicated wine coolers maintain optimal humidity and vibration-free temperature zones to preserve your favorite vintages, while chest and upright freezers provide additional cold storage ideal for large families, weekly meal prepping, and bulk buys.",

        "Innovative cooling technology simplifies maintenance and protects your food. Total frost-free technology eliminates manual defrosting by preventing ice buildup, while eco-friendly cooling modes conserve electricity. Fast-chill and quick-freeze functions rapidly drop internal temperatures to lock in freshness, nutrients, and flavor the moment you unpack your weekly grocery haul.",
      ],
    },
  },
  cooking: {
    eyebrow: "Cooking",
    title: "Build your ideal cooking setup",
    description: "Start with high-performance appliances tailored precisely to your culinary techniques and kitchen layout.",
    tiles: makeTiles([
      { slug: "cookers", name: "Cookers" },
      { slug: "ovens", name: "Ovens" },
      { slug: "hobs", name: "Hobs" },
      { slug: "cooker-hoods", name: "Cooker Hoods" },
    ]),
    popularLinks: [
      { label: "Miele built-in ovens", slug: "ovens", brand: "Miele" },
      { label: "Smeg range cookers", slug: "cookers", brand: "Smeg" },
      { label: "Beko induction hobs", slug: "hobs", brand: "Beko" },
      { label: "Samsung double ovens", slug: "ovens", brand: "Samsung" },
      { label: "Hisense extraction hoods", slug: "cooker-hoods", brand: "Hisense" },
    ],
    brands: makeBrands(["Miele", "Smeg", "Beko", "Samsung", "Hisense"]),
    considerations: makeConsiderations([
      { title: "Cooking Style", text: "Select between versatile multifunction electric ovens, responsive induction surfaces, or traditional gas flame precision.", imageSlug: "cookers" },
      { title: "Precise Control", text: "Touch control displays, pre-programmed auto-cook settings, and pyrolytic self-cleaning make cooking and maintenance effortlessly simple.", imageSlug: "hobs" },
      { title: "Dimensions & Fit", text: "Measure your kitchen dimensions accurately to ensure your appliances integrate flawlessly into single, double, or range cooker cavities.", imageSlug: "ovens" },
    ]),
    content: {
      title: "Discover our range of cooking appliances",
      paragraphs: [
        "Elevate your culinary creations with built-in and freestanding cooking appliances designed for precision, speed, and versatility. From versatile standalone cookers to flexible wall-mounted ovens, our collection equips you with the tools needed to master every recipe from simple weeknight dinners to festive family banquets.",

        "Freestanding cookers bring everything together in one complete package, available in compact sizes for cozy kitchens or expansive range cookers featuring up to seven powerful burners and double oven cavities. Choose between traditional gas burners for instant flame response, durable ceramic surfaces, or fast, ultra-safe induction hobs with intuitive touch controls and adaptive cooking zones.",

        "For built-in setups, single and double wall ovens integrate seamlessly at eye level so you can inspect roasts and bakes without bending down. Many modern ovens feature smart pre-set cooking algorithms, hybrid steam functions, and self-cleaning pyrolytic modes that burn off food residue at high temperatures, turning cleanup into a simple wipe-down.",

        "Expand your kitchen's capabilities with multi-functional combination microwave ovens that combine standard microwave speed with convection baking and grill element capabilities. Complete your kitchen atmosphere with high-performance cooker hoods that pull smoke, steam, and cooking odors away silently, keeping your kitchen air crisp and fresh.",
      ],
    },
  },
  dishwashers: {
    eyebrow: "Dishwashers",
    title: "Choose a cleaner way to reset",
    description: "Discover efficient dishwashers with versatile place settings, designed to leave cookware sparkling clean.",
    tiles: makeTiles([
      { slug: "full-size-dishwashers", name: "Full Size Dishwashers" },
      { slug: "slimline-dishwashers", name: "Slimline Dishwashers" },
    ]),
    popularLinks: [
      { label: "Beko full size dishwashers", slug: "full-size-dishwashers", brand: "Beko" },
      { label: "Miele premium dishwashers", slug: "full-size-dishwashers", brand: "Miele" },
      { label: "LG slimline dishwashers", slug: "slimline-dishwashers", brand: "LG" },
      { label: "Hisense quiet dishwashers", slug: "full-size-dishwashers", brand: "Hisense" },
    ],
    brands: makeBrands(["Bosch", "Beko", "Miele", "Hisense", "LG"]).filter(Boolean),
    considerations: makeConsiderations([
      { title: "Place Settings", text: "Select 10-place slimline models for small kitchens or 16-place full-sized models for high-capacity cleaning power.", imageSlug: "full-size-dishwashers" },
      { title: "Low Noise Levels", text: "Inverter motor technology enables ultra-quiet night modes, perfect for open-plan living and quiet evening routines.", imageSlug: "slimline-dishwashers" },
      { title: "Flexible Racking", text: "Adjustable height baskets, foldable tines, and dedicated cutlery trays accommodate odd-shaped pots and delicate glassware.", imageSlug: "full-size-dishwashers" },
    ]),
    content: {
      title: "Best dishwasher selection for your home",
      paragraphs: [
        "Say goodbye to endless sink duty and enjoy sparkling clean dishes with high-efficiency dishwashers engineered to save time, energy, and water. Modern dishwashers utilize advanced spray technology and targeted washing zones to tackle greasy pots, burnt-on baking dishes, and delicate glassware far more efficiently than hand washing.",

        "Selecting the right installation type ensures a flawless kitchen fit. Freestanding dishwashers offer ultimate portability and generous interior space for large households, while integrated dishwashers hide behind custom cabinet doors for a seamless built-in look. If floor space is limited, slimline dishwashers and compact tabletop units fit easily into smaller kitchens while still accommodating up to 10 place settings.",

        "Flexible interior arrangements give you complete control over every load. Height-adjustable upper racks, foldable plate tines, and third-tier cutlery trays allow you to fit tall wine glasses alongside bulky stockpots effortless in a single run.",

        "Packed with intelligent cleaning features, these machines adapt to your schedule. Rapid quick-wash cycles clean lightly soiled plates in a fraction of the time, while auto-sensing eco cycles adjust water usage and wash temperatures based on dirty water turbidity. Advanced inverter motors lower operating noise down to whisper-quiet decibel levels, perfect for open-plan living and nighttime washing.",
      ],
    },
  },
  "small-appliances": {
    eyebrow: "Small Appliances",
    title: "Small upgrades, easier routines",
    description: "Discover versatile countertop appliances engineered for speed, convenience, and effortless daily prep.",
    tiles: makeTiles([
      { slug: "kettles", name: "Kettles" },
      { slug: "toasters", name: "Toasters" },
      { slug: "microwaves", name: "Microwaves" },
      { slug: "air-fryers", name: "Air Fryers" },
      { slug: "hoovers", name: "Hoovers" },
    ]),
    popularLinks: [
      { label: "Smeg designer kettles", slug: "kettles", brand: "Smeg" },
      { label: "Beko solo microwaves", slug: "microwaves", brand: "Beko" },
      { label: "Samsung combination microwaves", slug: "microwaves", brand: "Samsung" },
      { label: "Hisense air fryers", slug: "air-fryers", brand: "Hisense" },
      { label: "Beko cordless vacuums", slug: "hoovers", brand: "Beko" },
    ],
    brands: makeBrands(["Smeg", "Dualit", "Beko", "Samsung", "Hisense"]).filter(Boolean),
    considerations: makeConsiderations([
      { title: "Speed & Power", text: "High-wattage heating elements and rapid-air technology dramatically cut down cooking and boiling time.", imageSlug: "kettles" },
      { title: "Capacity Options", text: "From multi-slice toast slots to dual-drawer air fryers, select capacity that comfortably satisfies your family size.", imageSlug: "air-fryers" },
      { title: "Compact Storage", text: "Sleek, ergonomic profiles and integrated cord storage help keep your kitchen worktops uncluttered.", imageSlug: "toasters" },
    ]),
    content: {
      title: "Discover ultimate small kitchen appliances",
      paragraphs: [
        "Upgrade your countertop with versatile small kitchen appliances designed to streamline meal preparation, boost morning routines, and inspire home baking. From fast morning breakfasts to satisfying evening dinners, smart countertop tech takes the guesswork and mess out of cooking.",

        "Start every morning on the right note with high-power electric kettles, multi-slice toasters with wide slot configurations, and barista-style espresso machines capable of whipping up smooth lattes and cappuccinos at the push of a button. Complement your morning routine with high-speed blenders and nutrient extractors for refreshing daily smoothies and juices.",

        "Simplify lunch and dinner prep with time-saving meal aids. Dual-zone air fryers cook crisp, delicious food using up to 80% less oil and electricity compared to traditional ovens. Multi-cookers, slow cookers, and automatic rice cookers handle everything from rich stews to perfectly steamed grains with zero monitoring, while compact food processors chop, slice, and blend ingredients in seconds.",

        "Unleash your inner baker with powerful stand mixers and dough kneaders that take the heavy manual labor out of bread making, cake batters, and pastry doughs. Compact designs, removable dishwasher-safe parts, and stylish matte or stainless-steel finishes ensure these daily essentials earn their spot on your kitchen worktop.",
      ],
    },
  },
};