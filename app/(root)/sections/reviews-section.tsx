import { fetchReviews } from "@/actions/reviews";
import { FlipCard } from "@/components/ui/flip-card";
import { InstagramMedia } from "@/types";

export const ReviewSection = async () => {
  const media = await fetchReviews();
  return (
    <section
      className={`flex flex-wrap relative w-[100vw] items-center justify-center py-4 gap-2`}
    >
      {media.slice(0, 10).map((item: InstagramMedia) => (
        <FlipCard item={item} key={item.id} />
      ))}
    </section>
  );
};
