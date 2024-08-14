"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HamburgerButton } from "@/ui/Buttons";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex sm:hidden items-center p-4">
      <div className="z-20 text-darkBrown">IoW</div>
      <HamburgerButton isOpen={isOpen} toggleOpen={toggleOpen} />

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
            className="fixed inset-0 bg-black z-10"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#fff9f2] z-10 flex flex-col items-center justify-center h-2/5 rounded-b-xl"
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
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
};
