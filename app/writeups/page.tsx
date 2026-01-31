import Link from "next/link";
import {
  WRITEUPS,
  getCtfSlug,
  getWriteupSlug,
  type WriteupEntry,
} from "@/writeups.registry";

type GroupedCtf = {
  name: string;
  slug: string;
  entries: WriteupEntry[];
};

type GroupedYear = {
  year: number;
  ctfs: GroupedCtf[];
};

const groupWriteups = (entries: WriteupEntry[]): GroupedYear[] => {
  const byYear = new Map<number, Map<string, GroupedCtf>>();

  for (const entry of entries) {
    const ctfSlug = getCtfSlug(entry);

    if (!byYear.has(entry.year)) {
      byYear.set(entry.year, new Map());
    }

    const byCtf = byYear.get(entry.year)!;
    if (!byCtf.has(ctfSlug)) {
      byCtf.set(ctfSlug, {
        name: entry.ctf,
        slug: ctfSlug,
        entries: [],
      });
    }

    byCtf.get(ctfSlug)!.entries.push(entry);
  }

  return Array.from(byYear.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, ctfMap]) => {
      const ctfs = Array.from(ctfMap.values())
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((ctf) => ({
          ...ctf,
          entries: ctf.entries
            .slice()
            .sort((a, b) => a.challenge.localeCompare(b.challenge)),
        }));

      return { year, ctfs };
    });
};

export default function WriteupsIndexPage() {
  const grouped = groupWriteups(WRITEUPS);

  return (
    <main className="container py-12">
      <div className="square-background rounded-2xl border border-[#151515] p-8">
        <h1 className="text-3xl font-bold">Writeups</h1>
        <p className="mt-2 text-gray-300">
          CTF writeups grouped by year, event, and challenge.
        </p>
      </div>

      {grouped.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[#151515] p-8 text-gray-300">
          No writeups yet. Add entries to
          <span className="ml-2 text-white">app/writeups.registry.ts</span>.
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          {grouped.map(({ year, ctfs }) => (
            <section key={year}>
              <h2 className="text-2xl font-bold">{year}</h2>
              <div className="mt-6 space-y-6">
                {ctfs.map(({ name, slug, entries }) => (
                  <div
                    key={slug}
                    className="rounded-2xl border border-[#151515] p-6"
                  >
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <ul className="mt-4 grid gap-3 text-gray-200 sm:grid-cols-2">
                      {entries.map((entry) => {
                        const challengeSlug = getWriteupSlug(entry);

                        return (
                          <li key={`${entry.year}-${slug}-${challengeSlug}`}>
                            <Link
                              href={`/writeups/${entry.year}/${encodeURIComponent(
                                slug,
                              )}/${encodeURIComponent(challengeSlug)}`}
                            >
                              {entry.challenge}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
