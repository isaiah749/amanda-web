import React from 'react'
import shotOne from '../styles/Website Images/Amanda T  Headshots-57.jpg'
import shotTwo from '../styles/Website Images/5.jpg'
import shotThree from '../styles/Website Images/Amanda T  Headshots-28.jpg'
import shotFour from '../styles/Website Images/3.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const InvestDesktop = () => {
  const router = useRouter()

  return (
    <section className="pt-5 pb-20 bg-gradient-to-b bg-gray-200 from-emerald-300 to-transparent ">
      <section className="border-2 border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex shadow-xl ">
        <div className="relative h-[688px] w-[50rem] ">
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
            As a teacher and dyslexia tutor, I am passionate about helping
            students gain confidence in their reading ability and develop a love
            for literacy.We all have a tendency to put others first, but in
            doing so, we can sometimes neglect our relationship with ourselves.
            Let me be your advocate and show you a kinder, gentler way to treat
            to most important person in your life
          </p>
          <div className="border-l-2 border-black flex items-center pb-10 justify-center ">
            <button
              onClick={() => router.push('/services')}
              className="border-2 w-[400px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
          <div className="h-[410px] w-full relative border-t-2 border-l-2 border-black ">
            <Image
              src={shotThree}
              layout="fill"
              className="rounded-br-lg"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="border-2 border-black rounded-lg w-[90%] h-[max-content] mx-auto bg-white flex flex-row-reverse mt-[5rem] shadow-xl ">
        <div className="relative h-[688px] w-[50rem] ">
          <Image
            src={shotTwo}
            layout="fill"
            className="rounded-r-lg"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] mx-auto flex-grow">
          <h2 className="text-center border-r-2 pt-3 border-black text-[2.75rem] font-bold drop-shadow-lg  ">
            Invest in your relationship with others
          </h2>
          <h4 className='font-semibold text-xl pl-5 border-r-2 border-black'>What I Provide:</h4>
          <div className="w-full border-r-2 border-black ">
            <ul className='list-disc w-[70%] mx-auto text-lg '>
              <li>One-on-One Tutoring That Adapts to Your Child’s Pace, Needs, and Learning Style</li>
              <li>Multisensory, Structured Language Education (MSLE) Using the Barton Reading and Spelling Program</li>
              <li>Games That Make Learning Fun</li>
              <li>Prizes to Reward and Encourage Your Child</li>
              <li>Written Summaries of Each Session</li>
              <li>Extra Practice Pages and Game</li>
            </ul>
          </div>
          <div className="border-r-2 border-black flex items-center pb-10 justify-center ">
            <button
              onClick={() => router.push('/services')}
              className="border-2 w-[400px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-white py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
          <div className="h-[410px] w-full relative border-t-2 border-r-2 border-black ">
            <Image
              src={shotFour}
              layout="fill"
              className="rounded-bl-lg"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default InvestDesktop
