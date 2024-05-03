import { routes, socials } from "@/assets/constants";
import Link from "next/link";

export const FooterX = () => {
  return (
    <div className="bg-primary w-full p-8">
      <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
        <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Protein House</h1>
          <p className=" text-justify">
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias
            desde el año 1500, cuando un impresor (N. del T. persona que se
            dedica a la imprenta) desconocido usó una galería de textos y los
            mezcló de tal manera que logró hacer un libro de textos especimen.
          </p>
        </div>
        <div className="md:col-span-4 xl:col-span-2">
          <h2 className="font-bold mb-6 uppercase">Menu</h2>
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="hover:underline"
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Social Media</h2>
          <nav>
            {socials.map((social) => {
              const IconComponent = social.iconComponent;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="group flex items-center gap-2 hover:bg-vainilla p-2 rounded-lg transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    style={{ color: "#F5ECD7" }}
                    className="group-hover:text-primary"
                  >
                    <IconComponent size={22} className="group-hover:text-primary"/>
                  </span>
                  <span className="group-hover:text-primary">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Contact</h2>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Provo, UT
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              proteinhouse@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              (+1) 801 - 472 - 3664
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <a
          href="https://dereckan.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-center md:text-left">
            &copy; {new Date().getFullYear()}
            <span className="font-bold">D.A. Dev.</span> All rights reserved.
          </p>
        </a>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="/" className=" hover:text-gray-900 transition-colors">
            Terminos y condiciones
          </a>
          <span className="hidden md:flex">|</span>
          <a href="/" className=" hover:text-gray-900 transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>
    </div>
  );
};
