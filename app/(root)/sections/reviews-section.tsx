import { fetchReviews } from "@/actions/reviews";
import { FlipCard } from "@/components/ui/flip-card";
import { InstagramMedia } from "@/types";

export const ReviewSection = async () => {
  const media = await fetchReviews();
  // console.log(media);
  return (
    <section className={`flex flex-wrap relative w-[100vw] items-center justify-center py-4 gap-2`}>
      {media.slice(0, 10).map((item: InstagramMedia) => (
        <FlipCard
          description={item.caption}
          image={item.media_url}
          link={item.permalink}
          key={item.id}
        />
      ))}
    </section>
  );
};
