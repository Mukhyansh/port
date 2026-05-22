import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiMysql, SiC, SiCplusplus,SiRaylib } from "react-icons/si";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { DiJava, DiDocker} from "react-icons/di";
import { MdJavascript } from "react-icons/md";

export const nodes = [
  { id: "Me", group: "root" },
  { id: "Raylib", group: "tech"},
  { id: "Frontend", group: "category" },
  { id: "React", group: "tech" },
  { id: "NextJS", group: "tech" },
  { id: "Backend", group: "category" },
  { id: "Node.js", group: "tech" },
  { id: "Express", group: "tech" },
  { id: "Database", group: "category" },
  { id: "MySQL", group: "tech" },
  { id: "PostGreSQL", group: "tech" },
  { id: "MongoDB", group: "tech" },
  { id: "DevOps", group: "category" },
  { id: "Git", group: "tech" },
  { id: "Docker", group: "tech" },
  { id: "Selenium", group: "tech" },
  { id: "Language", group: "category" },
  { id: "C++", group: "tech" },
  { id: "JavaScript", group: "tech" },
  { id: "C", group: "tech" },
  { id: "Java", group: "tech" },
];


export const links = [
  { source: "Me", target: "Frontend" },
  { source: "Me", target: "Backend" },
  { source: "Me", target: "Database" },
  { source: "Me", target: "DevOps" },
  { source: "Me", target: "Language" },

  { source: "Frontend", target: "Raylib"},
  { source: "Frontend", target: "React" },
  { source: "Frontend", target: "NextJS" },

  { source: "Backend", target: "Node.js" },
  { source: "Backend", target: "Express" },

  { source: "Database", target: "MySQL" },
  { source: "Database", target: "PostGreSQL" },
  { source: "Database", target: "MongoDB" },

  { source: "DevOps", target: "Git" },
  { source: "DevOps", target: "Docker" },

  { source: "Language", target: "C++" },
  { source: "Language", target: "JavaScript" },
  { source: "Language", target: "C" },
  { source: "Language", target: "Java" },
];

export const techIcons = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "MySQL": SiMysql,
  "PostGreSQL": SiPostgresql,
  "C++": SiCplusplus,
  "JavaScript": MdJavascript,
  "Java": DiJava,
  "C": SiC,
  "Git": FaGit,
  "Docker": DiDocker,
  "MongoDB": TbBrandMongodb,
  "NextJS": TbBrandNextjs,
  "Raylib": SiRaylib,
};