"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "@/context/LanguageContext";
import LangToggle from "./LangToggle";

const links = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center">
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-accent text-xl capitalize hover:text-[#E6D2C0] hover:border-[#E6D2C0] transition-all`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <div className="mt-4">
            <LangToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
