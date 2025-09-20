// app/layout.tsx
import "@/styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}