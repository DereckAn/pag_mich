import {
  balloons,
  building,
  comida11,
  facebook,
  food_cart,
  fruitbowl,
  instagram,
  tiktok,
  time,
  truk,
  wedding,
  whatsapp,
} from "./index";

// import { tiktok, facebook, whatsapp, instagram  } from "./index";

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
    name: "Whatsapp",
    icon: whatsapp,
    url: "https://twitter.com/",
  },
  {
    name: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/",
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
    lista: [
      "Choose from a variety of delicious meal combination options.",
      "Each serves 8-14 people, starting at $13.75 per person.*",
    ],
    link: "/menu",
    image: comida11,
  },
  {
    title: "MEAL COMBINATIONS",
    text: `Bundles designed to create the perfect combination for any occasion.`,
    lista: [
      "Choose from a variety of delicious meal combination options.",
      "Each serves 8-14 people, starting at $13.75 per person.*",
    ],
    link: "/menu",
    image: comida11,
  },
  {
    title: "MEAL COMBINATIONS",
    text: `Bundles designed to create the perfect combination for any occasion.`,
    lista: [
      "Choose from a variety of delicious meal combination options.",
      "Each serves 8-14 people, starting at $13.75 per person.*",
    ],
    link: "/menu",
    image: comida11,
  },
];

export const detailsCatering = [
  {
    image: food_cart,
    text: "$100 minimum on catering delivery orders",
    text2: "",
  },
  {
    image: time,
    text: "Order by 5 p.m. for next day lunch delivery",
    text2: "for orders within delivery area",
  },
  {
    image: truk,
    text: "10% delivery fee up to $500",
    text2: "then 5% for every dollar thereafter",
  },
  {
    image: fruitbowl,
    text: "Complimentary chafing kit",
    text2: "available upon request with delivery",
  },
];

export const frequentQuestions = [
  {
    question: "How do I place an order?",
    answer: `You can place an order online or by calling your local store. Find your store to see available catering options.`,
  },
  {
    question: "How much notice do you need for a catering order?",
    answer: `We recommend placing your order 24 hours in advance to ensure your desired delivery time and menu selection. However, same-day delivery is available in most areas.`,
  },
  {
    question: "Do you offer delivery for catering orders?",
    answer: `Yes, we offer delivery for catering orders. Delivery fees may apply.`,
  },
  {
    question: "Can I place a catering order for a future date?",
    answer: `Yes, you can place a catering order for a future date. Simply select your desired delivery date and time during checkout.`,
  },
  {
    question: "Do you offer setup and serving for catering orders?",
    answer: `Yes, we offer setup and serving for catering orders. Contact your local store for more information.`,
  },
  {
    question: "What is included in a catering order?",
    answer: `Catering orders include your choice of meal, a variety of sides, and any necessary serving utensils. Contact your local store for more information.`,
  },
  {
    question: "Do you offer vegetarian or gluten-free options?",
    answer: `Yes, we offer vegetarian and gluten-free options. Contact your local store for more information.`,
  },
  {
    question: "How do I pay for a catering order?",
    answer: `You can pay for a catering order online or in-store. We accept all major credit cards and cash.`,
  },
  {
    question: "Can I cancel or modify a catering order?",
    answer: `Yes, you can cancel or modify a catering order. Contact your local store for more information.`,
  },
  {
    question: "Do you offer catering for large groups?",
    answer: `Yes, we offer catering for large groups. Contact your local store for more information.`,
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contact" },
      { name: "Careers", url: "/careers" },
      { name: "Press", url: "/press" },
    ],
  },
  {
    title: "Ordering",
    links: [
      { name: "Order Now", url: "/ordernow" },
      { name: "Lookup Order", url: "/lookup-order" },
      { name: "Order History", url: "/order-history" },
      { name: "My Account", url: "/my-account" },
    ],
  },
  {
    title: "Menu",
    links: [
      { name: "Menu", url: "/menu" },
      { name: "Nutrition", url: "/nutrition" },
      { name: "Allergens", url: "/allergens" },
      { name: "Ingredients", url: "/ingredients" },
    ],
  },
];

export const orderCards = [
  {
    title: "Order Now",
    text: `¡Saborea la vida, un bocado a la vez! Haz tu pedido ahora y disfruta
    de la delicia en tu puerta.`,
    image: comida11,
    href: "/menu",
  },
  {
    title: "Delivery",
    text: `¡Saborea la vida, un bocado a la vez! Haz tu pedido ahora y disfruta
    de la delicia en tu puerta.`,
    image: comida11,
    href: "/menu",
  },
  {
    title: "Catering",
    text: `¡Saborea la vida, un bocado a la vez! Haz tu pedido ahora y disfruta
    de la delicia en tu puerta.`,
    image: comida11,
    href: "/catering",
  },
];
