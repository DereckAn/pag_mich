import { frequentQuestions } from "@/assets/constants";
import { Arrow } from "@/components/ui/arrow";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import "@/styles/catering-styles.css";

export const FrequentQuest = () => {
  return (
    <Container className="">
      <Title title="Frequent Questions" />
      <div className="mx-auto">
        {frequentQuestions.map((item) => (
          <div
            key={item.question}
            className="my-5 relative flex flex-col dropdown_list"
          >
            <input type="checkbox" className="dropdown_check absolute" />
            <h3 className="text-3xl font-bold flex">
              <Arrow />
              {item.question}
            </h3>
            <div className="dropdown_content ">
              <p className="text-lg max-w-xl ">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
