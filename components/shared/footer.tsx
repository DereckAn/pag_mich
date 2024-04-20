import { footerLinks } from "@/assets/constants";

export const Footer = () => {
  return (
    <section className="bg-primary text-vainilla flex flex-col p-20 space-y-10">
      <div className="basis-2/3 flex sm:flex-row flex-col w-full items-center justify-around gap-3">
        {footerLinks.map((item) => (
            
          <div key={item.title} className=" w-full sm:basis-1/3 text-center space-y-2">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <ul>
              {item.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
            <hr/>
          </div>
        ))}
      </div>
      <a
        href="https://portafolio-2023-iota.vercel.app/"
        className="text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        © {new Date().getFullYear()} Dereck Angeles | All rights reserved
      </a>
    </section>
  );
};
