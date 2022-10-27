import React from "react";
import Image from "next/image";
import picOne from "../styles/Website Images/13.jpg";
import { useRouter } from 'next/router'

const PSADesktop = () => {

    const router = useRouter();

  return (
    <div className="h-[fit-content] pt-10 ">
      <section className="w-full h-[fit-content] flex items-center justify-evenly ">
        <div className="relative h-[50rem] w-[60rem]  ">
          <Image src={picOne} layout="fill" objectFit="contain" />
        </div>
        <div className="border-2 border-black h-[25rem] w-[750px]  py-5 px-2 flex items-center justify-center rounded-lg shadow-xl ">
            <div className="">
            <h2 className="text-5xl font-bold text-left drop-shadow-lg">
                About Dyslexia
            </h2>
            <p className="text-lg text-center md:mx-auto mt-5 ">
                Dyslexia is a learning disorder that involves difficulty reading due
                to problems identifying speech sounds and learning how they relate
                to letters and words (decoding). Also called a reading disability,
                dyslexia is a result of individual differences in areas of the brain
                that process language.
            </p>
            <div className="flex items-center">
                <button onClick={() => router.push('/about-dyslexia')} className="border-2 w-[75%] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-6 font-bold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black text-lg md:text-xl ">
                Learn More
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSADesktop;
