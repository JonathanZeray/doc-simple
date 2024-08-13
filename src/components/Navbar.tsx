import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="p-4 pb-8">
      <ul className="flex justify-between">
        <li>home</li>
        <Link href="/sign-in">login</Link>
        <Link href="/sign-up">register</Link>
        <li>get started</li>
      </ul>
    </nav>
  );
};
