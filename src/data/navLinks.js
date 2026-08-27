export const navLinks = [
  {
    label: "Laundry",
    href: "/laundry",
    children: [
      { label: "Washing Machines", slug: "washing-machines", href: "/laundry/washing-machines" },
      { label: "Washer Dryers", slug: "washer-dryers", href: "/laundry/washer-dryers" },
      { label: "Tumble Dryers", slug: "tumble-dryers", href: "/laundry/tumble-dryers" },
    ],
  },
  {
    label: "Refrigeration",
    href: "/refrigerator",
    children: [
      { label: "Fridge Freezers", slug: "fridge-freezers", href: "/refrigerator/fridge-freezers" },
      { label: "Fridges", slug: "fridges", href: "/refrigerator/fridges" },
      { label: "Freezers", slug: "freezers", href: "/refrigerator/freezers" },
      { label: "Chest Freezers", slug: "chest-freezers", href: "/refrigerator/chest-freezers" },
    ],
  },
  {
    label: "Cooking",
    href: "/cooking",
    children: [
      { label: "Cookers", slug: "cookers", href: "/cooking/cookers" },
      { label: "Ovens", slug: "ovens", href: "/cooking/ovens" },
      { label: "Hobs", slug: "hobs", href: "/cooking/hobs" },
      { label: "Cooker Hoods / Extractor Fans", slug: "cooker-hoods", href: "/cooking/cooker-hoods" },
    ],
  },
  {
    label: "Dishwashers",
    href: "/dishwashers",
    children: [
      { label: "Full Size Dishwashers (60cm)", slug: "full-size-dishwashers", href: "/dishwashers/full-size-dishwashers" },
      { label: "Slimline Dishwashers (45cm)", slug: "slimline-dishwashers", href: "/dishwashers/slimline-dishwashers" },
    ],
  },
  {
    label: "Small Appliances",
    href: "/small-appliances",
    children: [
      { label: "Kettles", slug: "kettles", href: "/small-appliances/kettles" },
      { label: "Toasters", slug: "toasters", href: "/small-appliances/toasters" },
      { label: "Microwaves", slug: "microwaves", href: "/small-appliances/microwaves" },
      { label: "Air Fryers", slug: "air-fryers", href: "/small-appliances/air-fryers" },
      { label: "Hoovers", slug: "hoovers", href: "/small-appliances/hoovers" },
    ],
  },
];

export const dealLink = { label: "Deals", href: "/deals" };

export const navPillLinks = [
  { label: "BOOK A REPAIR", href: "/services", filled: true },
];