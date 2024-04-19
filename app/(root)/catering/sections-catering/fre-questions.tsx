import { frequentQuestions } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";

export const FrequentQuest = () => {
  return (
    <Container className="border-2 border-primary">
      <Title title="Frequent Questions" />
      <div className="mx-auto">
        {frequentQuestions.map((item, index) => (
          <div key={index} className="my-5">
            <h3 className="text-3xl font-bold">{item.question}</h3>
            <p className="text-lg max-w-xl">{item.answer}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
