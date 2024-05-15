import { products } from "@/assets/dummydb";

export const MiniCart = () => {
  return (
    <ul>
      {products[3].products?.map((product) => (
        <li key={product.id} className="bg-vainilla border-2 text-black">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stars}</p>
        </li>
      ))}
    </ul>
  );
};
