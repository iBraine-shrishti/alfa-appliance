import washingMachine from "../assets/categories/washing-machine.png";
import fridgeFreezer from "../assets/categories/fridge-freezer.png";
import oven from "../assets/categories/oven.png";
import dishwasher from "../assets/categories/dishwasher.png";
import hobs from "../assets/categories/hobs.png";
import toaster from "../assets/categories/toaster.png";
import microwave from "../assets/categories/microwave.png";

export const categories = [
  { id: "washing-machines", name: "Washing Machines", thumbnail: washingMachine, href: "/laundry" },
  { id: "fridge-freezers", name: "Fridge Freezers", thumbnail: fridgeFreezer, href: "/refrigerator" },
  { id: "ovens", name: "OVENS", thumbnail: oven, href: "/cooking" },
  { id: "dishwasher", name: "Dishwasher", thumbnail: dishwasher, href: "/dishwashers" },
  { id: "hobs", name: "Hobs", thumbnail: hobs, href: "/cooking" },
  { id: "toaster", name: "Toaster", thumbnail: toaster, href: "/small-appliances" },
  { id: "microwave", name: "Microwave", thumbnail: microwave, href: "/cooking" },
];
