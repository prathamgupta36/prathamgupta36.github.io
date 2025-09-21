import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";


export const projects: Project[] = [
  {
    name: "CTF Archive",
    description:
      "This is the world's largest comprehensive collection of challenges from past CTF competitions. The challenges are stored with REHOST details and can be run on pwn.college website.",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/ctf-archive.png",
    url: "https://pwn.college/ctf-archive/",
    githubRepository: "pwncollege/ctf-archive",
  },
  {
    name: "NASA's Astro Academy",
    description:
      "This project seeks to create an engaging online educational game inspired by NASA's groundbreaking Psyche Mission, a remarkable space exploration endeavor.",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/astro-academy.png",
    url: "https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/web-game-astro-academy-asu/",
    githubRepository: "MissionToPsyche/tungsten_12g_web_game",
  },
  {
    name: "Quantum Supremacy",
    description:
      "This is a quantum computing game designed to help players get an intuition for gate-model quantum computing, quantum entanglement, and measurement!",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/quantum-supremacy.png",
    url: "https://github.com/iQuHACK/2021_Team-47",
  },
  {
    name: "C++ Parsing Compiler",
    description:
      "Developed the compiler to work efficiently by making recursive calls to various functions according to the grammar of the language that was being compiled.",
    image: "https://www.svgrepo.com/show/78134/c-logo.svg",
    url: "",
  },
];

export const skills: Skill = {
  "Programming Languages": [
    { name: "Python", icon: "python-plain" },
    { name: "Java", icon: "java-plain" },
    { name: "C/C++", icon: "cplusplus-plain" },
    { name: "C#", icon: "csharp-plain" },
    { name: "Swift", icon: "swift-plain" },
    { name: "R", icon: "/icons/r.svg" },
    { name: "Q#", icon: "/icons/qsharp.svg" },         // Microsoft Q#
    // { name: "Scheme", icon: "/icons/racket.svg" },     // or scheme.svg if you prefer
    // { name: "Prolog", icon: "/icons/swipl.png" },
    { name: "Verilog", icon: "/icons/verilog.svg" },
  ],
  "Databases, Applications, and OS": [
    { name: "Linux", icon: "linux-plain" },
    { name: "Windows", icon: "windows8-original" },
    { name: "macOS", icon: "apple-original" },
    { name: "Git", icon: "git-plain" },
    { name: "Github", icon: "github-original" },
    { name: "SQL", icon: "mysql-plain" }, // or "sql.svg" / "postgresql-plain" if you want generic/specific
    { name: "Jupyter", icon: "jupyter-plain" },
    { name: "PyTorch", icon: "pytorch-original" },
    { name: "TensorFlow", icon: "tensorflow-original" },
  ],
  "Quantum (frameworks & SDKs)": [
  { name: "Qiskit", icon: "/icons/qiskit.svg" },
  { name: "Cirq", icon: "/icons/cirq.svg" },
  { name: "Microsoft Quantum Development Kit", icon: "/icons/qdk.svg" },
  ],
  "Reverse engineering & binary analysis": [
    { name: "IDA", icon: "/icons/ida-pro.png" },     // Hex-Rays / IDA
    { name: "Ghidra", icon: "/icons/ghidra.svg" },   // Ghidra project logo
    { name: "Angr", icon: "/icons/angry_face.png" },       // angr project logo
  ],
  "Cloud and Cluster Computing": [
    { name: "Google Cloud", icon: "googlecloud-plain" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Model Context Protocol", icon: "/icons/model-context-protocol.svg" }, // custom or generic icon
  ],
};