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
    ctf: "LA CTF 2026",
    team: "Shellphish",
  },
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
  {
    year: 2025,
    ctf: "BuckeyeCTF 2025",
    team: "Shellphish",
  },
];

export const WRITEUPS: WriteupEntry[] = [
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Lazy Bigrams",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/lazybigrams/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/lazybigrams",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Not So Lazy Trigrams",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/notsolazytrigrams/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/notsolazytrigrams",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Sisyphus",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/sisyphus/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/sisyphus",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Six Seven",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/sixseven/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/sixseven",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Six Seven Again",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/sixsevenagain/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/sixsevenagain",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Smol Cats",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/smolcats/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/smolcats",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Spreading Secrets",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/spreadingsecrets/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/spreadingsecrets",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "The Clock",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/theclock/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/theclock",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Misdirection",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/crypto/misdirection/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/crypto/misdirection",
  },

  // Pwn (2 challenges)
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "ScrabASM",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/pwn/srabasm/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/pwn/srabasm",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Tic-Tac-No",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/pwn/tictactoe/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/pwn/tictactoe",
  },

  // Rev (6 challenges)
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "ooo",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/ooo/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/ooo",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "The Fish",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/thefish/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/thefish",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Starless C",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/starlessc/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/starlessc",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "LACTF 1986",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/lactf1986/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/lactf1986",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Flag Finder",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/flagfinder/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/flagfinder",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "The Three-SAT Problem",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/rev/threesatproblem/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/rev/threesatproblem",
  },

  // Web (3 challenges)
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Clawcha",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/web/clawcha/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/web/clawcha",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Job Board",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/web/jobboard/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/web/jobboard",
  },
  {
    year: 2026,
    ctf: "LA CTF 2026",
    challenge: "Single Trust",
    mdUrl: "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2026/lactf2026/web/singletrust/WRITEUP.md",
    repoUrl: "https://github.com/prathamgupta36/CTF-Writeups/files/2026/lactf2026/web/singletrust",
  },
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
  },
    {
    year: 2025,
    ctf: "BuckeyeCTF 2025",
    challenge: "Polyglot",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2025/buckeyectf2025/polyglot/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2025/buckeyectf2025/polyglot",
  },
    {
    year: 2025,
    ctf: "BuckeyeCTF 2025",
    challenge: "befuddled",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2025/buckeyectf2025/rev/befuddled/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2025/buckeyectf2025/rev/befuddled",
  },
    {
    year: 2025,
    ctf: "BuckeyeCTF 2025",
    challenge: "Square Cipher",
    mdUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/raw/refs/heads/main/2025/buckeyectf2025/rev/squarecipher/WRITEUP.md",
    repoUrl:
      "https://github.com/prathamgupta36/CTF-Writeups/tree/main/2025/buckeyectf2025/rev/squarecipher",
  }
];
