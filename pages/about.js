import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import picOne from "../styles/Website Images/Amanda T  Headshots2.jpg";
import picTwo from "../styles/Website Images/Amanda T  Headshots-57.jpg";
import picThree from "../styles/Website Images/Amanda T  Headshots-61.jpg";
import picFour from "../styles/Website Images/17.jpg";
import picFive from "../styles/Website Images/Amanda T  Headshots-50.jpg";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

const About = () => {
  return (
    <div className="">
      <section className="">
        <Header />
      </section>
      {/* Mobile & Tablet */}
      <div className="xl:hidden">
        <section className="mt-[6.5rem] px-2 pb-5 ">
          <div className="h-[max-content] py-3 shadow-lg bg-white border-2 border-black rounded-md md:mt-[8rem] md:w-[fit-content] md:px-5 md:mx-auto ">
            <h2 className="text-center text-4xl font-bold italic pb-2 text-emerald-400 md:text-[2.65rem] ">
              Meet Amanda
            </h2>
            <div className="relative h-[350px] md:h-[500px]">
              <Image
                src={picOne}
                layout="fill"
                className=""
                objectFit="contain"
              />
            </div>
            <ul className="w-[max-content] mx-auto mt-2 text-center ">
              <li className="text-sm md:text-lg md:font-semibold">
                Bachelor of Science - University of Southern Indiana
              </li>
              <li className="text-sm md:text-lg md:font-semibold">Licensed Teacher</li>
              <li className="text-sm md:text-lg md:font-semibold">
                Ortorn Gillingham Trained
              </li>
              <li className="text-sm md:text-lg md:font-semibold">
                Member of International Dyslexia Association
              </li>
              <li className="text-sm md:text-lg md:font-semibold">
                LETRS Trained (in progress)
              </li>
            </ul>
          </div>
          <div className="h-[max-content] mt-10 py-3 shadow-lg bg-white border-2 border-black rounded-md md:w-[fit-content] md:mx-auto ">
            <h2 className="text-center text-emerald-400 text-3xl font-bold italic pb-2 md:text-[2.45rem] ">
              About Amanda
            </h2>
            <p className="text-center px-2 md:w-[600px] md:mx-auto md:text-[1.15rem] ">
              My roles in education and working with children have varied over
              the years from Private Tutor, Special Needs Teaching Assistant, to
              Title One Teacher. I have always had a love for children and
              learning. The journey to opening{" "}
              <span className="text-emerald-400 font-semibold italic">
                Magnificent Minds Tutoring
              </span>{" "}
              began after watching a close friend’s dyslexic son on his path to
              reading. This child has an incredible “outside the box” way of
              looking at the world. Due to utilizing a different area of their
              brain to process language, children with dyslexia really do think
              differently. After finding a tutor that specialized in Orton
              Gillingham methodology, this student has grown in confidence and
              made tremendous progress in his journey to reading. I was inspired
              to help other children, as he was helped, and hopefully alleviate
              the frustrations and negative feelings that often come with
              learning to read for individuals with dyslexia.
            </p>
            <div className="relative h-[300px] mx-auto w-[350px] md:h-[400px] md:w-[475px] -mb-4 -mt-4 ">
              <Image
                src={picTwo}
                layout="fill"
                className=""
                objectFit="contain"
              />
            </div>
          </div>
          <div className="h-[max-content] mt-10 py-3 shadow-lg bg-white border-2 border-black rounded-md md:w-[fit-content] md:mx-auto ">
            <div className="relative h-[300px] mx-auto w-[350px] md:h-[400px] md:w-[475px] -mb-4 -mt-4 ">
              <Image
                src={picThree}
                layout="fill"
                className=""
                objectFit="contain"
              />
            </div>
            <p className="text-center px-2 md:w-[600px] md:text-[1.15rem] ">
              In addition to watching my friend’s son, while working in a public
              school, I had a first-hand look at the urgent need for early
              intervention for struggling readers. Statistics show 1 in 5
              children have some degree of dyslexia. Many of these children can
              go undiagnosed or slide “under the radar” for years and end up
              several years behind their peers in reading ability. I am
              passionate about helping children gain the skills needed to become
              successful readers and closing that gap. It is my goal and the
              mission of Magnificent Minds Tutoring to empower students with
              dyslexia to reach their greatest potential.
            </p>
          </div>
        </section>
      </div>
      {/* Desktop */}
      <div className="hidden xl:block h-[max-content] space-x-5 pt-28 pb-14 ">
        <div className="flex justify-between">
          <div className="flex-grow px-5 mr-5 border-r-2 border-emerald-400 border-b-2 relative">
            <Sidebar />
          </div>
          <div className="w-full">
            <Center />
          </div>
        </div>
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
};

export default About;
