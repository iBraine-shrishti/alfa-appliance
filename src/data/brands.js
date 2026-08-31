import bekoLogo from "../assets/brands/beko.svg";
import hisenseLogo from "../assets/brands/hisense.svg";
import teknixLogo from "../assets/brands/teknix.svg";
import lgLogo from "../assets/brands/LG.svg";
import samsungLogo from "../assets/brands/samsung.svg";
import mieleLogo from "../assets/brands/miele.svg";
import smegLogo from "../assets/brands/smeg.svg";
// import aegLogo from "../assets/brands/aeg.svg";

// Helper function converting SVG strings into valid Data URIs (Prevents JS JSX errors)
const svgToUri = (svgString) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

export const brands = [
  // Asset File Imports
  { id: "beko", name: "Beko", logo: bekoLogo },
  { id: "hisense", name: "Hisense", logo: hisenseLogo },
  { id: "teknix", name: "Teknix", logo: teknixLogo },
  { id: "lg", name: "LG", logo: lgLogo },
  { id: "samsung", name: "Samsung", logo: samsungLogo },
  { id: "miele", name: "Miele", logo: mieleLogo },
  { id: "smeg", name: "Smeg", logo: smegLogo },
  // { id: "aeg", name: "Aeg", logo: aegLogo },

  // Direct Inline SVGs as Strings
  // {
  //   id: "bosch",
  //   name: "Bosch",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" fill="#1e293b"><path d="M11.6 4h14.8c6.1 0 10.3 3.3 10.3 8.3 0 3.7-2.1 6.5-5.7 7.6 4.3 1 6.8 4.2 6.8 8.4 0 5.6-4.6 9.2-11.2 9.2H11.6V4zm7.5 12h6.2c2.4 0 4-1.2 4-3.1 0-2-1.6-3.1-4-3.1h-6.2v6.2zm0 15.5h6.7c2.7 0 4.5-1.3 4.5-3.4 0-2.2-1.8-3.4-4.5-3.4h-6.7v6.8zM51 37.5c-9.8 0-17.5-7.4-17.5-16.75S41.2 4 51 4s17.5 7.4 17.5 16.75S60.8 37.5 51 37.5zm0-7.3c5.5 0 9.7-4.1 9.7-9.45s-4.2-9.45-9.7-9.45-9.7 4.1-9.7 9.45 4.2 9.45 9.7 9.45zM76.5 30.2c3.4 2.2 7.7 3.3 12.1 3.3 5.4 0 8.8-2.3 8.8-5.8 0-3.6-2.9-5.3-8.8-6.6l-3.3-.7c-7.9-1.8-11.7-5.4-11.7-11.1C73.6 3.6 80.5 0 89.2 0c4.8 0 9.4 1.1 13 3.4l-3.3 5.9c-3.1-1.8-6.7-2.7-10.2-2.7-5 0-7.7 2.1-7.7 5 0 3.2 2.8 4.7 8.3 5.9l3.3.7c8.5 1.9 12.3 5.5 12.3 11.4 0 6.3-6.6 10.4-16.1 10.4-5.6 0-10.9-1.4-14.8-4l2.5-5.8z"/></svg>`
  //   ),
  // },
  // {
  //   id: "hotpoint",
  //   name: "Hotpoint",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 30" fill="#1e293b"><path d="M10 2v24h4V16h10v10h4V2h-4v10H14V2h-4zm24 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18-11h-4v11h4v-11zm-4-3h4V8h-4v2zm12-5v4h4v13c0 2.2 1.8 4 4 4h4v-4h-3v-13h3V9h-12z"/></svg>`
  //   ),
  // },
  // {
  //   id: "indesit",
  //   name: "Indesit",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 35" fill="#053769"><path d="M0 30V5h6v25H0zm18 0V5h5.5l12 17V5H41v25h-5.5l-12-17v17H18zm28 0V5h12c7.2 0 13 5.8 13 12.5S65.2 30 58 30H46zm6-5h6c4 0 7-3.1 7-7.5s-3-7.5-7-7.5h-6v15zm26 5V5h20v5H84v5h12v5H84v5h14v5H78z"/></svg>`
  //   ),
  // },
  // {
  //   id: "neff",
  //   name: "Neff",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" fill="#1e293b"><path d="M5 25V5h6.5l13.5 13.5V5H30v20h-6.5L10 11.5V25H5zm31 0V5h20v4.5H41.5V13h13v4.5h-13V20.5H56V25H36zm25 0V5h20v4.5H66.5V13h13v4.5h-13V25H61zm25 0V5h20v4.5H91.5V13h13v4.5h-13V25H86z"/></svg>`
  //   ),
  // },
  // {
  //   id: "siemens",
  //   name: "Siemens",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 25" fill="#00646E"><path d="M12 7.5c0-2-1.7-3.5-4.5-3.5S3 5.3 3 7.5c0 4.5 9 3.5 9 8 0 2.5-2 4.5-5.5 4.5-4 0-6.5-2.5-6.5-5h3.5c0 1.5 1.5 2.5 3 2.5s2.5-1 2.5-2c0-4.5-9-3.5-9-8C0 2.5 3.5 0 7.5 0 12 0 15 2.5 15 5.5h-3zM20 0h4v20h-4V0zm10 0h12v3.5H34v4.5h7v3.5h-7v5h8.5V20H30V0zm20 0h4l4.5 12L63 0h4v20h-3.5V6.5L59 18.5h-2L52.5 6.5V20H49V0zm22 0h12v3.5H75v4.5h7v3.5h-7v5h8.5V20H71V0zm15 0h4l7.5 13.5V0H101v20h-3.5L90 6.5V20H86V0z"/></svg>`
  //   ),
  // },
  // {
  //   id: "zanussi",
  //   name: "Zanussi",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 25" fill="#1e293b"><path d="M0 20L12.5 4H0V0h18v4.5L5.5 20.5H18V25H0v-5zm24-20h5l10 25h-5.5l-2-5h-10l-2 5H24L34 0zm3.5 15.5h7L41 7.5h-.5l-3 8zM50 25V0h5l10.5 15.5V0H70v25h-4.5L55 9.5V25H50zm25 0V0h5v15c0 4 2.5 6 6 6s6-2 6-6V0h5v25h-5v-2.5c-2 2-4.5 3-7.5 3s-6.5-1.5-8.5-4.5z"/></svg>`
  //   ),
  // },
  // {
  //   id: "rangemaster",
  //   name: "Rangemaster",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 25" fill="#1e293b"><path d="M0 0h12c4.5 0 7.5 2 7.5 5.5 0 2.5-1.5 4.5-4 5.2L21 24h-5l-5-12.5H5V24H0V0zm5 4.5v7h7c2 0 3.5-1 3.5-3.5S14 4.5 12 4.5H5zm24 0h12v4H34v4.5h6v4h-6v7.5H29V4.5zm19-4.5h5l7 24h-5l-1.5-5.5h-7L45 24h-4.5L48 0zm2 5.5l-2.5 10h5L50 5.5z"/></svg>`
  //   ),
  // },
  // {
  //   id: "leisure",
  //   name: "Leisure",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 25" fill="#1e293b"><path d="M0 0h5v20h11v4H0V0zm20 0h16v4H25v6h10v4H25v6h11v4H20V0zm20 0h5v24h-5V0zm8 18c2 2.5 5 4 8.5 4 4 0 6.5-2 6.5-4.5 0-3-2.5-4.5-7-5.5l-2-.5c-4.5-1-7-3-7-6.5 0-4 3.5-7 8.5-7 4 0 7.5 1.5 9.5 4l-3 3c-1.5-2-4-3-6.5-3-2.5 0-4.5 1.5-4.5 3.5 0 2 1.5 3.5 5.5 4.5l2 .5c5 1 8 3 8 7 0 4.5-4 7.5-10 7.5-4.5 0-8.5-2-10.5-5l3.5-3.5z"/></svg>`
  //   ),
  // },
  // {
  //   id: "belling",
  //   name: "Belling",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 30" fill="#1e293b"><path d="M10 25C4.5 25 0 20.5 0 15S4.5 5 10 5c3.5 0 6.5 1.8 8.2 4.5l-4 2.3c-1-1.5-2.5-2.3-4.2-2.3-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5c1.7 0 3.2-.8 4.2-2.3l4 2.3C16.5 23.2 13.5 25 10 25zm12-20h4.5v20H22V5zm8 0h4.5v20H30V5zm8 0h4.5v20H38V5zm7 0h4.5v20H45V5zm7 0h4.5l8 13V5H69v20h-4.5l-8-13v13H52V5z"/></svg>`
  //   ),
  // },
  // {
  //   id: "fridgemaster",
  //   name: "Fridgemaster",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 25" fill="#1e293b"><path d="M0 0h14v3.5H4v6h8v3.5H4V20H0V0zm16 0h8c3 0 5 1.5 5 4 0 2-1.2 3.3-3 3.8L30 20h-4.5l-3.5-11.5H20V20h-4V0zm4 3.5v5h4c1 0 2-.8 2-2.5s-1-2.5-2-2.5h-4zM32 0h4v20h-4V0zm7 0h7c6 0 10 4 10 10s-4 10-10 10h-7V0zm4 3.5v13h3c4 0 6-2.5 6-6.5s-2-6.5-6-6.5h-3z"/></svg>`
  //   ),
  // },
  // {
  //   id: "hoover",
  //   name: "Hoover",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 30" fill="#D6001C"><path d="M0 0h8v11h14V0h8v30h-8V18H8v12H0V0zm44 15c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15zm8 0c0 4.4 3.1 7 7 7s7-2.6 7-7-3.1-7-7-7-7 2.6-7 7zm26 0c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15zm8 0c0 4.4 3.1 7 7 7s7-2.6 7-7-3.1-7-7-7-7 2.6-7 7z"/></svg>`
  //   ),
  // },
  // {
  //   id: "haier",
  //   name: "Haier",
  //   logo: svgToUri(
  //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" fill="#005A9C"><path d="M0 30V0h6v12h12V0h6v30h-6V17H6v13H0zm28-9c0-5.5 4.5-9 10-9s10 3.5 10 9v9h-6v-2.5c-1 1.8-2.8 2.8-5 2.8-4 0-7-2.8-7-6.3zm14 0c0-2.5-1.8-4-4-4s-4 1.5-4 4 1.8 4 4 4 4-1.5 4-4zm8-18h6v5h-6V3zm0 9h6v18h-6V12z"/></svg>`
  //   ),
  // },
];