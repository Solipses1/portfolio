"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const routes = [
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex items-center justify-between h-14 px-3 sm:px-9">
      <div className="flex">
        {activePathname !== "/" && (
          <Logo />
        )}
      </div>
      <nav className="h-full">
        <ul className="flex gap-x-10 text-m h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx(
                "hover:text-white flex items-center transition relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
                {
                  " text-white": activePathname === route.path,
                  " text-white/75": activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathname === route.path && (
                <motion.div
                  layoutId="header-nav-active"
                  className="bg-yellow-300 h-1 w-full absolute bottom-2"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
