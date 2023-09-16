import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

export default function Header() {
  const [menuVisible, setMenuVisibility] = useState(false);
  return (
    <header className="w-100">
      <nav className="flex items-center justify-between w-full h-[8vh] fixed bottom-0 md:top-0 md:sticky z-10 bg-slate-800 dark:bg-slate-900 dark:text-slate-50 text-slate-50">
        <h2 className="px-4 font-semibold">HERMES ADVERTISING</h2>
        <ul
          className={cn(
            menuVisible
              ? "flex flex-col md:flex-row justify-end absolute md:static right-0 bottom-[8vh] md:bottom-auto h-[92vh] md:h-auto w-full md:w-auto md:pr-4 pb-8 md:pb-0 items-center gap-12 bg-slate-900 dark:bg-slate-800 md:dark:bg-transparent md:bg-transparent dark:text-slate-50 text-slate-50"
              : "hidden md:flex md:flex-row md:pr-4 md:gap-8 md:items-center"
          )}
        >
          <li className="cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <a href="/services">Services</a>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <a href="/contact-us">Contact</a>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <Input className="" placeholder="Search" />
            <Button className="bg-slate-700 flex items-center">
              <span className="material-symbols-outlined">search</span>
            </Button>
          </li>
        </ul>
        <div
          className="flex flex-col justify-between items-center absolute right-4 cursor-pointer w-7 h-5 md:hidden"
          onClick={() => setMenuVisibility(!menuVisible)}
        >
          <a className="w-full h-full">
            <div className="absolute h-0.5 w-full top-0 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
            <div className="absolute h-0.5 w-full top-2 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
            <div className="absolute h-0.5 w-full top-4 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
          </a>
        </div>
      </nav>
    </header>
  );
}
