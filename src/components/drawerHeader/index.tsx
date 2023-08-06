"use client";
import React, { useState } from "react";
import Drawer from "../drawer";
import { DrawerItems } from "../layout/const";
import Header from "../header";
import Footer from "../footer";

export const DrawerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-transparent w-full">
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} drawerItems={DrawerItems} />
      <div className="min-w-screen">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
