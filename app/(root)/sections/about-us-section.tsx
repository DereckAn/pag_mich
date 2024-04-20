import { bebidas } from "@/assets";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-center items-center px-10 ">
      <div className=" rounded-3x sm:w-3/4 md:w-2/4 px-2 sm:px-0">
        <Image
          src={bebidas}
          alt="hero image"
          className="rounded-3xl object-cover "
          placeholder="blur"
        />
      </div>
      <div className="sm:w-3/4 md:w-2/4 space-y-5 flex flex-col justify-center items-center px-2 sm:px-0 ">
        <div className="space-y-5">
          <Title
            className="text-4xl tracking-wider text-start"
            title="A Brief Story About Us"
          />
          <p className="font-light max-w-xl">
            We started our cleaning business in the early 20s in Provo, UT; our
            first job was carpet cleaning. Then, we found that companies were
            seeking better cleaning quality, so we added cleaning and janitorial
            services to our portfolio. But since then, we&apos;ve been able to
            serve property management companies, Airbnbs, and Student housing.
            First, we wanted to deliver results that exceeded our client&apos;s
            expectations. We have known since the beginning that customer
            success is always our success, so we are committed to quality and
            responsibility. We always promise quality, reliable cleaning service
            so our loyal customers feel special. We work hard to be the best.
            Our products are high-quality and safe. And we focus on the details
            so you have a clean, orderly home or office every time.
          </p>
        <div className="flex justify-start">
          <Link className=" underline hover:text-blue-600" href={"./aboutus"}>
            VIEW MORE
          </Link>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
