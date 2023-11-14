import Link from "next/link";

import { RiYoutubeLine, RiInstagramLine, RiTwitterLine, RiFacebookBoxLine, RiLinkedinLine} from 'react-icons/ri'


export const socialData = [
  // { name: 'youtube', path: '/', icon: <RiYoutubeLine /> },
  { name: 'instagram', path: 'https://www.instagram.com/hansartss/', icon: <RiInstagramLine /> },
  // { name: 'twitter', path: '/services', icon: <RiTwitterLine /> },
  { name: 'facebook', path: 'https://www.facebook.com/profile.php?id=100070080644346', icon: <RiFacebookBoxLine /> },
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/in/hansel-pam-795176193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    icon: <RiLinkedinLine />,
  },
];
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    {socialData.map((link, index) => {
     return <Link href={link.path} target="_blank" className="hover:text-accent transition-all duration-300" key={index}>{link.icon}</Link>
    })}
  </div>;
};

export default Socials;
