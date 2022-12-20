import React from 'react'
import Image from 'next/image';
import picTwo from "../styles/Website Images/Amanda T  Headshots-57.jpg";
import picThree from "../styles/Website Images/Amanda T  Headshots-61.jpg";
import picFour from "../styles/Website Images/17.jpg";
import picFive from "../styles/Website Images/Amanda T  Headshots-50.jpg";

const Center = () => {
  return (
    <div>
        <h2 className="text-center text-[2.65rem] font-semibold italic text-emerald-400 ">
              About Amanda
            </h2>
            <section className="border-2 border-emerald-400 rounded-t-lg mt-5 w-[80rem] h-[max-content] mx-auto bg-white shadow-xl ">
              <div className="flex items-center justify-start  ">
                <div className="h-[29.75rem] w-[650px] -mt-[4rem] md:-mt-0 relative ">
                  <Image
                    src={picTwo}
                    layout="fill"
                    className="rounded-r-full"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-32 h-[400px] mt-[4.8rem] w-[450px] text-[1.1rem] px-5 ">
                  <p className="text-center ">
                    {" "}
                    My roles in education and working with children have varied
                    over the years from Private Tutor, Special Needs Teaching
                    Assistant, to Title One Teacher. I have always had a love
                    for children and learning.
                  </p>
                  <p className="text-center mt-2 ">
                    The journey to opening{" "}
                    <span className="text-emerald-400 font-semibold text-2xl italic whitespace-nowrap block ">
                      Magnificent Minds Tutoring
                    </span>{" "}
                    began after watching a close friend’s dyslexic son on his
                    path to reading. This child has an incredible “outside the
                    box” way of looking at the world.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start flex-row-reverse  ">
                <div className="h-[29.75rem] w-[650px] -mt-[4rem] md:-mt-0 relative ">
                  <Image
                    src={picFour}
                    layout="fill"
                    className="rounded-l-full"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-32 h-[400px] mt-8 w-[500px] text-[1.1rem] px-5 ">
                  <p className="text-center mt-8 ">
                    Due to utilizing a different area of their brain to process
                    language, children with dyslexia really do think
                    differently. After finding a tutor that specialized in{" "}
                    <span className="text-emerald-400 font-semibold text-2xl italic whitespace-nowrap block ">
                      Orton Gillingham methodology
                    </span>{" "}
                    , this student has grown in confidence and made tremendous
                    progress in his journey to reading. I was inspired to help
                    other children, as he was helped, and hopefully alleviate
                    the frustrations and negative feelings that often come with
                    learning to read for individuals with dyslexia.
                  </p>
                </div>
              </div>
            </section>
            <section className="border-2 border-emerald-400 rounded-t-lg mt-[5rem] w-[60rem] h-[30rem] mx-auto bg-white shadow-xl flex items-center ">
              <div className="h-[29.75rem] w-[500px] -mt-[4rem] md:-mt-0 relative ">
                <Image
                  src={picFive}
                  layout="fill"
                  className="rounded-r-full"
                  objectFit="cover"
                />
              </div>
              <div className="w-[400px] mx-auto  ">
                <p className="text-lg">
                  In addition to watching my friend’s son, while working in a
                  public school, I had a first-hand look at the urgent need for
                  early intervention for struggling readers. Statistics show 1
                  in 5 children have some degree of dyslexia. Many of these
                  children can go undiagnosed or slide “under the radar” for
                  years and end up several years behind their peers in reading
                  ability. I am passionate about helping children gain the
                  skills needed to become successful readers and closing that
                  gap. It is my goal and the mission of Magnificent Minds
                  Tutoring to empower students with dyslexia to reach their
                  greatest potential.
                </p>
              </div>
            </section>

            <section className='h-[300vh] bg-blue-500 '>
              <div className="h-44 bg-red-500 sticky top-0"></div>
            </section>
        </div>
  )
}

export default Center