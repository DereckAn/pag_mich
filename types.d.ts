export type Menu = {
  title: string;
  icon: string;
  path: string;
};

export type Category = {
  category: string;
};

export type Products = {
  id: number;
  name: string;
  category: string;
  image: StaticImageData;
  discount: number;
  stock: number;
  price: number;
  slug: string;
  description: string;
};

export type ProductSubset = Pick<Products, "name" | "price" | "image"> & {
  quantity: number;
};

export type ProvidersNames = "google" | "twitter" | "github" | "instagram";

export type InstagramMedia  = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export type drinkSliderType = {
  imageC: StaticImageData | string,
  imageR: StaticImageData | string,
  titulo: string,
  link: string,
  description: string,
  ingredients: string[],
  bgcolor: string
}