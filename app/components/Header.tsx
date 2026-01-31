import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <div className="container my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            height={40}
            width={40}
            src="https://raw.githubusercontent.com/prathamgupta36/prathamgupta36.github.io/main/public/images/logo.png"
            alt="Pratham Gupta Logo"
          />
          <h1 className="ml-2 text-2xl font-bold">
            <span className="hidden">P</span>ratham Gupta
          </h1>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
