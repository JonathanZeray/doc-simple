import { NavLink } from "@/ui/Buttons";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:flex px-12 justify-between pt-4 pb-1 sticky top-0 backdrop-blur-sm">
        <div className="text-xl font-semibold">
          <NavLink href="/" text="IoW" />
        </div>
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
    </>
  );
};
