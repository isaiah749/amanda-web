import React from "react";
import Image from "next/image";
import logo from "../styles/Website Images/MagnificentMindsTutoring[No Background].png";
import outline from '../styles/Website Images/1.jpg'
import Link from 'next/link'
import { useRouter } from "next/router";
import ProfessionalCard from "./subComponents/ProfessionalCard";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="h-[fit-content] w-full grid grid-cols-5 grid-rows-2 border-t-2 border-black items-center pb-5 relative bg-gradient-to-b from-gray-300 to-emerald-300 ">
      <div className="col-start-1 col-end-4 row-start-1 text-center px-1 row-end-3 w-full">
        <div className="xl:hidden">
            <div className="relative h-[100px] w-[100px] mt-2 mx-auto ">
                <Image src={logo} layout='fill' objectFit="contain" objectPosition='center' />
            </div>
            <h2 className="font-bold text-lg">Amanda Tucker</h2>
            <h3 className="font-semibold">Dyslexia Tutor</h3>
            <h2 className="font-bold text">Magnificent Minds Tutoring, LLC</h2>
            <div className="h-[1px] w-[200px] border-2 border-black mx-auto border-dotted my-2 "></div>
            <h2 className="text-sm">3313 W County Road 500 N Richland, IN 47634</h2>
            <h3 className="">magnificentmindstutoring.com</h3>
            <h2 className="">magmindstutor@gmail.com</h2>
            <div className="h-[1px] w-[200px] border-2 border-black mx-auto border-dotted my-2 "></div>
            <h2 className="font-bold">Phone/Text: 812-449-6934</h2>
        </div>
        <div className="hidden xl:block md:-mt-20 xl:-mt-10">
            <ProfessionalCard />
        </div>
      </div>
      <div className="col-start-4 col-end-6 row-start-1 row-end-1 px-3 w-full pt-8 md:pt-12 lg:flex lg:item-center lg:justify-start lg:space-x-20  ">
        <div className="">
          <h2 className="font-semibold xl:text-xl ">Quick Links</h2>
          <ul className="pl-2 font-semibold xl:text-xl ">
              <li onClick={() => router.push('/')} className="underline underline-offset-2 cursor-pointer">Home</li>
              <li onClick={() => router.push('/about-dyslexia')} className="underline underline-offset-2 cursor-pointer">What&apos;s Dyslexia</li>
              <li onClick={() => router.push('/about')} className="underline underline-offset-2 cursor-pointer">About</li>
              <li onClick={() => router.push('/services')} className="underline underline-offset-2 cursor-pointer">Services</li>
              <li onClick={() => router.push('/contact')} className="underline underline-offset-2 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-semibold xl:text-xl ">Helpful Resources</h2>
          <ul className="pl-2 font-semibold xl:text-xl ">
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.dyslexiaida.org"}>
                  International Dyslexia Association
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.understood.org"}>
                Understood for All Inc
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.dyslexia.yale.edu"}>
                The Yale Center for Dyslexia and Creativity
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.brightsolutions.us"}>
                Bright Solutions for Dyslexia
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.bartonreading.com"}>
                Barton Reading & Spelling System
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.ortonacademy.org"}>
                Orton Gillingham Academy
                </Link>
              </li>
              <li className="underline underline-offset-2 cursor-pointer">
                <Link href={"www.learningally.org"}>
                Learning Ally (audiobooks)
                </Link>
              </li>
          </ul>
        </div>
      </div>
      <div className="col-start-4 pt-8 col-end-6 row-start-2  xl:-ml-[265px] row-end-2 w-full">
      <div className="relative h-[100px] w-[100px] md:h-[150px] md:w-[250px] lg:h-[200px] xl::w-[400px] -mt-5 flex items-center justify-center mx-auto ">
            <Image src={outline} layout='fill' objectFit="contain" objectPosition='center' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
