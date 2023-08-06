import React, { useState } from "react";
import Drawer from "../drawer";
import Footer from "../footer";
import Header from "../header";
import { DrawerItems } from "./const";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-transparent">
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} drawerItems={DrawerItems} />
      <div className={["w-screen"].join(" ")}>
        <div className="min-w-screen">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
