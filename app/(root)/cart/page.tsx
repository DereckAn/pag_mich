import { fetchReviews } from "@/actions/reviews";
import { InstagramMedia } from "@/types";
import Image from "next/image";

const Cart = async () => {
  const media = await fetchReviews();
  return (
    <div className="w-full h-screen text-primary">
      <h1>Cart</h1>
      {media.map((item: InstagramMedia) => (
        <div key={item.id}>
          <Image
            src={item.media_url}
            alt={item.caption}
            width={200}
            height={200}
          />
          <p>{item.caption}</p>
          <a href={item.permalink} target="_blank" rel="noopener noreferrer">
            Ver en Instagram
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cart;
