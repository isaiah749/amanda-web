import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import notice from "../styles/Website Images/dys-warning-signs.png";

const PSA = () => {
  const router = useRouter();

  return (
    <div className="h-[fit-content] px-2 py-2 ">
      <h2 className="text-center font-bold text-4xl md:text-5xl ">
        About Dyslexia
      </h2>
      <div className="mt-3 flex-col items-center justify-center px-2 ">
        <p className="md:text-lg md:w-[650px] md:mx-auto ">
          Dyslexia is a learning disorder that involves difficulty reading due
          to problems identifying speech sounds and learning how they relate to
          letters and words (decoding). Also called a reading disability,
          dyslexia is a result of individual differences in areas of the brain
          that process language.
        </p>
        <h2 className="text-3xl font-semibold text-center mt-3 md:text-4xl ">
          Dyslexia Warning Signs
        </h2>
        <div className="w-full flex items-center justify-center">
          <div className="md:flex-col md:items-center md:justify-center">
            <h2 className="text-xl font-semibold mt-2 md:text-2xl">
              Preschool
            </h2>
            <ul className="ml-8 list-disc md:text-lg ">
              <li className="">Delayed speech</li>
              <li className="">Cant create words that rhyme</li>
              <li className="">Mixing up sounds and syllables in long words</li>
            </ul>

            <h2 className="text-xl font-semibold mt-2">Elementary School</h2>
            <ul className="ml-8 list-disc md:text-lg ">
              <li className="">
                Letter or number reversals continuing past the end of first
                grade
              </li>
              <li className="">Cant create words that rhyme</li>
              <li className="">Mixing up sounds and syllables in long words</li>
            </ul>

            <h2 className="text-xl font-semibold mt-2">Highschool</h2>
            <ul className="ml-8 list-disc md:text-lg ">
              <li className="">Delayed speech</li>
              <li className="">Cant create words that rhyme</li>
              <li className="">Mixing up sounds and syllables in long words</li>
            </ul>

            <h2 className="text-xl font-semibold mt-2">Adults</h2>
            <ul className="ml-8 list-disc md:text-lg ">
              <li className="">Delayed speech</li>
              <li className="">Cant create words that rhyme</li>
              <li className="">Mixing up sounds and syllables in long words</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="border-2 w-[75%] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 my-4 font-bold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black text-lg md:text-xl ">
          Learn More<span className="text-black">(link to extra page)</span>
        </button>
      </div>
    </div>
  );
};

export default PSA;
