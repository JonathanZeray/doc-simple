import Link from "next/link";

type NavLinkProps = {
  text: string;
  href: string;
};

type HamburgerButtonProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

type CTAButtonProps = {
  text: string;
};

export const NavLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link href={href} className="text-darkBrown">
      {text}
    </Link>
  );
};

export const HamburgerButton = ({
  isOpen,
  toggleOpen,
}: HamburgerButtonProps) => (
  <button
    onClick={toggleOpen}
    className="absolute right-5 flex flex-col justify-center items-center z-50"
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

export const CTAButton = ({ text }: CTAButtonProps) => {
  return (
    <button className="px-8 py-2 text-2xl font-semibold border-2 border-black w-fit bg-[#ff8a60] rounded-xl hover:underline underline-offset-2 ">
      {text}
    </button>
  );
};

export const CTAButtonWithArrow = ({ text }: CTAButtonProps) => {
  return (
    <button className="flex items-center px-8 py-2 text-xl font-semibold border-black border-2">
      <span className="mr-4">{text}</span>
      <span className="text-xl">→</span>
    </button>
  );
};
