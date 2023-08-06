`use client`;

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaCheese } from "react-icons/fa";
import ParticlesBackground from "../particle";
import Image from "next/image";
import i18next from "i18next";

interface IHeader {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isOpen, setIsOpen }: IHeader) {
  return (
    <header className="flex w-full flex-col items-center bg-[#1a1a1a] text-white">
      {/* Main Header */}

      <div className="flex h-16 w-full items-center justify-between px-5">
        <div
          className="cursor-pointer drop-shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiMenuAltLeft size={"30px"} />
        </div>
      </div>
      <div className="flex h-[330px] w-full items-center justify-center overflow-hidden">
        <Link
          className="flex flex-col items-center text-3xl drop-shadow-lg"
          href="/"
        >
          <Image
            alt="quesocaliente.dev"
            width={30}
            height={30}
            src={"/images/logo.png"}
          />
          <span className="text-xl">quesocaliente.dev</span>
        </Link>
      </div>
    </header>
  );
}

const TranslationButton = () => {
  const [language, setLanguage] = useState("en");

  // useEffect(() => {
  //   i18next.changeLanguage(language);
  // }, [language]);

  const changeLanguage = (lng: string) => {
    if (lng === "es") {
      setLanguage("es");
    } else if (lng === "en") {
      setLanguage("en");
    }
  };

  return (
    <button
      onClick={() =>
        language === "en" ? changeLanguage("es") : changeLanguage("en")
      }
    >
      <Image
        width={30}
        height={20}
        alt={language === "es" ? "English" : "Español"}
        title={language === "es" ? "English" : "Español"}
        src={`/images/translations/${language === "es" ? "us" : "es"}.svg`}
      />
    </button>
  );
};
