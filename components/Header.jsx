
import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return(
  <header className="py-4 xl:py-6 text-black">
    <div className="container mx-auto flex justify-between items-center ">
        {/*Logo*/}
        <Link href="/">
            <h1 className="text-4xL font-semibold">
            <Image
                            src="/assets/Logo.png"
                            alt="Logo"
                            width={110}
                            height={100}
                            className="mx-auto"
                        />
            </h1>
        </Link>
        {/*desktop nav */}
        <div className="hidden xl:flex items-center gap-8 ">
            <Nav />
            <Link href="/contact">
                <Button className="hover:bg-[#E6D2C0] hover:text-accent">
                    Hire Me
                </Button>
            </Link>
        </div>

        {/* mobile nav*/}

        <div className="xl:hidden">
           <MobileNav/>
        </div>
    </div>
  </header>
);
  
}
export default Header