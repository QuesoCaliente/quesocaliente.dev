import React from "react";
import Skill, { ISkill } from "../skill";

interface ISkillList {
  title: string;
  items: ISkill[];
}

export default function SkillList({ title, items }: ISkillList) {
  return (
    <div className="mx-auto my-10 flex max-w-screen-lg flex-col items-center justify-center">
      <h2 className="my-10 text-center text-2xl font-normal text-gray-700 md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <Skill title={item.title} key={item.title}>
              {item.children}
            </Skill>
          ))
        ) : (
          <span>No Hay información que mostrar</span>
        )}
      </div>
    </div>
  );
}
