import Link from "next/link";
import {
  WRITEUPS,
  getCtfSlug,
  getTeamForEntry,
  getWriteupSlug,
} from "@/writeups.registry";

export const dynamicParams = false;

export function generateStaticParams() {
  const seen = new Set<string>();
  const params = WRITEUPS.flatMap((entry) => {
    const ctf = getCtfSlug(entry);
    const key = `${entry.year}:${ctf}`;

    if (seen.has(key)) {
      return [];
    }

    seen.add(key);
    return [{ year: String(entry.year), ctf }];
  });

  if (params.length === 0) {
    return [{ year: "0", ctf: "placeholder" }];
  }

  return params;
}

type CtfPageProps = {
  params: Promise<{
    year: string;
    ctf: string;
  }>;
};

export default async function CtfPage({ params }: CtfPageProps) {
  const resolvedParams = await params;
  const entries = WRITEUPS.filter(
    (entry) =>
      String(entry.year) === resolvedParams.year &&
      getCtfSlug(entry) === resolvedParams.ctf,
  );

  if (entries.length === 0) {
    return (
      <main className="container py-12">
        <div className="rounded-2xl border border-[#151515] p-8">
          <h1 className="text-2xl font-bold">CTF not found</h1>
          <p className="mt-2 text-gray-300">
            No writeups are registered for this CTF.
          </p>
          <Link className="mt-4 inline-block" href="/writeups">
            Back to writeups
          </Link>
        </div>
      </main>
    );
  }

  const [firstEntry] = entries;
  const team = getTeamForEntry(firstEntry);
  const ctfSlug = getCtfSlug(firstEntry);

  return (
    <main className="container py-12">
      <div className="rounded-2xl border border-[#151515] p-8">
        <Link className="text-sm" href="/writeups">
          Back to writeups
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-cyan-300">
          {firstEntry.ctf}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-300">
          <span>{firstEntry.year}</span>
          {team && <span className="team-badge">{team}</span>}
        </div>
        <p className="mt-4 text-gray-300">All writeups for this CTF.</p>
      </div>

      <div className="mt-8 rounded-2xl border border-[#151515] p-8">
        <ul className="grid gap-3 text-gray-200 sm:grid-cols-2">
          {entries.map((entry) => {
            const challengeSlug = getWriteupSlug(entry);

            return (
              <li key={`${entry.year}-${ctfSlug}-${challengeSlug}`}>
                <Link
                  href={`/writeups/${entry.year}/${encodeURIComponent(
                    ctfSlug,
                  )}/${encodeURIComponent(challengeSlug)}`}
                >
                  {entry.challenge}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
