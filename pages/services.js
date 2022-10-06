import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import picOne from "../styles/Website Images/Amanda T  Headshots-14.jpg";
import picTwo from "../styles/Website Images/Amanda T  Headshots-27.jpg";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter();

  return (
    <div className="">
      <nav className="">
        <Header />
      </nav>
      {/* Mobile */}
      <div className="xl:hidden">
        <main className="pt-24 md:pt-28 xl:pt-32">
          <div className="drop-shadow-lg">
            <h2 className="text-center font-bold text-4xl md:text-5xl italic text-emerald-400 drop-shadow-lg w-[200px] mx-auto ">
              Services
            </h2>
            <div className="h-[2px] w-[75px] bg-emerald-400 mx-auto mt-2 drop-shadow-lg "></div>
          </div>

          <section className="h-[fit-content] mt-3 relative flex ">
            <div className="border-2 border-r-0 border-black shadow-lg h-[fit-content] text-sm text-center rounded-l-lg py-2 px-2 z-[100] bg-white w-[240px] md:w-[500px] md:h-[500px] absolute right-0 top-0 ">
              <h2 className="text-2xl font-semibold text-center italic text-emerald-400 drop-shadow-lg mt-1 md:mt-4 md:text-4xl md:mb-1 ">
                What I Provide
              </h2>
              <p className="md:text-lg md:px-4 ">
                As a licensed teacher, trained in Orton Gillingham methods, I
                offer one on one private tutoring sessions for individuals with
                reading and spelling difficulties. I provide services to
                students from primary age to adult, in person, in my home office
                located in Richland, IN. I offer a free initial consultation.
                During this session, I learn about the strengths, goals, and
                needs of the student. I will also assess the student’s
                reading/language proficiency and skills, which will allow me to
                propose a plan for services. However, I do not offer services to
                test students for dyslexia or make any formal diagnosis because
                I am not a neuropsychologist
              </p>
            </div>
            <div className="h-[550px] w-[250px] md:w-[450px] relative border-2 border-t-0 border-l-0 border-black shadow-lg rounded-br-lg  ">
              <Image
                src={picOne}
                layout="fill"
                className="rounded-br-lg"
                objectFit="cover"
              />
            </div>
          </section>
          <section className="h-[40rem] mt-3 relative flex  ">
            <div className="w-full mx-auto relative h-[700px] ">
              <Image layout="fill" src={picTwo} objectFit="cover" />
              <div className="absolute top-10 left-0 right-0 mx-auto h-[fit-content] pb-2 w-[320px] md:w-[640px] rounded-lg border-2 border-black bg-white shadow-xl ">
                <h2 className="text-center italic font-semibold text-[1.8rem] pt-2 text-emerald-400 drop-shadow-lg md:text-4xl ">
                  Methods & Approach
                </h2>
                <p className="px-2 pb-2 text-center text-sm md:text-lg ">
                  The Barton Reading and Spelling System is the primary
                  curriculum I utilize. This program was designed using the
                  Orton Gillingham methodology and has proven successful for
                  over 20 years in teaching dyslexic individuals to read and
                  spell. Should a student not pass the Barton Reading and
                  Spelling screener, I also utilize a prerequisite curriculum
                  called Foundation in Sounds. In addition, we begin each
                  session with a “brain warm-up” using phonemic awareness drills
                  from a program called Equipped for Reading Success.
                </p>
                <h2 className="pl-2 font-semibold text-lg text-emerald-400 md:text-2xl ">
                  The Barton System is:
                </h2>
                <ul className="w-[260px] mx-auto list-disc pb-5 text-sm md:text-lg ">
                  <li className="">Research and Evidence Based</li>
                  <li className="">Follows Orton Gillingham Principles</li>
                  <li className="">Multisensory</li>
                  <li className="">
                    Explicit, Systematic & Sequential Phonics Program
                  </li>
                </ul>
                <p className="text-center text-sm md:text-lg">
                  To learn more about why the Barton system is so effective{" "}
                  <span
                    onClick={() =>
                      router.push(
                        "https://bartonreading.com/the-barton-system-is/"
                      )
                    }
                    className="text-blue-500 hover:underline underline-offset-1 font-semibold "
                  >
                    Click here
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* Desktop */}
      <div className="hidden xl:block h-[fit-content] pt-28 pb-14">
        <h2 className="text-center text-emerald-400 itaic font-bold drop-shadow-lg text-[3.5rem] mt-3 ">
          Services
        </h2>
        <div className="h-[2px] w-[120px] bg-emerald-400 mx-auto mt-1 drop-shadow-lg mb-5 "></div>
        <section className="border-2 border-black rounded-lg max-w-[85%] mx-auto h-[max-content] shadow-xl flex ">
          <div className="relative h-[30rem] w-[45%] flex-grow ">
            <Image
              src={picOne}
              layout="fill"
              className="rounded-l-lg "
              objectFit="cover"
            />
          </div>
          <div className="w-[50%] border-l-2 border-black">
            <h2 className="text-center text-emerald-400 italic font-bold drop-shadow-lg text-[3rem] mt-12 ">
              What I Provide
            </h2>
            <div className="h-[2px] w-[120px] bg-emerald-400 mx-auto mt-1 drop-shadow-lg mb-5 "></div>
            <p className="text-lg px-5 ">
              As a licensed teacher, trained in Orton Gillingham methods, I
              offer one on one private tutoring sessions for individuals with
              reading and spelling difficulties. I provide services to students
              from primary age to adult, in person, in my home office located in
              Richland, IN. I offer a free initial consultation. During this
              session, I learn about the strengths, goals, and needs of the
              student. I will also assess the student’s reading/language
              proficiency and skills, which will allow me to propose a plan for
              services. However, I do not offer services to test students for
              dyslexia or make any formal diagnosis because I am not a
              neuropsychologist
            </p>
          </div>
        </section>
        <section className="border-2 border-black w-[65rem] h-[55rem] rounded-lg shadow-xl mx-auto mt-20 relative ">
          <Image
            src={picTwo}
            layout="fill"
            className="rounded-lg"
            objectFit="cover"
          />
          <div className="absolute top-20 left-0 right-0 mx-auto w-[50rem] border-2 border-black rounded-lg shadow-lg bg-white ">
            <h2 className="text-center text-emerald-400 italic font-bold drop-shadow-lg text-[3rem] mt-12 ">
              Methods & Approach
            </h2>
            <div className="h-[2px] w-[120px] bg-emerald-400 mx-auto mt-1 drop-shadow-lg mb-5 "></div>
            <p className="px-2 pb-2 text-center text-sm md:text-lg ">
                  The Barton Reading and Spelling System is the primary
                  curriculum I utilize. This program was designed using the
                  Orton Gillingham methodology and has proven successful for
                  over 20 years in teaching dyslexic individuals to read and
                  spell. Should a student not pass the Barton Reading and
                  Spelling screener, I also utilize a prerequisite curriculum
                  called Foundation in Sounds. In addition, we begin each
                  session with a “brain warm-up” using phonemic awareness drills
                  from a program called Equipped for Reading Success.
                </p>
                <div className="flex items-center justify-center">
                  <div className="">
                    <h2 className="font-semibold text-lg text-emerald-400 md:text-2xl ">
                      The Barton System is:
                    </h2>
                    <ul className="w-[260px] mx-auto list-disc pb-5 text-sm md:text-lg ">
                      <li className="">Research and Evidence Based</li>
                      <li className="">Follows Orton Gillingham Principles</li>
                      <li className="">Multisensory</li>
                      <li className="">
                        Explicit, Systematic & Sequential Phonics Program
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm md:text-lg">
                  To learn more about why the Barton system is so effective{" "}
                  <span
                    onClick={() =>
                      router.push(
                        "https://bartonreading.com/the-barton-system-is/"
                      )
                    }
                    className="text-blue-500 hover:underline underline-offset-1 font-semibold "
                  >
                    Click here
                  </span>
                </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
