export type WriteupEntry = {
  year: number;
  ctf: string;
  challenge: string;
  slug?: string;
  ctfSlug?: string;
  mdUrl: string;
  repoUrl?: string;
};

const slugify = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getWriteupSlug = (entry: WriteupEntry) => {
  return slugify(entry.slug ?? entry.challenge);
};

export const getCtfSlug = (entry: WriteupEntry) => {
  return slugify(entry.ctfSlug ?? entry.ctf);
};

export const WRITEUPS: WriteupEntry[] = [
  {
    year: 2026,
    ctf: "UofTCTF",
    challenge: "Orca",
    mdUrl:
      "https://raw.githubusercontent.com/prathamgupta36/CTF-Writeups/main/2026/uoftctf2026/orca/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/uoftctf2026/orca",
  },
  {
    year: 2026,
    ctf: "UofTCTF",
    challenge: "Gamblers Fallacy",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/uoftctf2026/gamblersfallacy/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/uoftctf2026/gamblersfallacy",
  },
  {
    year: 2026,
    ctf: "UofTCTF",
    challenge: "Go Go Coaster",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/blob/main/2026/uoftctf2026/gogocoaster/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/uoftctf2026/gogocoaster",
  },
  {
    year: 2026,
    ctf: "UofTCTF",
    challenge: "Leaked d",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/uoftctf2026/leakdd/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/uoftctf2026/leakdd",
  },
];
