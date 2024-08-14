"use client";
import { motion } from "framer-motion";
import { NumberWithCircle } from "@/ui/NumberCircles";
const stepVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const LearningSteps = () => {
  return (
    <>
      <h3 className="px-12 text-5xl sm:text-6xl font-bold text-darkBrown font-bebasNeue w-fit">
        How it works
      </h3>
      <section className="flex flex-col sm:flex-row w-full justify-between min-h-60 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0 }}
          variants={stepVariants}
          className="flex border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            1
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-6 pt-2">Login</h4>
          <p className="text-darkBrown">
            Create an account by using Google or with a email & password.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={stepVariants}
          className="flex border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            2
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-6 pt-2">
            Upload Document
          </h4>
          <p className="text-darkBrown">
            Navigate to the upload section and select your document image (JPG,
            PNG, WEBP) to upload.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={stepVariants}
          className="flex border-r-[0.25px] border-darkBrown flex-col sm:w-1/4 px-6 pt-4 "
        >
          <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
            3
          </span>
          <h4 className="text-xl font-bold text-darkBrown pb-6 pt-2">
            Submit for processing
          </h4>
          <p className="text-darkBrown">
            Click the Submit button to send your document and context for
            processing.
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
          <h4 className="text-xl font-bold text-darkBrown pb-6 pt-2">
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
