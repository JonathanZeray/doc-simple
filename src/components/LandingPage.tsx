import { CTAButtonWithArrow } from "@/ui/Buttons";
import Image from "next/image";
import Link from "next/link";
export const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full sm:h-screen gap-16 sm:gap-0 pb-24">
        <div className="flex flex-col px-4 sm:px-12 justify-center gap-4 sm:gap-10">
          <h1 className="text-5xl sm:text-8xl font-bold text-darkBrown font-bebasNeue">
            In other words
          </h1>
          <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-0">
            <h3 className="text-lg sm:text-2xl leading-6 text-darkBrown pb-3">
              Easily transform complex legal, insurance, and technical documents
              into simple, understandable language. <br /> Upload your documents
              now and get clear explanations in seconds.
            </h3>
            <Link
              href="/sign-up"
              className="flex items-center px-6 py-1 text-2xl font-semibold border-2 border-black w-fit rounded-xl font-bebasNeue bg-[#ff8a60]"
            >
              <span className="mr-4">Get Started</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
        <div className="w-full sm:h-full flex justify-center items-center">
          <Image
            src="/images/form-illustration.webp"
            width={500}
            height={500}
            alt="Form illustration"
            className="sm:shadow-lg rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </>
  );
};
