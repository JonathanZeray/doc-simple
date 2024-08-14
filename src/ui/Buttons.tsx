import Link from "next/link";

interface NavLinkProps {
  text: string;
  href: string;
}

export const NavLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link href={href} className="text-darkBrown">
      {text}
    </Link>
  );
};
