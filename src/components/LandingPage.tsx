import Image from "next/image";
export const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full h-screen gap-16 sm:gap-0">
        <h1>This will be the landing page. Welcome!</h1>
        <Image
          src="/images/form-illustration.webp"
          width={500}
          height={500}
          alt="Form illustration"
          className="sm:shadow-lg rounded-lg overflow-hidden"
        />
      </div>
    </>
  );
};
