"use client";
import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
export interface ICard {
  tag: Tag;
  description: string;
  href: string;
  github: string;
  image: string;
}
type Tag =
  | "React"
  | "Html"
  | "Css"
  | "Javascript"
  | "Nextjs"
  | "Design"
  | "Python";

export default function Card({ tag, description, href, github, image }: ICard) {
  return (
    <motion.div
      layout
      transition={{ duration: 2 }}
      className="text-white shadow-md"
    >
      <div className="relative h-[250px]">
        <Image
          className="object-cover object-center"
          fill
          alt="Anime"
          src={image}
        />
        <span className="pointer-events-none absolute top-1 right-1 rounded-md bg-gray-500 p-1 text-sm font-semibold">
          {tag}
        </span>
        <a
          className="absolute top-0 left-0  bg-yellow-600 p-1  text-2xl transition-colors duration-300 ease-out hover:bg-yellow-500 hover:opacity-100"
          href={github}
        >
          <AiFillGithub />
        </a>
        <a
          className="absolute bottom-1 right-1 bg-yellow-600 p-1 text-2xl transition-colors duration-300 ease-out hover:bg-yellow-500"
          href={href}
        >
          <BiLinkExternal />
        </a>
      </div>
      <div className="bg-white p-5 text-gray-700">
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
