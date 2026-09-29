import washingMachine from "../assets/categories/washing-machine.png";
import dryer from "../assets/categories/dryers.png";
import washerDryer from "../assets/categories/washer-dryers.png";
import fridgeFreezer from "../assets/categories/fridge-freezer.png";
import fridge from "../assets/categories/fridges.png";
import freezer from "../assets/categories/freezer.png";
import chestFreezer from "../assets/categories/chest-freezer.png";
import dishwasher from "../assets/categories/dishwasher.png";
import cooker from "../assets/categories/cooker.png";
import oven from "../assets/categories/oven.png";
import hobs from "../assets/categories/hobs.png";
import cookerHood from "../assets/categories/cooker-hood.png";
import microwave from "../assets/categories/microwave.png";
import kettle from "../assets/categories/kettle.png";
import toaster from "../assets/categories/toaster.png";

export const categories = [
  {
    id: "washing-machines",
    name: "Washing Machines",
    thumbnail: washingMachine,
    href: "/laundry/washing-machines",
  },
  {
    id: "dryers",
    name: "Dryers",
    thumbnail: dryer,
    href: "/laundry/tumble-dryers",
  },
  {
    id: "washer-dryers",
    name: "Washer dryers",
    thumbnail: washerDryer,
    href: "/laundry/washer-dryers",
  },
  {
    id: "fridge-freezers",
    name: "Fridge Freezers",
    thumbnail: fridgeFreezer,
    href: "/refrigerator/fridge-freezers",
  },
  {
    id: "fridge",
    name: "Fridges",
    thumbnail: fridge,
    href: "/refrigerator/fridges",
  },
  {
    id: "freezers",
    name: "Freezers",
    thumbnail: freezer,
    href: "/refrigerator/freezers",
  },
  {
    id: "chest-freezers",
    name: "Chest Freezers",
    thumbnail: chestFreezer,
    href: "/refrigerator/chest-freezers",
  },
  {
    id: "dishwasher",
    name: "Dishwashers",
    thumbnail: dishwasher,
    href: "/dishwashers/full-size-dishwashers",
  },
  {
    id: "cookers",
    name: "Cookers",
    thumbnail: cooker,
    href: "/cooking/cookers",
  },
  {
    id: "ovens",
    name: "Ovens",
    thumbnail: oven,
    href: "/cooking/ovens",
  },
  {
    id: "hobs",
    name: "Hobs",
    thumbnail: hobs,
    href: "/cooking/hobs",
  },
  {
    id: "cooker-hoods",
    name: "Cooker Hoods",
    thumbnail: cookerHood,
    href: "/cooking/cooker-hoods",
  },
  {
    id: "microwave",
    name: "Microwave",
    thumbnail: microwave,
    href: "/small-appliances/microwaves",
  },
  {
    id: "kettles",
    name: "Kettles",
    thumbnail: kettle,
    href: "/small-appliances/kettles",
  },
  {
    id: "toaster",
    name: "Toaster",
    thumbnail: toaster,
    href: "/small-appliances/toasters",
  },
];
