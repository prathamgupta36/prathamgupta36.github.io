"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const onWriteups = pathname === "/writeups" || pathname.startsWith("/writeups/");

  if (onWriteups) {
    return null;
  }

  return <Footer />;
}
