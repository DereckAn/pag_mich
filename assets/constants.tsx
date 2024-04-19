import { link } from "fs";
import {
  balloons,
  building,
  comida11,
  facebook,
  instagram,
  tiktok,
  wedding,
  whatsapp,
} from "./index";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Order Now",
    path: "/ordernow",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Catering",
    path: "/catering",
  },
  {
    name: "Account",
    path: "/auth",
  },
];

export const socials = [
  {
    name: "TikTok",
    icon: tiktok,
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: whatsapp,
    url: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    icon: facebook,
    url: "https://www.linkedin.com/",
  },
];

export const menuSection = [
  {
    name: "Coockies",
    path: "/",
    icon: "🍪",
  },
  {
    name: "Waffels",
    path: "/ordernow",
    icon: "🧇",
  },
  {
    name: "Pancakes",
    path: "/menu",
    icon: "🥞",
  },
  {
    name: "Smoothies",
    path: "/catering",
    icon: "🥤",
  },
  {
    name: "Bowls",
    path: "/login",
    icon: "🍲",
  },
];

export const cateringSection = [
  {
    title: "Business Catering",
    text: `Catering everyone will love, with convenient delivery and setup
    included, starting at $12 per person.*`,
    image: building,
    lista: ["Holiday Parties", "Office Meetings", "Employee Appreciation"],
  },
  {
    title: "Wedding Catering",
    text: `Celebrate life's special moments
    with a meal everyone will love.`,
    image: wedding,
    lista: [
      "Birthday",
      "Anniversary",
      "Family & Friends Gathering",
      "School Function",
    ],
  },
  {
    title: "Event Catering",
    text: `A once in a lifetime moment
    calls for an unforgettable meal.`,
    image: balloons,
    lista: ["Rehearsal Dinner", "Wedding", "Bridal Shower"],
  },
];


export const cateringMenu = [
  {
    title: "MEAL COMBINATIONS",
    text: `Bundles designed to create the perfect combination for any occasion.`,
    lista: [ "Choose from a variety of delicious meal combination options.",
    "Each serves 8-14 people, starting at $13.75 per person.*"],
    link: "/menu",
    image: comida11,
  },
  {
    title: "MEAL COMBINATIONS",
    text: `Bundles designed to create the perfect combination for any occasion.`,
    lista: [ "Choose from a variety of delicious meal combination options.",
    "Each serves 8-14 people, starting at $13.75 per person.*"],
    link: "/menu",
    image: comida11,
  },
  {
    title: "MEAL COMBINATIONS",
    text: `Bundles designed to create the perfect combination for any occasion.`,
    lista: [ "Choose from a variety of delicious meal combination options.",
    "Each serves 8-14 people, starting at $13.75 per person.*"],
    link: "/menu",
    image: comida11,
  },
];