import { NavLink } from "@/ui/Buttons";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import { MobileNav } from "./MobileNav";
import { Logo } from "../../public/icons/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:flex px-12 justify-between pt-5 pb-2 sticky top-0 backdrop-blur-[2px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-8">
          <NavLink href="/" text="About" />
          <SignedOut>
            <NavLink href="/sign-up" text="Register" />
            <NavLink href="/sign-in" text="Login" />
          </SignedOut>
          <SignedIn>
            <NavLink href="/prev-uploads" text="Uploads" />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <MobileNav />
    </>
  );
};
