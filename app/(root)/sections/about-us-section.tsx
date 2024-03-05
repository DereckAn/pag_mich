import { bebidas } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="flex gap-6 flex-col md:flex-row items-center justify-center bg-primary">
      <div className=" flex rounded-3xl w-96 border-fourth border-4 basis-1/2">
        <Image
          src={bebidas}
          alt="hero image"
          className="rounded-3xl w-[50rem] "
          sizes="100%"
          // priority={true}
          placeholder="blur"
        />
      </div>
      <div className="max-w-md space-y-5 flex flex-col justify-center text-gold border-4 border-red-800 basis-2/4">
        <h2 className="text-4xl tracking-wider">A Brief Story About Us</h2>
        <p className="font-light  ">
          We started our cleaning business in the early 20s in Provo, UT; our
          first job was carpet cleaning. Then, we found that companies were
          seeking better cleaning quality, so we added cleaning and janitorial
          services to our portfolio. But since then, we&apos;ve been able to
          serve property management companies, Airbnbs, and Student housing.
          First, we wanted to deliver results that exceeded our client&apos;s
          expectations. We have known since the beginning that customer success
          is always our success, so we are committed to quality and
          responsibility. We always promise quality, reliable cleaning service
          so our loyal customers feel special. We work hard to be the best. Our
          products are high-quality and safe. And we focus on the details so you
          have a clean, orderly home or office every time.
        </p>
        <div className="flex justify-start">
          <Link className=" underline hover:text-blue-600" href={"./aboutus"}>
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
