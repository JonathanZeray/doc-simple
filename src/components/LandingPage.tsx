import { CTAButtonWithArrow } from "@/ui/Buttons";
import Image from "next/image";
export const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full sm:h-screen gap-16 sm:gap-0">
        <div className="flex flex-col px-4 sm:ml-12 justify-center gap-4 sm:gap-10">
          <h1>Title</h1>
          <div>
            <h3 className="text-lg sm:text-2xl text-[#013912] leading-6 sm:text-darkBrown pb-3">
              Easily transform complex legal, insurance, and technical documents
              into simple, understandable language. <br /> Upload your documents
              now and get clear explanations in seconds.
            </h3>
            <CTAButtonWithArrow text="Get Started" />
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
