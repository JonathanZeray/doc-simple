"use client";
import { motion } from "framer-motion";

const stepVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const LearningSteps = () => {
  return (
    <>
      <h3 className="pl-6 text-5xl sm:text-6xl text-darkBrown font-clash-display-semibold w-fit">
        How it works
      </h3>
      <section className="flex flex-col sm:flex-row w-full justify-between min-h-60 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0 }}
          variants={stepVariants}
          className="flex sm:border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            1
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-2 sm:pb-6 pt-2">
            Login
          </h4>
          <p className="text-darkBrown">
            Create an account with Facebook, Google or email & password.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={stepVariants}
          className="flex sm:border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            2
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-2 sm:pb-6 pt-2">
            Upload Document
          </h4>
          <p className="text-darkBrown">
            Navigate to the upload section and select your document (JPG, PNG,
            WEBP), or take a photo with your phone to upload.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={stepVariants}
          className="flex sm:border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            3
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-2 sm:pb-6 pt-2">
            Submit for processing
          </h4>
          <p className="text-darkBrown">
            Choose between 5 languages to translate your document in then click
            Submit to process it.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={stepVariants}
          className="flex flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            4
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-2 sm:pb-6 pt-2">
            Get simplified information
          </h4>
          <p className="text-darkBrown">
            View the simplified version of your document, presented in
            easy-to-understand language.
          </p>
        </motion.div>
      </section>
    </>
  );
};
