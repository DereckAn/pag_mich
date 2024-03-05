import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainMenu = () => {
  const pathName = usePathname();
  return (
    <ul>
      <li>
        {routes.map((route, index) => (
          <Link href={route.path} key={route.path} className={cn("p-5 px-8")}>
            {route.name}
          </Link>
        ))}
      </li>
    </ul>
  );
};
