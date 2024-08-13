import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="p-4 pb-8">
      <ul className="flex justify-between">
        <Link href="/">home</Link>
        <Link href="/sign-in">login</Link>
        <Link href="/sign-up">register</Link>
        <Link href="/prev-uploads">uploads</Link>
      </ul>
    </nav>
  );
};
