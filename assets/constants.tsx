import { Category, Menu, ProvidersNames } from "@/types";
import {
  balloons,
  building,
  comida1,
  comida11,
  comida12,
  comida2,
  comida3,
  comida4,
  comida5,
  comida7,
  comida8,
  comida9,
  food_cart,
  fruitbowl,
  time,
  truk,
  wedding,
  drink1,
  drink2,
  drink3,
  drink4,
  drink5,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
} from "./index";

export const navmenu: Menu[] = [
  {
    title: "Home",
    path: "/",
    icon: "fi fi-br-home",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: "fi fi-rs-list",
  },
  {
    title: "Catering",
    path: "/catering",
    icon: "fi fi-sr-room-service",
  },
  {
    title: "Account",
    path: "/authentication",
    icon: "fi fi-rr-user-pen",
  },
];

export const socials = [
  {
    name: "TikTok",
    url: "https://www.tiktok.com/",
    icon: "fi fi-brands-tik-tok",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "fi fi-brands-instagram",
  },
  {
    name: "Whatsapp",
    url: "https://whatsapp.com/",
    icon: "fi fi-brands-whatsapp",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "fi fi-brands-facebook",
  },
];

export const drinkSlider = [
  {
    imageIngredients: ingredient1,
    imageDrink: drink1,
    titulo: "Jamaican Bird",
    link: "/",
    description:
      "Exotic and flavorful cocktail that combines tropical ingredients for a refreshing drink:",
    ingredients: ["Jigger jamaican", "Banana Liqueur", "Orange juice"],
  },
  {
    imageIngredients: ingredient2,
    imageDrink: drink2,
    titulo: "Blue Margaritas",
    link: "/",
    description:
      "A Blue Margarita is a vibrant, tropical twist on the classic margarita cocktail:",
    ingredients: ["Tequila", "Blue Curaçao", "Lime Juice"],
  },
  {
    imageIngredients: ingredient3,
    imageDrink: drink3,
    titulo: "Alcatraz Cocktail",
    link: "/",
    description:
      "A perfect for those who enjoy bold and flavorful drinks with a touch of sophistication:",
    ingredients: ["Orange", "Cointreau", "Rye whiskey"],
  },
  {
    imageIngredients: ingredient4,
    imageDrink: drink4,
    titulo: "Red Nail Cocktail",
    link: "/",
    description:
      "A sophisticated and striking drink known for its bold flavors and vibrant color:",
    ingredients: ["Vodka", "Campari", "Scotch whisky"],
  },
  {
    imageIngredients: ingredient5,
    imageDrink: drink5,
    titulo: "Blue Punch",
    link: "/",
    description:
      "A delightful and visually appealing drink, often served at baby showers or celebrations:",
    ingredients: ["Blueberry", "Light rum", "Triple sec"],
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
    text: "$75 minimum on catering delivery orders",
    text2: "",
  },
  {
    image: time,
    text: "Order with 24 hours before your event",
    text2: "Contact for exceptions",
  },
  {
    image: truk,
    text: "10% discount on orders up to $250",
    text2: "",
  },
  {
    image: fruitbowl,
    text: "Free delivery on orders over $100",
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

export const providers: { icon: string; name: ProvidersNames }[] = [
  {
    icon: "fi fi-brands-google",
    name: "google",
  },
  {
    icon: "fi fi-brands-twitter",
    name: "twitter",
  },
  {
    icon:"fi fi-brands-github",
    name: "github",
  },
  {
    icon:"fi fi-brands-instagram",
    name: "instagram",
  },
];

export const categories: Category[] = [
  {
    category: "Hamburguesas",
  },
  {
    category: "Pizzas",
  },
  {
    category: "Postres",
  },
  {
    category: "Bebidas",
  },
  {
    category: "Comida",
  },
  {
    category: "Desayunos",
  },
  {
    category: "Cenas",
  },
  {
    category: "Almuerzos",
  },
  {
    category: "Snacks",
  },
  {
    category: " rápida",
  },
  {
    category: " saludable",
  },
  {
    category: " chatarra",
  },
  {
    category: " casera",
  },
  {
    category: " gourmet",
  },
];
