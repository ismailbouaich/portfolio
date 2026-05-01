"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const links = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-[#E6D2C0] hover:border-[#E6D2C0] transition-all`}
        >
          {t(`nav.${link.key}`)}
        </Link>
      ))}
    </nav>
  );
};
