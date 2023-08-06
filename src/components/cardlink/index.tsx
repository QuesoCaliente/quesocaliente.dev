import React from "react";
import Image from "next/image";
import cardlinkbg from "../../../public/glasses.jpg";

interface ICardLink {
  title: string;
  message: string;
  href: string;
}

export default function CardLink({ title, message, href }: ICardLink) {
  return (
    <a
      target="_blank"
      className=" w-ful relative block overflow-hidden rounded-lg font-bold text-gray-700"
      href={href}
      rel="noreferrer"
    >
      <Image
        className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform object-cover"
        alt="cover card link"
        src={cardlinkbg}
      />
      <div className="relative flex w-full flex-col items-center justify-start bg-gradient-to-r from-yellow-100">
        <div className="py-7 font-bold">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-md">{message}</p>
        </div>
      </div>
    </a>
  );
}
