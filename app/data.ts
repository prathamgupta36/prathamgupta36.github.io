import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const projects: Project[] = [
  {
    name: "CTF Archive",
    description:
      "This is the world's largest comprehensive collection of challenges from past CTF competitions. The challenges are stored with REHOST details and can be run on pwn.college website.",
    image: "https://raw.githubusercontent.com/prathamgupta36/guptapratham.com/main/public/images/projects/ctf-archive.png",
    url: "https://pwn.college/ctf-archive/",
    githubRepository: "pwncollege/ctf-archive",
  },
  {
    name: "NASA's Astro Academy",
    description:
      "This project seeks to create an engaging online educational game inspired by NASA's groundbreaking Psyche Mission, a remarkable space exploration endeavor.",
    image: "https://raw.githubusercontent.com/prathamgupta36/guptapratham.com/main/public/images/projects/astro-academy.png",
    url: "https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/web-game-astro-academy-asu/",
    githubRepository: "MissionToPsyche/tungsten_12g_web_game",
  },
  {
    name: "Quantum Supremacy",
    description:
      "This is a quantum mechanics game is designed to help players get an intuition for gate-model quantum computing, quantum entanglement, and measurement!",
    image: "https://raw.githubusercontent.com/prathamgupta36/guptapratham.com/main/public/images/projects/quantum-supremacy.png",
    url: "iQuHACK/2021_Team-47",
  },
];

export const skills: Skill = {
  "Programming Languages": [
    { name: "Python", icon: "python-plain" },
    { name: "Java", icon: "java-plain" },
    { name: "C/C++", icon: "cplusplus-plain" },
    { name: "C#", icon: "csharp-plain" },
    { name: "Swift", icon: "swift-plain" },
    { name: "R", icon: "r-original" },
    { name: "Qiskit", icon: "devicon-plain" }, // Generic icon
    { name: "Cirq", icon: "devicon-plain" }, // Generic icon
    { name: "Q#", icon: "devicon-plain" }, // Generic icon
    { name: "Scheme", icon: "devicon-plain" }, // Generic icon
    { name: "Prolog", icon: "devicon-plain" }, // Generic icon
    { name: "Verilog", icon: "devicon-plain" }, // Generic icon
  ],
  "Databases, Applications, and OS": [
    { name: "Linux", icon: "linux-plain" },
    { name: "Windows", icon: "windows8-original" },
    { name: "macOS", icon: "apple-original" },
    { name: "Git", icon: "git-plain" },
    { name: "Github", icon: "github-original" },
    { name: "SQL", icon: "mysql-plain" },
    { name: "Jupyter", icon: "jupyter-plain" },
    { name: "PyTorch", icon: "pytorch-original" },
    { name: "TensorFlow", icon: "tensorflow-original" },
    { name: "IDA", icon: "devicon-plain" }, // Generic icon
    { name: "Ghidra", icon: "devicon-plain" }, // Generic icon
    { name: "Angr", icon: "devicon-plain" }, // Generic icon
  ],
  "Cloud and Cluster Computing": [
    { name: "Google Cloud", icon: "googlecloud-plain" },
    { name: "AWS", icon: "amazonwebservices-original" },
    { name: "ML Model Server", icon: "devicon-plain" }, // Generic icon
  ],
};