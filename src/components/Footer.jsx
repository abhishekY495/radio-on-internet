import React from "react";

import githubLogo from "../assets/footer/github.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-[2px] text-neutral-300/50 mb-8">
      <div>
        Made by{" "}
        <a
          href="https://abhisheky495.netlify.app"
          className="underline underline-offset-4 decoration-1 decoration-neutral-700 hover:text-neutral-300/70 transition-all"
          target="_blank"
        >
          Abhishek
        </a>
      </div>
      <div className="underline underline-offset-4 decoration-1 decoration-neutral-700 hover:text-neutral-300/70 transition-all">
        <a
          href="https://github.com/abhishekY495/radio-on-internet"
          className="flex items-center gap-2"
          target="_blank"
        >
          <img
            src={githubLogo}
            alt="github"
            className="w-4 opacity-60 hover:opacity-80 transition-all"
          />
          Source code
        </a>
      </div>
    </footer>
  );
}
