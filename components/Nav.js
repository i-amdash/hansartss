// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiShoppingBag,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import { IoIosShirt } from 'react-icons/io';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  
  { name: 'portfolio', path: '/portfolio', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'customise',
    path: '/customise',
    icon: <IoIosShirt />,
  },
  { name: 'shop', path: '/shop', icon: <HiShoppingBag /> },
];

import Link from 'next/link';

import { useRouter } from 'next/navigation';

const  Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen' >
    {/* {inner} */}
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link, index) => {
        return (
        <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
            <div className='bg-foreground relative flex text-secondary items-center p-[6px] rounded-[3px]'>
              <div className='text-[12px] capitalize leading-none font-semibold'>{link.name}</div>
              <div className='border-solid border-l-foreground  border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
            </div>
          </div>
          <div className='flex justify-center flex-col align-center items-center'>
          {link.icon}
          <div className='text-[10px] pt-[5px] xl:hidden capitalize leading-none font-semibold'>{link.name}</div>
          </div>
          </Link>
          );
      })}
    </div>
  </nav>
  );
};

export default Nav;
