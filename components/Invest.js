import React from 'react'
import Image from 'next/image'
import shotOne from '../styles/Website Images/Amanda T  Headshots-57.jpg'
import shotTwo from '../styles/Website Images/5.jpg'
import shotThree from '../styles/Website Images/Amanda T  Headshots-28.jpg'
import shotFour from '../styles/Website Images/3.jpg'
import { useRouter } from 'next/router'
const Invest = () => {
  const router = useRouter()

  return (
    <div className="py-5 bg-gradient-to-b bg-gray-200 from-emerald-300 to-transparent">
      <div className="md:flex-col items-center ">
        <div className="md:flex md:ml-5 items-center md:flex-row-reverse">
          <div className="flex flex-col ">
            <h1 className="text-4xl font-bold text-center w-[fit-content] mx-auto drop-shadow-lg md:text-[2.5rem] md:mr-2 ">
              Does your child struggle with reading or spelling?
            </h1>
            <div className="hidden md:block relative h-[280px] w-[320px] rounded-md shadow-lg -ml-1 md:mx-auto md:mt-5 mt-3 border-2 border-black bg-white  ">
              <Image src={shotThree} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="border-2 border-black bg-white h-[fit-content] w-[365px] md:w-[400px] px-2 mx-auto rounded-md pb-8 mt-5 ">
            <div className="relative h-[250px] mx-auto">
              <Image src={shotOne} layout="fill" objectFit="contain" />
            </div>
            <p className="text-md w-[350px] text-center mx-auto mt-2 ">
              As a teacher and dyslexia tutor, I am passionate about helping
              students gain confidence in their reading ability and develop a
              love for literacy.
            </p>
            <button
              onClick={() => router.push('/services')}
              className="border-2 w-[200px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-black py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:flex md:mr-5 items-center md:flex-row">
          <div className="flex flex-col ">
            <div className="hidden md:block relative h-[280px] w-[320px] rounded-md shadow-lg -ml-1 md:mx-auto md:mt-5 mt-3 border-2 border-black bg-white  ">
              <Image src={shotFour} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="border-2 border-black bg-white h-[fit-content] w-[365px] md:w-[400px] px-2 mx-auto rounded-md pb-8 mt-5 ">
            <div className="relative h-[250px] mx-auto">
              <Image src={shotTwo} layout="fill" objectFit="contain" />
            </div>
            <div className="">
              <ul className='text-base w-[75%] mx-auto list-disc '>
                <li>
                  One-on-One Tutoring That Adapts to Your Child’s Pace, Needs,
                  and Learning Style
                </li>
                <li>
                  Multisensory, Structured Language Education (MSLE) Using the
                  Barton Reading and Spelling Program
                </li>
                <li>Games That Make Learning Fun</li>
                <li>Prizes to Reward and Encourage Your Child</li>
                <li>Written Summaries of Each Session</li>
                <li>Extra Practice Pages and Game</li>
              </ul>
            </div>
            <button
              onClick={() => router.push('/services')}
              className="border-2 w-[200px] border-black flex items-center justify-center mx-auto text-emerald-400 bg-black py-2 mt-5 font-semibold rounded-md shadow-lg hover:scale-105 active:scale-75 transition-all duration-500 ease-in-out hover:bg-emerald-400 hover:text-black md:text-lg "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest
