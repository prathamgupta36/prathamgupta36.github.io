import DevIcon from "./DevIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mb-10 mt-24 flex justify-between">
      <p className="text-sm">{year} Pratham Gupta</p>
      <a
        href="https://github.com/stonith404"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        Inspired by Elias Schneider
      </a>
      <a
        href="https://github.com/prathamgupta36/prathamgupta36.github.io"
        target="_blank"
        className="text-sm"
      >
        <DevIcon icon="github-original" size={20} />
        <span>&nbsp;Source Code</span>
      </a>
    </div>
  );
}
