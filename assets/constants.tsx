import {instagram, linkedin, tiktok, twitter} from "./index";

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
    name: "Login",
    path: "/login",
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
    icon: twitter,
    url: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
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
