import About from "@/components/about";
import CardList from "@/components/cardList";
import Contact from "@/components/contact";
import SkillList from "@/components/skillList";
import { projects } from "@/utils/projects";
import Image from "next/image";
import { FaReact, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const skills = [
  {
    title: "React",
    children: <FaReact />,
  },
  {
    title: "NextJS",
    children: <SiNextdotjs />,
  },
  {
    title: "CSS",
    children: <FaCss3Alt />,
  },
  {
    title: "NodeJS",
    children: <FaNodeJs />,
  },
  {
    title: "Python",
    children: <FaPython />,
  },
];

export default function Home() {
  return (
    <>
      <About />
      <CardList title="Projectos" items={projects} />
      <SkillList title={"Habilidades"} items={skills} />
      <Contact />
    </>
  );
}
