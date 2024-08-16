"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Logo } from "../../public/icons/Logo";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (navRef.current) {
        if (prevScrollPos.current > currentScrollPos) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky transition-all duration-300 ease-in-out flex sm:hidden items-center p-4 ${
        isVisible ? "top-0" : "-top-20"
      }`}
    >
      <div className="z-50 text-darkBrown font-bold">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
      </div>
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

      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-black z-40 ${
              isVisible ? "top-0" : "-top-20"
            }`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-[#fff9f2] z-40 flex flex-col items-center justify-center h-2/5 rounded-b-xl ${
              isVisible ? "top-0" : "-top-20"
            }`}
          >
            <ul className="w-full h-full flex flex-col gap-2  justify-center">
              <Link
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                className=" px-8 py-2 text-darkBrown"
              >
                <h4 className="font-semibold text-lg">About</h4>
                <p className="opacity-60">
                  About us and why this site was created
                </p>
              </Link>
              <SignedOut>
                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" px-8 py-2 text-darkBrown"
                >
                  <h4 className="font-semibold text-lg">Register</h4>
                  <p className="opacity-60">Create an account to get started</p>
                </Link>
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" px-8 py-2 text-darkBrown"
                >
                  <h4 className="font-semibold text-lg">Login</h4>
                  <p className="opacity-60">
                    Store all your documents in one place
                  </p>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/prev-uploads"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" px-8 py-2 text-darkBrown"
                >
                  <h4 className="font-semibold text-lg">Uploads</h4>
                  <p className="opacity-60">
                    View your previously simplified documents
                  </p>
                </Link>
                <div className="absolute top-2 right-44">
                  <UserButton />
                </div>
              </SignedIn>
            </ul>
          </motion.div>
        </>
      )}
    </nav>
  );
};
