import { laundryPage } from "./laundry";
import { refrigeratorPage } from "./refrigerator";
import { cookingPage } from "./cooking";
import { smallAppliancesPage } from "./smallAppliances";
import { dishwashersPage } from "./dishwashers";

export const categoryPages = {
  laundry: laundryPage,
  "washing-machines": laundryPage,
  "washer-dryers": laundryPage,
  "tumble-dryers": laundryPage,
  refrigerator: refrigeratorPage,
  "fridge-freezers": refrigeratorPage,
  fridges: refrigeratorPage,
  freezers: refrigeratorPage,
  "chest-freezers": refrigeratorPage,
  cooking: cookingPage,
  cookers: cookingPage,
  ovens: cookingPage,
  hobs: cookingPage,
  "cooker-hoods": cookingPage,
  dishwashers: dishwashersPage,
  "full-size-dishwashers": dishwashersPage,
  "slimline-dishwashers": dishwashersPage,
  "small-appliances": smallAppliancesPage,
  kettles: smallAppliancesPage,
  toasters: smallAppliancesPage,
  microwaves: smallAppliancesPage,
  "air-fryers": smallAppliancesPage,
  hoovers: smallAppliancesPage,
};
