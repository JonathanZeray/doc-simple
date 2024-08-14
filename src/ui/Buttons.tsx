import Link from "next/link";

type NavLinkProps = {
  text: string;
  href: string;
};

type HamburgerButtonProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const NavLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link href={href} className="text-darkBrown">
      {text}
    </Link>
  );
};

import React from "react";

export const HamburgerButton = ({
  isOpen,
  toggleOpen,
}: HamburgerButtonProps) => (
  <button
    onClick={toggleOpen}
    className="absolute right-5 flex flex-col justify-center items-center z-20"
  >
    <span
      className={`bg-darkBrown block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
    ></span>
    <span
      className={`bg-darkBrown block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
    ></span>
    <span
      className={`bg-darkBrown block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
    ></span>
  </button>
);
