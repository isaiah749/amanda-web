import React from "react";
import shotOne from "../styles/Website Images/Amanda T  Headshots-57.jpg";
import shotTwo from "../styles/Website Images/5.jpg";
import shotThree from "../styles/Website Images/Amanda T  Headshots-28.jpg";
import shotFour from "../styles/Website Images/3.jpg";
import shotFive from "../styles/Website Images/12.jpg";
import shotSix from "../styles/Website Images/13.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

const InvestDesktop = () => {
  const router = useRouter();

  return (
    <section className="pt-5 pb-20 bg-gradient-to-b bg-gray-200 from-emerald-300 to-transparent ">
      <section className="border-2 border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex shadow-xl ">
        <div className="relative h-[978px] w-[60rem] ">
          <Image
            src={shotOne}
            layout="fill"
            className="rounded-l-lg"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] mx-auto flex-grow">
          <h2 className="text-center border-l-2 pt-3 border-black text-[2.75rem] font-bold drop-shadow-lg  ">
            Does your child struggle with reading or spelling?
          </h2>
          <p className="text-lg px-10 text-center mx-auto pt-2 border-l-2 border-black ">
            Could it be dyslexia? As the most common learning disability,
            dyslexia effects approximately 15% of the population. Despite great
            intentions, educators and schools often aren’t able to adequately
            implement reading interventions for struggling readers and spellers.
            At Magnificent Minds Tutoring, we are passionate about helping
            students gain confidence in their reading ability and helping to
            cultivate their love for literacy using specific, proven strategies.
            The basis of our instruction is built using the multisensory, Barton
            Reading and Spelling program. We also proudly utilize Foundation in
            Sounds, and a phonological awareness program by David Kilpatrick;
            Equipped for Reading Success.
          </p>
          <div className="border-l-2 border-black flex items-center pb-10 justify-center ">
            <button
              onClick={() => router.push("/services")}
              className="border-2 w-[400px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
          <div className="h-[466px] w-full relative border-t-2 border-l-2 border-black ">
            <Image
              src={shotThree}
              layout="fill"
              className="rounded-br-lg"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="border-2 mt-[5rem] border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex shadow-xl flex-row-reverse ">
        <div className="relative h-[856px] w-[60rem] ">
          <Image
            src={shotFive}
            layout="fill"
            className="rounded-r-lg"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] mx-auto flex-grow">
          <h2 className="text-center border-r-2 pt-3 border-black text-[2.75rem] font-bold drop-shadow-lg  ">
            Methods & Approach
          </h2>
          <p className="text-lg px-10 text-center mx-auto pt-2 border-r-2 border-black ">
            The Barton Reading and Spelling System is the primary curriculum
            utilized. This program was designed using the Orton Gillingham
            methodology and has proven successful for over 20 years in teaching
            dyslexic individuals to read and spell. Should a student not pass
            the Barton Reading and Spelling screener, we also utilize a
            prerequisite curriculum called Foundation in Sounds. In addition, we
            begin each session with a “brain warm-up” using phonemic awareness
            drills from an esteemed program called Equipped for Reading Success.
          </p>
          <div className="border-r-2 border-black flex items-center pb-10 justify-center ">

          </div>
          <div className="h-[534px] w-full relative border-t-2 border-r-2 border-black ">
            <Image
              src={shotSix}
              layout="fill"
              className="rounded-bl-lg"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="border-2 mt-[5rem] border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex shadow-xl ">
        <div className="relative h-[978px] w-[60rem] ">
          <Image
            src={shotTwo}
            layout="fill"
            className="rounded-l-lg"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] mx-auto flex-grow">
          <h2 className="text-center border-l-2 pt-3 border-black text-[2.75rem] font-bold drop-shadow-lg  ">
            What I Provide:
          </h2>
          <div className="w-full border-l-2 border-black ">
            <ul className='list-disc w-[70%] mx-auto text-lg '>
              <li>One-on-One Tutoring That Adapts to Your Child&apos;s Pace, Needs, and Learning Style</li>
              <li>Multisensory, Structured Language Education (MSLE) Using the Barton Reading and Spelling Program</li>
              <li>Games That Make Learning Fun</li>
              <li>Prizes to Reward and Encourage Your Child</li>
              <li>Written Summaries of Each Session</li>
              <li>Extra Practice Pages</li>
            </ul>
          </div>
          <div className="border-l-2 border-black flex items-center pb-10 justify-center ">
            <button
              onClick={() => router.push("/services")}
              className="border-2 w-[400px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
          <div className="h-[466px] w-full relative border-t-2 border-l-2 border-black ">
            <Image
              src={shotFour}
              layout="fill"
              className="rounded-br-lg"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default InvestDesktop;
