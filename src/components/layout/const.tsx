import { IMenuItem } from "../drawer";
import { FaHome, FaInfo } from "react-icons/fa";

export const DrawerItems: IMenuItem[] = [
  {
    title: "Inicio",
    icon: <FaHome />,
    path: "/",
  },
  {
    title: "About",
    icon: <FaInfo />,
    path: "/about",
  },
];
