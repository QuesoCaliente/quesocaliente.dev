import React from "react";
import { BiArrowToLeft } from "react-icons/bi";
import CardLink from "../cardlink";
import { usePathname, useRouter } from "next/navigation";

interface IDrawer {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerItems: IMenuItem[];
}

export interface IMenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  active?: boolean;
}

export default function Drawer({ isOpen, setIsOpen, drawerItems }: IDrawer) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={[
          "fixed top-0 left-0 bottom-0 z-10  h-full w-full bg-[#1f1f1f] text-white transition-transform duration-500 sm:w-[250px]",
          `${!isOpen && "translate-x-[-100%]"}`,
        ].join(" ")}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-end p-5"
        >
          <BiArrowToLeft className="cursor-pointer" size={"30px"} />
        </div>
        <div className="px-5 py-3">
          <CardLink
            title="Buy me a coffe"
            message="quesocaliente"
            href="https://ko-fi.com/quesocaliente"
          />
        </div>
        <nav>
          {drawerItems.map((item, index) => (
            <DrawerItem
              key={index}
              title={item.title}
              path={item.path}
              icon={item.icon}
              active={pathname === item.path}
            />
          ))}
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-0 left-[250px] z-20  min-h-screen w-full bg-black opacity-0"
        ></div>
      )}
    </>
  );
}

function DrawerItem({ title, icon, path, active }: IMenuItem) {
  return (
    <div
      className={`group ml-3 mt-2 flex cursor-pointer items-center justify-start gap-3 rounded-tl-lg rounded-bl-lg py-3 px-3 ${
        active ? "bg-activeMenu" : undefined
      } `}
    >
      <div
        className={` flex ${
          active ? "text-yellow-500" : undefined
        }  items-center justify-center  text-iconMenu group-hover:text-yellow-500`}
      >
        {icon}
      </div>
      <span className={`text-slate-200 group-hover:text-slate-100`}>
        {title}
      </span>
    </div>
  );
}
