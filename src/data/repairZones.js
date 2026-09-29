// Repair Coverage Zones configuration based on official Alfa Appliances zone map (ZONES.jpeg)

export const DEFAULT_ZONES = [
  {
    id: "green",
    name: "East London",
    prefix: "E",
    colorName: "Green",
    colorHex: "#22c55e",
    active: true,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysFull: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    // E4 is explicitly excluded / grey on the map
    postcodes: [
      "E1",
      "E1W",
      "E2",
      "E3",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
      "E13",
      "E14",
      "E15",
      "E16",
      "E17",
      "E18",
      "E20",
    ],
    note: "Monday to Saturday (E4 excluded)",
  },
  {
    id: "blue",
    name: "North, North West & Ilford",
    prefix: "N · NW · IG",
    colorName: "Blue",
    colorHex: "#3b82f6",
    active: true,
    days: ["Mon", "Tue", "Thu", "Sat"],
    daysFull: ["Monday", "Tuesday", "Thursday", "Saturday"],
    postcodes: [
      // N area
      "N1",
      "N1C",
      "N2",
      "N3",
      "N4",
      "N5",
      "N6",
      "N7",
      "N8",
      "N10",
      "N11",
      "N12",
      "N13",
      "N15",
      "N16",
      "N17",
      "N18",
      "N19",
      "N22",
      // NW area
      "NW1",
      "NW3",
      "NW4",
      "NW5",
      "NW11",
      // IG area
      "IG1",
      "IG2",
      "IG3",
      "IG4",
      "IG5",
      "IG6",
      "IG8",
      "IG11",
    ],
    note: "Monday, Tuesday, Thursday, Saturday",
  },
  {
    id: "purple",
    name: "Romford",
    prefix: "RM",
    colorName: "Purple",
    colorHex: "#a855f7",
    active: true,
    days: ["Mon", "Tue", "Thu"],
    daysFull: ["Monday", "Tuesday", "Thursday"],
    postcodes: ["RM6", "RM7", "RM8", "RM9", "RM10"],
    note: "Monday, Tuesday, Thursday",
  },
  {
    id: "orange",
    name: "South East London",
    prefix: "SE",
    colorName: "Orange",
    colorHex: "#f97316",
    active: true,
    days: ["Wed", "Fri"],
    daysFull: ["Wednesday", "Friday"],
    postcodes: [
      "SE1",
      "SE3",
      "SE4",
      "SE5",
      "SE7",
      "SE8",
      "SE10",
      "SE11",
      "SE13",
      "SE14",
      "SE15",
      "SE16",
      "SE17",
      "SE22",
      "SE23",
    ],
    note: "Wednesday, Friday",
  },
  {
    id: "pink",
    name: "Central London",
    prefix: "WC · EC",
    colorName: "Pink",
    colorHex: "#ec4899",
    active: true,
    days: ["Wed", "Fri", "Sat"],
    daysFull: ["Wednesday", "Friday", "Saturday"],
    postcodes: ["WC1", "WC2", "EC1", "EC2", "EC3", "EC4"],
    note: "Wednesday, Friday, Saturday",
  },
];

export const GENERAL_BOOKING_RULES = {
  sundayBookings: false,
  slots: [
    { id: "morning", label: "Morning", time: "8am–12pm", maxBookings: 6 },
    { id: "afternoon", label: "Afternoon", time: "12pm–4pm", maxBookings: 6 },
    { id: "evening", label: "Evening", time: "4pm–8pm", maxBookings: 6 },
  ],
  callOutFee: "£59.99",
  creditTowardsReplacement: "£20.00",
  creditValidityDays: 7,
};

const STORAGE_KEY = "alfa_repair_zones";

/**
 * Loads current zones configuration from localStorage if present, otherwise returns defaults.
 */
export const loadZones = () => {
  if (typeof window === "undefined") return DEFAULT_ZONES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ZONES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (e) {
    console.error("Failed to load saved repair zones, falling back to defaults", e);
  }
  return DEFAULT_ZONES;
};

/**
 * Saves zones configuration to localStorage.
 */
export const saveZones = (zones) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(zones));
    // Dispatch custom event for real-time sync across components in the same window
    window.dispatchEvent(new Event("alfa_repair_zones_updated"));
  } catch (e) {
    console.error("Failed to save repair zones", e);
  }
};

/**
 * Resets zones to original defaults from ZONES.jpeg.
 */
export const resetZonesToDefault = () => {
  if (typeof window === "undefined") return DEFAULT_ZONES;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("alfa_repair_zones_updated"));
  } catch (e) {
    console.error("Failed to reset repair zones", e);
  }
  return DEFAULT_ZONES;
};

/**
 * Extracts normalized outcode from any UK postcode string.
 * Examples:
 *  - "SE10 8EW" -> "SE10"
 *  - "SE108EW"  -> "SE10"
 *  - "e1w 1aa"  -> "E1W"
 *  - "rm6"      -> "RM6"
 *  - "ec1a 1bb" -> "EC1A"
 */
export const extractOutcode = (input) => {
  if (!input || typeof input !== "string") return "";
  const cleaned = input.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!cleaned) return "";

  // Standard UK full postcode ends with 1 digit and 2 letters (the incode, e.g. 8EW)
  if (cleaned.length >= 5 && /^[A-Z]{1,2}\d[A-Z0-9]?\d[A-Z]{2}$/.test(cleaned)) {
    return cleaned.slice(0, -3);
  }

  return cleaned;
};

/**
 * Checks if an outcode/postcode is covered under the current zones.
 * Handles subdistricts gracefully (e.g. EC1A falls under EC1).
 */
export const checkPostcodeCoverage = (postcodeStr, zonesOverride = null) => {
  const outcode = extractOutcode(postcodeStr);
  if (!outcode) {
    return {
      covered: false,
      error: true,
      message: "Please enter a valid UK postcode to check coverage.",
    };
  }

  const zones = zonesOverride || loadZones();
  const baseOutcode = outcode.replace(/^([A-Z]{1,2}\d+)[A-Z]$/, "$1");

  for (const zone of zones) {
    if (!zone.active) continue;

    const matches = zone.postcodes.some((code) => {
      const upper = code.trim().toUpperCase();
      return upper === outcode || upper === baseOutcode;
    });

    if (matches) {
      return {
        covered: true,
        outcode,
        zone,
        allowedDays: zone.days,
        allowedDaysFull: zone.daysFull || zone.days,
        message: `Fantastic — you’re in luck! We cover ${outcode} (${zone.name}).`,
        daysMessage: `Available booking days: ${zone.days.join(" · ")}`,
      };
    }
  }

  return {
    covered: false,
    outcode,
    message: `Unfortunately we don’t currently cover ${outcode} — we’re working on expanding, so please check back soon.`,
  };
};

/**
 * Returns allowed booking days array for a postcode (e.g. ["Wed", "Fri"]).
 * Returns empty array if not covered.
 */
export const getAllowedDaysForPostcode = (postcodeStr, zonesOverride = null) => {
  const result = checkPostcodeCoverage(postcodeStr, zonesOverride);
  if (result.covered && result.zone) {
    return result.zone.days;
  }
  return [];
};

export const DEFAULT_SLOT_CAPACITY = 6;
const BOOKINGS_STORAGE_KEY = "alfa_repair_slot_bookings";

export const getSlotBookingsMap = () => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading slot bookings", e);
  }
  return {};
};

export const saveSlotBookingsMap = (map) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event("alfa_repair_bookings_updated"));
  } catch (e) {
    console.error("Error saving slot bookings", e);
  }
};

/**
 * Returns slot availability for a given dateString (e.g. "2026-09-30").
 * Handles maximum 6 bookings per slot (as per ZONES.jpeg rule).
 * If booked >= 6, marks slot as isFull (grey / unbookable).
 */
export const getSlotAvailabilityForDate = (dateString, dayIndex = 0) => {
  const map = getSlotBookingsMap();
  const dateData = map[dateString] || {};

  // Default simulated counts so client can see the grey/unbookable state immediately:
  // - First available day: Morning is 6/6 (FULLY BOOKED)
  // - Afternoon has 3 bookings (3 remaining)
  // - Evening has 0 bookings (6 available)
  // - Day 0 (Tomorrow - Wed): Morning is 6/6 (FULLY BOOKED / GREY)
  // - Day 2 (Friday): all 3 slots have 6/6 bookings (18/18 FULL date)
  const defaultCounts =
    dayIndex === 0
      ? { morning: 6, afternoon: 3, evening: 0 }
      : dayIndex === 2
      ? { morning: 6, afternoon: 6, evening: 6 }
      : { morning: 1, afternoon: 0, evening: 2 };

  const morningBooked =
    dateData.morning !== undefined ? Number(dateData.morning) : defaultCounts.morning;
  const afternoonBooked =
    dateData.afternoon !== undefined ? Number(dateData.afternoon) : defaultCounts.afternoon;
  const eveningBooked =
    dateData.evening !== undefined ? Number(dateData.evening) : defaultCounts.evening;

  const max = DEFAULT_SLOT_CAPACITY;

  const slots = {
    morning: {
      id: "morning",
      label: "Morning",
      time: "8am–12pm",
      booked: morningBooked,
      max,
      isFull: morningBooked >= max,
      remaining: Math.max(0, max - morningBooked),
    },
    afternoon: {
      id: "afternoon",
      label: "Afternoon",
      time: "12pm–4pm",
      booked: afternoonBooked,
      max,
      isFull: afternoonBooked >= max,
      remaining: Math.max(0, max - afternoonBooked),
    },
    evening: {
      id: "evening",
      label: "Evening",
      time: "4pm–8pm",
      booked: eveningBooked,
      max,
      isFull: eveningBooked >= max,
      remaining: Math.max(0, max - eveningBooked),
    },
  };

  const isDayFullyBooked =
    slots.morning.isFull && slots.afternoon.isFull && slots.evening.isFull;

  return {
    ...slots,
    isDayFullyBooked,
  };
};
