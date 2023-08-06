import React from "react";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const SOCIAL_ITEMS = [
    {
      title: "Discord",
      icon: <FaDiscord />,
      href: "https://discord.gg/a4ZmHQRD",
    },
    {
      title: "Github",
      icon: <FiGithub />,
      href: "https://github.com/QuesoCaliente",
    },
  ];

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#040405]">
      <FooterSocial items={SOCIAL_ITEMS} />
      <MainFooter />
      <CopyrightFooter />
    </footer>
  );
}

interface IFooterSocial {
  items: ISocialItem[];
}

const FooterSocial = ({ items }: IFooterSocial) => {
  return (
    <div className="flex w-full items-center justify-center gap-2 p-2">
      {items.map((item) => (
        <SocialItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
};

interface ISocialItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}
const SocialItem = ({ icon, title, href }: ISocialItem) => {
  return (
    <a
      className="rounded-md bg-yellow-500 p-1 text-2xl text-[#0f0f13]  transition-all duration-300 ease-in-out hover:rounded-lg hover:bg-yellow-400 hover:text-black"
      title={title}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

const CopyrightFooter = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[rgb(0,0,0,.5)] p-2 text-white">
      <small>quesocaliente.dev © 2022 - Created with 💛</small>
    </div>
  );
};

const MainFooter = () => {
  return (
    <div className="flex justify-around p-2 text-white">
      <div className="flex flex-col  gap-1">
        <div className="pb-4 font-bold">Legal</div>
        <span className="text-gray-300">Términos y condiciones</span>
        <span className="text-gray-300">Política de privacidad</span>
        <span className="text-gray-300">Política de cookies</span>
      </div>
    </div>
  );
};
