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
    <div className="h-[400px] bg-gradient-to-b from-gray-300 to-emerald-300 ">
      <section className="xl:hidden w-full border border-red-500 h-full flex items-center justify-between ">
        <div className="border border-blue-500 h-full w-[65%] flex flex-col items-center justify-center ">
          <div className="relative h-20 w-20">
            <Image src={logo} layout='fill' objectFit="contain" />
          </div>
            <h2 className="font-bold">Amanda Tucker</h2>
            <h3 className="font-semibold">Dyslexia Tutor</h3>
            <h2 className="font-bold text-center">Magnificent Minds Tutoring, LLC</h2>
            <div className="border-2 border-black border-dotted w-[150px] my-2"></div>
            <p className="text-center">3313 W County Road 500 N Richland, IN 47634</p>
            <p className="text-center">magnificentmindstutoring.com</p>
            <p className="text-center">magmindstutor@gmail.com</p>
            <div className="border-2 border-black border-dotted w-[150px] my-2"></div>
            <h2 className="font-bold">Phone/Text: 812-449-6934</h2>
        </div>
        <div className="border border-green-500 h-full w-[35%] flex flex-col items-center justify-center ">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="font-semibold text-center ">
            <li className="underline underline-offset-2" onClick={() => router.push('/')}>Home</li>
            <li className="underline underline-offset-2" onClick={() => router.push('/about-dyslexia')}>What&apos;s Dyslexia</li>
            <li className="underline underline-offset-2" onClick={() => router.push('/about')}>About</li>
            <li className="underline underline-offset-2" onClick={() => router.push('/services')}>Services</li>
            <li className="underline underline-offset-2" onClick={() => router.push('/contact')}>Contact</li>
          </ul>
          <h2 className="font-bold text-center mt-5">Helpful Resources</h2>
          <ul>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"www.google.com"}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="hidden xl:block">
        <ProfessionalCard />
      </div>
    </div>
  );
};

export default Footer;


{/* <div className="">
<h2 className="font-semibold xl:text-xl ">Helpful Resources</h2>
<ul className="pl-2 font-semibold text-sm xl:text-xl ">
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
</div> */}