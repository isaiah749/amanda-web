import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import shotOne from "../styles/Website Images/15.jpg";
import shotTwo from "../styles/Website Images/8.jpg";
import Footer from "../components/Footer";
// import PdfOne from "../styles/Website Images/Dys warning signs.pdf"
// import PdfTwo from "../styles/Website Images/Dyslexia Tutor.pdf"

const Resources = () => {
  return (
    <div className="h-[max-content]">
      <nav>
        <Header />
      </nav>
      <div className="relative w-full mt-20 lg:mt-28 h-[250px] md:h-[400px] xl:h-[600px] ">
        <Image src={shotOne} layout="fill" objectFit="cover" />
        <h2 className="absolute top-1/3 text-center w-full left-0 right-0 mx-auto text-emerald-400 italic drop-shadow-xl font-bold text-3xl md:text-4xl xl:text-5xl">
          Helpful Resources
        </h2>
      </div>
      <main className="py-5 mx-auto px-5 md:py-10 flex flex-row-reverse items-center justify-center space-x-10 xl:space-x-0 ">
        <div className="flex justify-center flex-grow flex-col md:ml-10 lg:ml-0">
          <h3 className="font-bold text-xl md:text-2xl ">
            Links
          </h3>
          <ul className="list-none mt-2 space-y-2">
            <Link href={"https://www.dyslexiaida.org"}>
              <li className="helpful-resource-link">
                International Dyslexia Association
              </li>
            </Link>
            <Link href={"https://understood.org"}>
              <li className="helpful-resource-link">Understood for All Inc.</li>
            </Link>
            <Link href={"https://www.dyslexia.yale.edu"}>
              <li className="helpful-resource-link">
                The Yale Center for Dyslexia and Creativity
              </li>
            </Link>
            <Link href={"https://www.brightsolutions.us"}>
              <li className="helpful-resource-link">
                Bright Solutions for Dyslexia
              </li>
            </Link>
            <Link href={"https://www.bartonreading.com"}>
              <li className="helpful-resource-link">
                Barton Reading & Spelling System
              </li>
            </Link>
            <Link href={"https://www.ortonacademy.org"}>
              <li className="helpful-resource-link">
                Orton Gillingham Academy
              </li>
            </Link>
            <Link href={"https://www.learningally.org"}>
              <li className="helpful-resource-link">
                Learning Ally (audiobooks)
              </li>
            </Link>
          </ul>
          <h3 className="font-bold text-xl mt-4 md:text-2xl ">
            PDFs
          </h3>
          <ul className="list-none mt-2 space-y-2">
            <li className="helpful-resource-link">
            <a href='/assets/Dys warning signs.pdf' target="_blank" rel="nooppener noreferrer" className="">Dyslexia Warning Signs</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block relative h-[25rem] md:w-[50%] xl:w-[60%]">
            <Image src={shotTwo} layout='fill' objectFit="contain" />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Resources;
