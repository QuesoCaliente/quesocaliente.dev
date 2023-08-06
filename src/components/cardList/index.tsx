import React from "react";
import Card, { ICard } from "../card";

interface ICardList {
  title: string;
  items: ICard[];
}

export default function CardList({ title, items }: ICardList) {
  return (
    <section className="bg-gray-50">
      <div className="mx-10 flex max-w-screen-xl flex-col justify-center xl:mx-auto">
        <h2 className="my-10 text-center text-2xl font-normal text-gray-700 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="grid justify-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.length > 0 ? (
            items
              .slice(0, 3)
              .map((item, idx) => (
                <Card
                  key={idx}
                  image={item.image}
                  href={item.href}
                  github={item.github}
                  description={item.description}
                  tag={item.tag}
                />
              ))
          ) : (
            <span>No Hay información que mostrar</span>
          )}
        </div>
        <div className="flex justify-center py-5">
          <button
            disabled
            className="w-full bg-gray-700 py-2 text-white disabled:cursor-not-allowed disabled:bg-slate-200 md:w-auto md:px-60"
          >
            More
          </button>
        </div>
      </div>
    </section>
  );
}
