import React from "react";
import { useRouter } from "next/router";
import ProfessionalCard from "./subComponents/ProfessionalCard";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="h-[max-content] py-5 lg:flex lg:items-center lg:justify-evenly xl:h-[400px] bg-gradient-to-b from-gray-200 to-emerald-300 ">
      <div>
        <h2 className="font-bold text-lg xl:text-xl text-center ">Quick Links</h2>
        <ul className="list-none xl:text-lg">
          <li onClick={() => router.push("/")} className="quick-links">
            Home
          </li>
          <li
            onClick={() => router.push("/about-dyslexia")}
            className="quick-links"
          >
            What&apos;s Dyslexia
          </li>
          <li onClick={() => router.push("/about")} className="quick-links">
            About
          </li>
          <li onClick={() => router.push("/services")} className="quick-links">
            Services
          </li>
          <li onClick={() => router.push("/resources")} className="quick-links">
            Resources
          </li>
          <li onClick={() => router.push("/contact")} className="quick-links">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <ProfessionalCard />
      </div>
    </div>
  );
}
