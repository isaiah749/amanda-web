import React from "react";
import Image from "next/image";
import shotOne from "../styles/Website Images/Amanda T  Headshots-57.jpg";
import shotTwo from "../styles/Website Images/5.jpg";
import shotThree from "../styles/Website Images/Amanda T  Headshots-28.jpg";
import shotFour from "../styles/Website Images/3.jpg";
import shotFive from "../styles/Website Images/12.jpg";
import shotSix from "../styles/Website Images/13.jpg";
import { useRouter } from "next/router";
const Invest = () => {
  const router = useRouter();

  return (
    <div className="py-5 bg-gradient-to-b bg-gray-200 from-emerald-300 to-transparent">
      <div className="md:flex-col items-center ">
        <div className="md:flex md:ml-5 items-center md:flex-row-reverse">
          <div className="flex flex-col ">
            <h1 className="text-4xl font-bold text-center w-[fit-content] mx-auto drop-shadow-lg md:text-[2.5rem] md:mr-2 ">
              Does your child struggle with reading or spelling?
            </h1>
            <div className="hidden md:block relative h-[280px] w-[320px] rounded-md shadow-lg -ml-1 md:mx-auto md:mt-5 mt-3 border-2 border-black bg-white  ">
              <Image src={shotThree} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="border-2 border-black bg-white h-[fit-content] w-[365px] md:w-[400px] px-2 mx-auto rounded-md pb-8 mt-5 ">
            <div className="relative h-[250px] mx-auto">
              <Image src={shotOne} layout="fill" objectFit="contain" />
            </div>
            <p className="text-md w-[350px] text-center mx-auto mt-2 ">
              Could it be dyslexia? As the most common learning disability,
              dyslexia effects approximately 15% of the population. Despite
              great intentions, educators and schools often aren&apos;t able to
              adequately implement reading interventions for struggling readers
              and spellers. At Magnificent Minds Tutoring, we are passionate
              about helping students gain confidence in their reading ability
              and helping to cultivate their love for literacy using specific,
              proven strategies. The basis of our instruction is built using the
              multisensory, Barton Reading and Spelling program. We also proudly
              utilize Foundation in Sounds, and a phonological awareness program
              by David Kilpatrick; Equipped for Reading Success.
            </p>
            <button
              onClick={() => router.push("/services")}
              className="border-2 w-[200px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-black py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="md:flex md:mr-5 items-center md:flex-row">
          <div className="flex flex-col ">
            <h1 className="text-4xl mt-5 md:mt-0 font-bold text-center w-[fit-content] mx-auto drop-shadow-lg md:text-[2.5rem] md:ml-2 ">
              Methods & Approach
            </h1>
            <div className="hidden md:block relative h-[280px] w-[320px] rounded-md shadow-lg -ml-1 md:mx-auto md:mt-5 mt-3 border-2 border-black bg-white  ">
              <Image src={shotSix} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="border-2 border-black bg-white h-[fit-content] w-[365px] md:w-[400px] px-2 mx-auto rounded-md pb-8 mt-5 md:pt-3 ">
            <div className="relative h-[250px] mx-auto">
              <Image src={shotFive} layout="fill" objectFit="contain" />
            </div>
            <p className="text-md w-[350px] text-center mx-auto mt-2 ">
              The Barton Reading and Spelling System is the primary curriculum
              utilized. This program was designed using the Orton Gillingham
              methodology and has proven successful for over 20 years in
              teaching dyslexic individuals to read and spell. Should a student
              not pass the Barton Reading and Spelling screener, we also utilize
              a prerequisite curriculum called Foundation in Sounds. In
              addition, we begin each session with a “brain warm-up” using
              phonemic awareness drills from an esteemed program called Equipped
              for Reading Success.
            </p>
          </div>
        </div>

        <div className="md:flex md:ml-5 items-center md:flex-row-reverse">
          <div className="flex flex-col ">
            <h1 className="text-4xl mt-5 md:mt-0 font-bold text-center w-[fit-content] mx-auto drop-shadow-lg md:text-[2.5rem] md:ml-2 ">
              What I Provide:
            </h1>
            <div className="hidden md:block relative h-[280px] w-[320px] rounded-md shadow-lg -ml-1 md:mx-auto md:mt-5 mt-3 border-2 border-black bg-white  ">
              <Image src={shotFour} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="border-2 border-black bg-white h-[fit-content] w-[365px] md:w-[400px] px-2 mx-auto rounded-md pb-8 mt-5 md:pt-3 ">
            <div className="relative h-[250px] mx-auto">
              <Image src={shotTwo} layout="fill" objectFit="contain" />
            </div>
            <div className="mt-5">
              <ul className='text-base w-[75%] mx-auto list-disc '>
                <li>
                  One-on-One Tutoring That Adapts to Your Child’s Pace, Needs,
                  and Learning Style
                </li>
                <li>
                  Multisensory, Structured Language Education (MSLE) Using the
                  Barton Reading and Spelling Program
                </li>
                <li>Games That Make Learning Fun</li>
                <li>Prizes to Reward and Encourage Your Child</li>
                <li>Written Summaries of Each Session</li>
                <li>Extra Practice Pages</li>
              </ul>
            </div>
            <button
              onClick={() => router.push('/services')}
              className="border-2 w-[200px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-black py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
