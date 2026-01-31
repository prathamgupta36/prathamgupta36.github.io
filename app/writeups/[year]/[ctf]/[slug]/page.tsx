import Link from "next/link";
import {
  WRITEUPS,
  getCtfSlug,
  getWriteupSlug,
} from "@/writeups.registry";
import WriteupClient from "./WriteupClient";

export const dynamicParams = false;

export function generateStaticParams() {
  const params = WRITEUPS.map((entry) => ({
    year: String(entry.year),
    ctf: getCtfSlug(entry),
    slug: getWriteupSlug(entry),
  }));

  if (params.length === 0) {
    return [{ year: "0", ctf: "placeholder", slug: "placeholder" }];
  }

  return params;
}

type WriteupPageProps = {
  params: Promise<{
    year: string;
    ctf: string;
    slug: string;
  }>;
};

export default async function WriteupPage({ params }: WriteupPageProps) {
  const resolvedParams = await params;
  const entry = WRITEUPS.find(
    (item) =>
      String(item.year) === resolvedParams.year &&
      getCtfSlug(item) === resolvedParams.ctf &&
      getWriteupSlug(item) === resolvedParams.slug,
  );

  if (!entry) {
    return (
      <main className="container py-12">
        <div className="rounded-2xl border border-[#151515] p-8">
          <h1 className="text-2xl font-bold">Writeup not found</h1>
          <p className="mt-2 text-gray-300">
            No writeup is registered for this URL.
          </p>
          <Link className="mt-4 inline-block" href="/writeups">
            Back to writeups
          </Link>
        </div>
      </main>
    );
  }

  return <WriteupClient entry={entry} />;
}
