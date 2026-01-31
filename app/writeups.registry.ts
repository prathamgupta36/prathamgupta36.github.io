export type WriteupEntry = {
  year: number;
  ctf: string;
  challenge: string;
  slug?: string;
  ctfSlug?: string;
  mdUrl: string;
  repoUrl?: string;
};

export type CtfMeta = {
  year: number;
  ctf: string;
  ctfSlug?: string;
  team?: string;
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

const getCtfMetaSlug = (meta: CtfMeta) => {
  return slugify(meta.ctfSlug ?? meta.ctf);
};

export const getTeamForEntry = (entry: WriteupEntry) => {
  const slug = getCtfSlug(entry);
  const meta = CTF_META.find(
    (item) => item.year === entry.year && getCtfMetaSlug(item) === slug,
  );
  return meta?.team;
};

// CTF-level metadata (applies to all writeups for that event/year).
export const CTF_META: CtfMeta[] = [
  {
    year: 2026,
    ctf: "UofTCTF",
    team: "CTF Academy",
  },
  {
    year: 2026,
    ctf: "0xl4ugh",
    team: "CTF Academy",
  },
  {
    year: 2025,
    ctf: "LakeCTF Quals 25-26",
    team: "CTF Academy",
  },
];

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
  {
    year: 2026,
    ctf: "0xl4ugh",
    challenge: "Bitcoin",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/0xl4ugh/crypto/bitcoin/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/0xl4ugh/crypto/bitcoin",
  },
  {
    year: 2026,
    ctf: "0xl4ugh",
    challenge: "Dorya",
    mdUrl:
      "https://raw.githubusercontent.com/prathamgupta36/CTF-Writeups/main/2026/0xl4ugh/crypto/dorya/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/uoftctf2026/orca",
  },
  {
    year: 2026,
    ctf: "0xl4ugh",
    challenge: "Spiral Floats",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/0xl4ugh/crypto/spiralfloats/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/0xl4ugh/crypto/spiralfloats",
  },
  {
    year: 2026,
    ctf: "0xl4ugh",
    challenge: "4llD4y",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/0xl4ugh/web/4llD4y/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2026/0xl4ugh/web/4llD4y",
  },
    {
    year: 2025,
    ctf: "LakeCTF Quals 25-26",
    challenge: "Ez Part",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2025/lakectf2025/crypto/ezpart/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2025/lakectf2025/crypto/ezpart",
  },
    {
    year: 2025,
    ctf: "LakeCTF Quals 25-26",
    challenge: "Cognitive Reminder Call",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2025/lakectf2025/crypto/cognitiveremindercall/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2025/lakectf2025/crypto/cognitiveremindercall",
  }
];
