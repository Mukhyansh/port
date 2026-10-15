import portfolio from "../assets/projects/portfolio.png";
import EtchASketch from "../assets/projects/EtchASketch.png";
import Visualizer from "../assets/projects/Visualizer.png";
import tlib from "../assets/projects/tlib.png";
import DFT from "../assets/projects/DFT.png";
import LOL from "../assets/projects/AUSS.png";
export const projects = [
  {
    title: "AUSS",
    description: "An Adaptive User Space Scheduler which trains a ML model and creates Scheduling policies accordingly.",
    image : LOL,
    imageALT : "AUSS",
    technologies: ["C","Python","Linux","Pandas","PostgreSQL","Scikit-Learn","/proc"],
    github: "https://github.com/Mukhyansh/AUSS"
  },
  {
    title: "Distributed File Transfer System",
    description: "A Distrbuted File Transfer System with self implemented file compressor.",
    image: DFT,
    imageAlt: "FileTransfer",
    technologies: ["C", "Socket.io", "VsCode", "LZW algorithm", "TCP", "Networking concepts"],
    github: "https://github.com/Mukhyansh/Distributed_File_Transfer"
  },
  {
    title: "Thread Library",
    href: "https://github.com/Mukhyansh/ThreadLibrary",
    description: "Built a Cooperative User-Level Thread Library purely in C with context switching library ucontext",
    image: tlib,
    imageAlt: "Thread Library",
    technologies: ["C", "ucontext", "Context Switching", "Multithreading", "RoundRobin"],
    github: "https://github.com/Mukhyansh/ThreadLibrary"
  },
  {
    title: "Visualizer",
    href: "https://mukhyansh.github.io/Visualizer/",
    description: "Built a Sorting-Searching algorithm Visualizer using HTML,CSS and JAVASCRIPT",
    image: Visualizer,
    imageAlt: "Visualizer",
    technologies: ["HTML","CSS","Javascript","VsCode","Github"],
    github: "https://github.com/Mukhyansh/Visualizer"
  },  
  {
    title: "EtchASketch",
    href: "https://mukhyansh.github.io/EtchASketch/",
    description: "An easy-to-use mini sketch book made using javascipt.",
    image: EtchASketch,
    imageAlt: "FileStorage",
    technologies: ["Javascript", "HTML", "CSS", "Github"],
    github: "https://github.com/Mukhyansh/EtchASketch"
  },
  {
    title: "Personal Landing Page",
    href: "/",
    description: "A sleek, interactive portfolio website with GSAP animations.",
    image: portfolio,
    imageAlt: "Personal portfolio website",
    technologies: ["React", "Next.js", "GSAP", "TailwindCSS"],
    github: "https://github.com/Mukhyansh/port"
  },
]; 