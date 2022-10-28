import React from "react";
import Image from "next/image";
import picOne from "../styles/Website Images/13.jpg";
import picTwo from "../styles/Website Images/1.jpg";
import { useRouter } from "next/router";

const PSADesktop = () => {
  const router = useRouter();

  return (
    <div className="h-[100vh] pt-10 ">
      <section className="border-2 border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex shadow-xl ">
        <div className="relative h-[782px] w-[50rem] ">
          <Image
            src={picOne}
            layout="fill"
            className="rounded-l-lg"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] mx-auto flex-grow">
          <h2 className="text-center border-l-2 pt-3 border-black text-[2.75rem] font-bold drop-shadow-lg  ">
            About Dyslexia
          </h2>
          <p className="text-lg px-10 text-center mx-auto pt-2 border-l-2 border-black ">
            Dyslexia is a learning disorder that involves difficulty reading due
            to problems identifying speech sounds and learning how they relate
            to letters and words (decoding). Also called a reading disability,
            dyslexia is a result of individual differences in areas of the brain
            that process language.
          </p>
          <div className="border-l-2 border-black flex items-center pb-10 justify-center ">
            <button
              onClick={() => router.push("/about-dyslexia")}
              className="border-2 w-[400px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
          <div className="h-[504px] w-full relative border-t-2 border-l-2 border-black ">
            <Image
              src={picTwo}
              layout="fill"
              className="rounded-br-lg"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSADesktop;
