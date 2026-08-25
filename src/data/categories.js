import washingMachine from "../assets/categories/washing-machine.png";
import dryer from "../assets/categories/dryers.png"
import washerDryer from "../assets/categories/washer-dryers.png"
import fridgeFreezer from "../assets/categories/fridge-freezer.png";
import fridge from "../assets/categories/fridges.png";
import freezer from "../assets/categories/freezer.png";
import dishwasher from "../assets/categories/dishwasher.png";
import cooker from "../assets/categories/cooker.png";
import oven from "../assets/categories/oven.png";
import hobs from "../assets/categories/hobs.png";
import cookerHood from "../assets/categories/cooker-hood.png";
import microwave from "../assets/categories/microwave.png";
import kettle from "../assets/categories/kettle.png";
import toaster from "../assets/categories/toaster.png";

export const categories = [
  { id: "washing-machines", name: "Washing Machines", thumbnail: washingMachine, href: "/laundry" },
  { id: "dryers", name: "Dryers", thumbnail: dryer, href: "/laundry" },
  { id: "washer-dryers", name: "Washer dryers", thumbnail: washerDryer, href: "/laundry" },
  { id: "fridge-freezers", name: "Fridge Freezers", thumbnail: fridgeFreezer, href: "/refrigerator" },
  { id: "fridge", name: "Fridge", thumbnail: fridge, href: "/refrigerator" },
  { id: "freezers", name: "Freezers ", thumbnail: freezer, href: "/refrigerator" },
  { id: "dishwasher", name: "Dishwasher", thumbnail: dishwasher, href: "/dishwashers" },
  { id: "cookers", name: "Cookers", thumbnail: cooker, href: "/cooking" },
  { id: "ovens", name: "OVENS", thumbnail: oven, href: "/cooking" },
  { id: "hobs", name: "Hobs", thumbnail: hobs, href: "/cooking" },
  { id: "cooker-hoods", name: "Cooker Hoods", thumbnail: cookerHood, href: "/cooking" },
  { id: "microwave", name: "Microwave", thumbnail: microwave, href: "/cooking" },
  { id: "kettles", name: "Kettles", thumbnail: kettle, href: "/small-appliances" },
  { id: "toaster", name: "Toaster", thumbnail: toaster, href: "/small-appliances" },
];
