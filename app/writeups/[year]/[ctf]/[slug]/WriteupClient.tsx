"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { WriteupEntry } from "@/writeups.registry";

type WriteupClientProps = {
  entry: WriteupEntry;
};

const normalizeMarkdownUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "github.com") {
      return url;
    }

    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length < 5) {
      return url;
    }

    const owner = parts[0];
    const repo = parts[1];
    const kind = parts[2];

    if (kind !== "raw" && kind !== "blob") {
      return url;
    }

    let refIndex = 3;
    if (parts[3] === "refs" && (parts[4] === "heads" || parts[4] === "tags")) {
      refIndex = 5;
    }

    const ref = parts[refIndex];
    const path = parts.slice(refIndex + 1).join("/");
    if (!ref || !path) {
      return url;
    }

    return `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`;
  } catch {
    return url;
  }
};

export default function WriteupClient({ entry }: WriteupClientProps) {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadMarkdown = async () => {
      try {
        setError("");
        setMarkdown("");

        const response = await fetch(normalizeMarkdownUrl(entry.mdUrl));
        if (!response.ok) {
          throw new Error(`Failed to load markdown (${response.status})`);
        }

        const text = await response.text();
        if (!cancelled) {
          setMarkdown(text);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load markdown.";
        if (!cancelled) {
          setError(message);
        }
      }
    };

    loadMarkdown();

    return () => {
      cancelled = true;
    };
  }, [entry.mdUrl]);

  return (
    <main className="container py-12">
      <div className="rounded-2xl border border-[#151515] p-8">
        <Link className="text-sm" href="/writeups">
          Back to writeups
        </Link>
        <h1 className="mt-4 text-3xl font-bold">{entry.challenge}</h1>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
          <span>{entry.year}</span>
          <span>•</span>
          <span>{entry.ctf}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a href={entry.mdUrl} target="_blank" rel="noreferrer">
            View markdown source
          </a>
          {entry.repoUrl && (
            <a href={entry.repoUrl} target="_blank" rel="noreferrer">
              View folder on GitHub
            </a>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[#151515] p-8">
        {error ? (
          <p className="text-red-400">{error}</p>
        ) : !markdown ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <article className="writeup-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </main>
  );
}
