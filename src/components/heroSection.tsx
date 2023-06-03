// import { Container } from "components/Container";
import Image from "next/image";
// import { motion } from "framer-motion";
// import { Tilt } from "./Projects";
// import TextReveal from "components/TextReveal";
import heroImage from "../../public/images/heroImage.png";

export default function HeroSection() {
  //   const pathVariants = {
  //     hidden: {
  //       pathLength: 0,
  //       stroke: "rgba(130, 97, 255, 0)",
  //     },
  //     visible: {
  //       pathLength: 1,
  //       stroke: "rgba(130, 97, 255, 1)",
  //     },
  //   };

  //   const options = {
  //     scale: 1.05,
  //     speed: 1000,
  //     max: 8,
  //     glare: true,
  //     "max-glare": 0.4,
  //   };

  return (
    <>
      <section className="absolute inset-0 mx-auto mb-auto mt-12 flex max-w-7xl flex-col items-center gap-8 px-4 py-40 lg:mt-36 lg:h-[70vh] lg:flex-row lg:justify-between lg:gap-0 lg:py-0">
        <div>
          <span className="text-sm uppercase opacity-80">
            {/* <TextReveal text="designer / developer" /> */}
            designer / developer
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-semibold lg:text-7xl">
            Hi, Im{" "}
            <span className="relative whitespace-nowrap">
              <svg
                viewBox="0 0 280 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[75%] h-[0.58] w-full rotate-3 stroke-[#EAFF96]"
                preserveAspectRatio="none"
              >
                <path
                  //   variants={pathVariants}
                  //   initial="hidden"
                  //   animate="visible"
                  d="M1.79004 37.0356C90.9647 2.06618 136.519 0.0760923 142.655 2.55589C148.791 5.03569 104.291 24.5357 103.291 27.5357C102.291 30.5357 173.427 8.51595 277.291 10.0357"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  //   transition={{
                  //     delay: 1.5,
                  //     default: { duration: 2, ease: "easeInOut" },
                  //     stroke: { duration: 1, ease: [1, 0, 0.8, 1] },
                  //   }}
                />
              </svg>
              {/* <span className="relative">
                <TextReveal text={"Ayush"} />
              </span> */}
              Ayush
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl pr-4 text-lg tracking-tight text-white/50">
            I love making the world a better place with my design and coding
            skills. You&#39;re at the right place if you want to see how I can
            bring your designs to life.
          </p>
        </div>
        {/* <Tilt options={options}> */}
        {/* <div className="h-72 w-1/3 overflow-hidden rounded-2xl md:h-auto"> */}
        {/* <div className="max-h-[635px] max-w-[478px] overflow-hidden rounded-2xl"> */}
        <Image
          src={heroImage}
          alt=""
          className="h-full max-h-[635px] w-auto rounded-2xl bg-cover bg-bottom bg-no-repeat"
        />
        {/* </div> */}
        {/* </Tilt> */}
      </section>
    </>
  );
}
