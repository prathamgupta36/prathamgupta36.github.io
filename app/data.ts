import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";
import { Achievement } from "@/types/achievement.type";

export const communityProjects: Project[] = [
  {
    name: "Kenya Rainwater Harvesting w/ Engineers Without Borders",
    description:
      "Lead the designing and development of gutter as well as filtration systems for clean water in Naki, Kenya. The project provided a rainwater harvesting system storing 20,000 gallons of water for year round supply.",
    image: "https://epics.engineering.asu.edu/wp-content/uploads/sites/20/2025/03/GlobalEPICS-Artwork-2022-Black-copy-1-1.jpg",
    imageAlt:
      "Engineers Without Borders Kenya rainwater harvesting project supporting clean water infrastructure in Naki, Kenya",
    url: "https://epics.engineering.asu.edu/2020/09/ewb-international/",
    linkAriaLabel:
      "Learn more about the Kenya Rainwater Harvesting project with Engineers Without Borders",
  },
  {
    name: "Nepal Pyrolyzer",
    description:
      "Created biochar production in Nepal by enhancing kiln-based pyrolysis for high temperatures and cost-efficiency. Provided communities with sustainable energy solutions and elevating agricultural yields.",
    url: "https://epics.engineering.asu.edu/2020/09/nepal-pyrolyzer/",
    linkAriaLabel: "Learn more about the Nepal Pyrolyzer sustainability project",
  },
];

export const projects: Project[] = [
  {
    name: "CTF Archive",
    description:
      "This is the world's largest comprehensive collection of challenges from past CTF competitions. The challenges are stored with REHOST details and can be run on pwn.college website.",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/ctf-archive.png",
    imageAlt:
      "CTF Archive project collecting cybersecurity competition challenges for CTF practice and LLM vulnerability research",
    url: "https://pwn.college/ctf-archive/",
    githubRepository: "pwncollege/ctf-archive",
    linkAriaLabel:
      "Learn more about the CTF Archive, a platform optimized for CTF LLM Training and Vulnerability Research",
  },
  {
    name: "NASA's Astro Academy",
    description:
      "This project seeks to create an engaging online educational game inspired by NASA's groundbreaking Psyche Mission, a remarkable space exploration endeavor.",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/astro-academy.png",
    imageAlt:
      "NASA Astro Academy educational game inspired by the Psyche Mission and space exploration learning",
    url: "https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-tungsten-class/web-game-astro-academy-asu/",
    githubRepository: "MissionToPsyche/tungsten_12g_web_game",
    linkAriaLabel:
      "Learn more about NASA's Astro Academy, an educational game inspired by the Psyche Mission",
  },
  {
    name: "Quantum Supremacy",
    description:
      "This is a quantum computing game designed to help players get an intuition for gate-model quantum computing, quantum entanglement, and measurement!",
    image: "https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/projects/quantum-supremacy.png",
    imageAlt:
      "Quantum Supremacy game teaching gate-model quantum computing, entanglement, and measurement concepts",
    url: "https://github.com/iQuHACK/2021_Team-47",
    linkAriaLabel:
      "Learn more about Quantum Supremacy, a quantum computing education game",
  },
  {
    name: "C++ Parsing Compiler",
    description:
      "Developed the compiler to work efficiently by making recursive calls to various functions according to the grammar of the language that was being compiled.",
    image: "https://www.svgrepo.com/show/78134/c-logo.svg",
    url: "",
    imageAlt: "C++ Parsing Compiler project logo",
    linkAriaLabel:
      "Learn more about the C++ Parsing Compiler project",
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
    { name: "Matlab", icon: "/icons/matlab.svg" },
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

export const achievements: Achievement[] = [
  {
    name: "Qiskit Advocate",
    description:
      "Recognized by IBM for my contributions to the Qiskit community and my expertise in quantum computing.",
    icon: "/icons/qiskit.svg",
    url: "https://qiskit.org/advocates",
  },
];
