"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const onWriteups = pathname === "/writeups" || pathname.startsWith("/writeups/");

  return onWriteups ? <Link href="/">Home</Link> : <Link href="/writeups">Writeups</Link>;
}
