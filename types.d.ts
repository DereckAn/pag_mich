export type Menu = {
  title: string;
  icon: string;
  path: string;
};

export type Category = {
  category: string;
};

export type Products = {
  name: string;
  category: string;
  image: StaticImageData;
  discount: number;
  stock: number;
  price: number;
  description: string;
};

export type ProductSubset = Pick<Products, "name" | "price" | "image"> & {
  quantity: number;
};

export type ProvidersNames = "google" | "twitter" | "github" | "instagram";
