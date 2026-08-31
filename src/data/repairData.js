import washingMachineImg from "../assets/categories/washing-machine.png";
import dryerImg from "../assets/categories/dryers.png";
import washerDryerImg from "../assets/categories/washer-dryers.png";
import fridgeFreezerImg from "../assets/categories/fridge-freezer.png";
import fridgeImg from "../assets/categories/fridges.png";
import freezerImg from "../assets/categories/freezer.png";
import dishwasherImg from "../assets/categories/dishwasher.png";
import cookerImg from "../assets/categories/cooker.png";
import ovenImg from "../assets/categories/oven.png";
import hobsImg from "../assets/categories/hobs.png";
import cookerHoodImg from "../assets/categories/cooker-hood.png";
import microwaveImg from "../assets/categories/microwave.png";

export const repairAppliances = [
  {
    id: "washing-machines",
    name: "Washing Machine",
    icon: washingMachineImg,
    category: "Laundry",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Not draining water / Error code E20 / E18",
      "Not spinning or drum not turning",
      "Leaking water from bottom or door seal",
      "Loud knocking / bearing noise during cycle",
      "Door locked / handle broken",
      "Tripping mains electricity when starting",
      "Water not heating up",
    ],
  },
  {
    id: "tumble-dryers",
    name: "Tumble Dryer",
    icon: dryerImg,
    category: "Laundry",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Not heating up / clothes stay damp",
      "Drum not rotating / snapped belt",
      "Loud squeaking or rumbling noise",
      "Stopping mid-cycle",
      "Filter / condenser warning light on",
      "Burning smell during operation",
    ],
  },
  {
    id: "washer-dryers",
    name: "Washer Dryer",
    icon: washerDryerImg,
    category: "Laundry",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Drying cycle not heating",
      "Error code during wash or dry cycle",
      "Water not draining after wash",
      "Excessive vibration / banging",
      "Door locked or stuck",
    ],
  },
  {
    id: "fridge-freezers",
    name: "Fridge Freezer",
    icon: fridgeFreezerImg,
    category: "Refrigeration",
    turnaround: "Priority Same Day",
    commonFaults: [
      "Fridge section warm but freezer cold",
      "Both compartments not cooling",
      "Excessive ice buildup / Frost-free fault",
      "Continuous compressor running / loud buzzing",
      "Water pooling in bottom salad crisper",
      "Flashing temperature display / alarm beeping",
      "Door seal split or not closing tight",
    ],
  },
  {
    id: "fridges",
    name: "Larder Fridge",
    icon: fridgeImg,
    category: "Refrigeration",
    turnaround: "Priority Same Day",
    commonFaults: [
      "Not cooling adequately",
      "Freezing items on top shelf",
      "Water leaking onto floor",
      "Thermostat not clicking on",
      "Internal light not working",
    ],
  },
  {
    id: "freezers",
    name: "Freezer / Chest Freezer",
    icon: freezerImg,
    category: "Refrigeration",
    turnaround: "Priority Same Day",
    commonFaults: [
      "Food defrosting / temperature rising",
      "Red warning light illuminated",
      "Heavy frost build-up preventing drawer closing",
      "Clicking noise from rear motor",
      "Faulty door seal or hinge",
    ],
  },
  {
    id: "ovens",
    name: "Built-in / Single Oven",
    icon: ovenImg,
    category: "Cooking",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Fan running but oven not heating (blown element)",
      "Overheating / burning food (faulty thermostat)",
      "Oven clock / timer dead and oven won't turn on",
      "Oven door not closing flush / broken hinges",
      "Main oven tripping fuse board",
      "Uneven baking or temperature drops",
    ],
  },
  {
    id: "cookers",
    name: "Freestanding Cooker & Range",
    icon: cookerImg,
    category: "Cooking",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Main or secondary oven not heating",
      "Gas burner flame failure / won't stay lit",
      "Electric grill not working",
      "Spark ignition clicking continuously",
      "Oven door glass loose or shattered",
    ],
  },
  {
    id: "hobs",
    name: "Induction & Ceramic Hob",
    icon: hobsImg,
    category: "Cooking",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Zone flashing 'E' error code / locked 'L'",
      "Zones not detecting induction pans",
      "One or more rings not heating",
      "Touch controls unresponsive",
      "Tripping the consumer unit fuse",
    ],
  },
  {
    id: "dishwashers",
    name: "Dishwasher (Full size & Slimline)",
    icon: dishwasherImg,
    category: "Dishwashers",
    turnaround: "Same / Next Day",
    commonFaults: [
      "Not draining water / standing water at bottom",
      "Not filling with water / tap symbol flashing",
      "Dishes coming out cold and dirty",
      "Tablet dispenser not opening",
      "Leaking underneath onto kitchen floor",
      "Beeping error code / flood sensor active (E15 / F)",
    ],
  },
  {
    id: "cooker-hoods",
    name: "Cooker Hood & Extractor",
    icon: cookerHoodImg,
    category: "Cooking",
    turnaround: "1 - 2 Days",
    commonFaults: [
      "Motor hums but fan blades don't spin",
      "No power / fan speed buttons dead",
      "Halogen or LED lights not illuminating",
      "Loud vibration or rattling at high speed",
    ],
  },
  {
    id: "microwaves",
    name: "Microwave & Combi Oven",
    icon: microwaveImg,
    category: "Small Appliances",
    turnaround: "1 - 2 Days",
    commonFaults: [
      "Plate turns but food does not heat (magnetron)",
      "Sparking / arcing inside cavity",
      "Keypad / touch panel unresponsive",
      "Dead fuse / no display power",
    ],
  },
];

export const repairBrands = [
  "Bosch",
  "Samsung",
  "LG",
  "Beko",
  "Miele",
  "Smeg",
  "Hotpoint",
  "Whirlpool",
  "Siemens",
  "Neff",
  "Blomberg",
  "Teknix",
  "Hisense",
  "AEG",
  "Zanussi",
  "Indesit",
  "Electrolux",
  "Rangemaster",
  "Hoover",
  "Candy",
  "Belling",
  "Stoves",
  "Other Brand",
];

export const timeSlots = [
  {
    id: "morning",
    label: "Morning Window",
    time: "08:00 AM – 12:00 PM",
    badge: "Most Popular",
    desc: "Engineer calls 30 mins before arrival",
  },
  {
    id: "afternoon",
    label: "Afternoon Window",
    time: "12:00 PM – 04:00 PM",
    badge: "Flexible",
    desc: "Ideal for mid-day appointments",
  },
  {
    id: "evening",
    label: "Late Afternoon / Evening",
    time: "04:00 PM – 07:00 PM",
    badge: "After Work",
    desc: "Convenient after-hours slot",
  },
  {
    id: "first-call",
    label: "First Call Priority",
    time: "08:00 AM – 09:30 AM",
    badge: "Priority (+£15)",
    desc: "Guaranteed first visit of the day",
  },
];

export const pricingPlans = [
  {
    id: "diagnostic",
    name: "Standard Diagnostic & Callout",
    price: "£69",
    tagline: "Transparent In-Home Inspection",
    popular: false,
    features: [
      "Full diagnostic check by certified technician",
      "Identification of faulty components",
      "Fixed written quote for parts & labor before work",
      "Safety test and electrical earth check",
      "Fee deducted from final bill if repair proceeds",
    ],
    buttonText: "Book Inspection",
  },
  {
    id: "standard-repair",
    name: "Comprehensive In-Home Repair",
    price: "£89",
    subtext: "+ parts if required",
    tagline: "Our Most Common Booking",
    popular: true,
    features: [
      "Complete on-site repair & labor included",
      "Genuine OEM manufacturer parts used",
      "12-Month Guarantee on all parts & labor",
      "Full post-repair performance test",
      "Disposal of old faulty components",
      "Clean & tidy work guarantee",
    ],
    buttonText: "Book Repair Now",
  },
  {
    id: "workshop-repair",
    name: "Workshop Drop-Off Service",
    price: "£39",
    tagline: "Stoke Newington Counter Service",
    popular: false,
    features: [
      "Drop off microwaves, hobs & small appliances",
      "Same-day / next-day workbench testing",
      "Fast parts sourcing from London depot",
      "Free pickup reminder when ready",
      "Full 12-Month repair warranty",
    ],
    buttonText: "Select Drop-Off",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Book Online or Call",
    desc: "Choose your appliance, describe the problem, and pick a convenient 2-hour window that fits your schedule.",
    icon: "calendar",
  },
  {
    step: "02",
    title: "Expert Diagnosis",
    desc: "Our fully equipped Gas Safe & certified engineer arrives with genuine spare parts to inspect and test the appliance.",
    icon: "search",
  },
  {
    step: "03",
    title: "Transparent Fixed Quote",
    desc: "You get a clear, upfront quote. No surprise charges. Once approved, the engineer completes the repair immediately.",
    icon: "receipt",
  },
  {
    step: "04",
    title: "12-Month Guarantee",
    desc: "Enjoy peace of mind with our comprehensive 12-month parts and labor warranty on all completed domestic repairs.",
    icon: "shield",
  },
];

export const repairTestimonials = [
  {
    id: 1,
    name: "David K.",
    location: "Stoke Newington, London N16",
    appliance: "Bosch Washing Machine",
    rating: 5,
    date: "August 2026",
    quote:
      "My washing machine stopped draining on a Sunday evening. Alfa Appliances booked me in for Monday 9am. The engineer arrived on time, replaced the drain pump from his van stock in 35 minutes, and tested the machine. Superb service and saved me buying a new washer!",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Islington, London N1",
    appliance: "Samsung Frost Free Fridge-Freezer",
    rating: 5,
    date: "July 2026",
    quote:
      "Our fridge stopped cooling during the summer heat. The technician diagnosed a faulty defrost sensor, replaced it, and saved over £300 worth of groceries! Highly professional and very fair pricing.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    location: "Hackney, London E8",
    appliance: "Neff Built-in Fan Oven",
    rating: 5,
    date: "August 2026",
    quote:
      "The heating element in our main oven blew right before a dinner party. Called Alfa Appliances — they had the genuine Neff element in stock and fixed it the same afternoon. Fantastic local service!",
  },
  {
    id: 4,
    name: "Elena Rostova",
    location: "Highbury & Camden, London N5",
    appliance: "Miele Slimline Dishwasher",
    rating: 5,
    date: "June 2026",
    quote:
      "Extremely polite and knowledgeable engineer. Found a blockage in the anti-flood chamber and replaced the inlet valve. Everything is running like new with their 12-month guarantee.",
  },
];

export const repairFaqs = [
  {
    q: "How quickly can you send an engineer to repair my appliance?",
    a: "We offer same-day emergency callouts for urgent issues (such as refrigeration faults or major leaks) when booked before 11:00 AM, and guaranteed next-day morning or afternoon slots across London postcodes. You'll receive an SMS with a 30-minute arrival notification.",
  },
  {
    q: "What is included in the diagnostic fee?",
    a: "The diagnostic fee covers travel to your property and up to 45 minutes of comprehensive fault-finding with professional diagnostic equipment. If you proceed with the quoted repair on the day, this fee is deducted directly from your final repair invoice.",
  },
  {
    q: "Do your engineers carry spare parts in their vans?",
    a: "Yes! Our mobile engineers carry hundreds of the most common genuine spare parts (such as pumps, heating elements, door seals, belts, thermostats, and sensors) for Bosch, Samsung, Beko, Miele, LG, Hotpoint, and other major brands. Over 85% of repairs are completed on the very first visit.",
  },
  {
    q: "Are the repairs guaranteed?",
    a: "All domestic appliance repairs carried out by Alfa Appliances come with a full 12-month warranty covering both the replaced parts and our technician's workmanship. If the same fault recurs within 12 months, we fix it free of charge.",
  },
  {
    q: "Can I bring small appliances into your Stoke Newington shop?",
    a: "Yes! For microwaves, countertop induction hobs, vacuum cleaners, and small kitchen appliances, you are welcome to drop them off at our showroom and repair counter at 105 Stoke Newington High St, London N16 0PH (Monday to Saturday, 9:00 AM to 6:00 PM).",
  },
  {
    q: "What areas of London do you cover for home visits?",
    a: "We cover all of North London, East London, Central London, and surrounding boroughs including Hackney (N16, E8, E5), Islington (N1, N5), Haringey (N4, N8, N15), Camden (NW1, NW3, NW5), Tower Hamlets (E1, E2, E3), Enfield, and Waltham Forest.",
  },
  {
    q: "What happens if my appliance is beyond economical repair?",
    a: "If an appliance is deemed unsafe or the repair costs exceed the cost of a replacement, our engineer will provide honest advice. As a premier appliance retailer, we can apply your diagnostic fee as a discount towards a brand new replacement appliance delivered and installed by our team.",
  },
];

export const londonBoroughs = [
  "Hackney (N16, E8, E5, E9)",
  "Islington (N1, N5, N7, N19)",
  "Haringey (N4, N8, N15, N17)",
  "Camden (NW1, NW3, NW5)",
  "Tower Hamlets (E1, E2, E3, E14)",
  "Waltham Forest (E10, E11, E17)",
  "Enfield & Barnet (N9, N13, N14, N21)",
  "City of London & Central (EC1, EC2, WC1, WC2)",
];
