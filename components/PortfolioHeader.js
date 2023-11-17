import Image from "next/image";

import Link from "next/link";

import Socials from './Socials';
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
  <header className="absolute z-9 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
        <Link href={'/'}>
        <h2 className="h3">Hans <span className="text-accent"> Artss</span></h2>
          {/* <Image src={'/logo.svg'} alt="" width={220} height={48} priority={true}/> */}
        </Link>
        <div className="flex flex-row gap-x-4" >
        <ThemeToggle />
        <Socials />
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
