import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import picOne from '../styles/Website Images/frederickdouglass.png'
import picTwo from '../styles/Website Images/8.jpg'
import picThree from '../styles/Website Images/14.jpg'
import picFour from '../styles/Website Images/14.jpg'
import Footer from '../components/Footer'

const AboutDyslexia = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      {/* Mobile */}
      <main className="pt-28 pb-10 xl:hidden ">
        <h2 className="font-bold text-4xl italic text-emerald-400 mt-5 text-center backdrop-shadow-lg ">
          What is Dyslexia?
        </h2>
        <section className="flex flex-col items-center justify-center md:flex-row md:justify-evenly mt-5">
          <div className="border-2 border-black rounded-lg h-[fit-content] md:h-[30rem] pb-5 w-[20rem] shadow-xl ">
            <div className="relative h-[10rem]">
              <Image
                src={picOne}
                layout="fill"
                className="rounded-t-md"
                objectFit="cover"
              />
            </div>
            <p className="px-2 mt-3 text-center">
              <span className="text-emerald-400 font-bold">
                Dyslexia is a specific learning disability which is neurological
                in origin
              </span>
              . People with dyslexia struggle to read and spell. They have a
              hard time processing the sounds of letter to make them into words.{' '}
              <span className="font-bold text-emerald-400">
                Dyslexia affects 15-20%{' '}
              </span>
              of the population in some way and is hereditary.
            </p>
            <div className="flex items-center flex-col justify-center text-emerald-400">
              <h4 className="text-xl uppercase italic font-bold">That means</h4>
              <span className="text-3xl font-semibold">1 in 5</span>
              <p className="font-semibold">people have it</p>
            </div>
          </div>

          <div className="border-2 border-black rounded-lg h-[fit-content] md:h-[30rem] pb-5 w-[20rem] shadow-xl mt-10 md:mt-0 ">
            <p className="px-2 mt-3 text-center">
              <span className="font-bold text-emerald-400">
                Early identification is key
              </span>
              , and dyslexia can be screened for as early as preschool. Students
              with dyslexia can learn to read and spell through{' '}
              <span className="uppercase font-bold text-emerald-400 block ">
                structured literacy instruction
              </span>{' '}
              This means that teaching techniques are evidence based and{' '}
              <span className="font-bold text-emerald-400">multi-sensory</span>.
              They are explicit, direct, cumulative, intensive, and focused on
              the structure of language.
            </p>
            <div className="relative h-[10rem] mt-2">
              <Image
                src={picTwo}
                layout="fill"
                className="rounded-t-md"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        <h2 className="font-bold text-4xl italic text-red-500 mt-5 text-center backdrop-shadow-lg ">
          What Dyslexia Is Not
        </h2>
        <section className="flex flex-col items-center justify-center md:flex-row md:justify-evenly mt-5">
          <div className="border-2 border-black rounded-lg h-[fit-content] md:h-[30rem] pb-5 w-[20rem] shadow-xl ">
            <div className="relative h-[10rem]">
              <Image
                src={picThree}
                layout="fill"
                className="rounded-t-md"
                objectFit="cover"
              />
            </div>
            <p className="px-2 mt-3 text-center">
              <span className="text-red-500 font-bold">
                Dyslexia is <span className="uppercase">Not</span> a problem of
                intelligence
              </span>
              . Kids with dyslexia are just as smart as their peers.{' '}
              <span className="font-bold text-emerald-400">
                Many are gifted artistically, athletically, and scientifically
              </span>
              .{' '}
              <span className="font-bold text-red-500">
                Dyslexia is <span className="uppercase">Not</span> a vision
                problem or reading backwards
              </span>
              . You can&apos;t out grow dyslexia, but with{' '}
              <span className="text-emerald-400 font-bold">
                early intervention
              </span>{' '}
              and{' '}
              <span className="text-emerald-400 font-bold">
                appropiate accommodations
              </span>{' '}
              literacy outcomes greatly improve.
            </p>
          </div>

          <div className="border-2 border-black rounded-lg h-[fit-content] md:h-[30rem] pb-5 w-[20rem] shadow-xl mt-10 md:mt-0 ">
            <p className="px-2 mt-3 text-center">
              <span className="font-bold text-emerald-400">
                Early identification is key
              </span>
              , and dyslexia can be screened for as early as preschool. Students
              with dyslexia can learn to read and spell through{' '}
              <span className="uppercase font-bold text-emerald-400 block ">
                structured literacy instruction
              </span>{' '}
              This means that teaching techniques are evidence based and{' '}
              <span className="font-bold text-emerald-400">multi-sensory</span>.
              They are explicit, direct, cumulative, intensive, and focused on
              the structure of language.
            </p>
            <div className="relative h-[10rem] mt-2">
              <Image
                src={picFour}
                layout="fill"
                className="rounded-t-md"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
      {/* Desktop */}
      <section className="pt-28 hidden xl:block">
        <div className="h-[max-content] py-10 flex items-center justify-center ">
          <div className="h-[24rem] w-[35rem] border-2 border-black shadow-xl bg-white rounded-lg relative mr-20 ">
            <Image src={picOne} layout="fill" objectFit="cover" />
          </div>
          <div className="h-[24rem] w-[35rem] border-2 border-black shadow-xl bg-white rounded-lg flex items-center justify-center ">
            <div className="">
              <h2 className="font-bold text-5xl italic text-emerald-400 mt-5 text-center backdrop-shadow-lg ">
                What is Dyslexia?
              </h2>
              <p className="px-4 mt-3 text-center text-lg ">
                <span className="text-emerald-400 font-bold">
                  Dyslexia is a specific learning disability which is
                  neurological in origin
                </span>
                . People with dyslexia struggle to read and spell. They have a
                hard time processing the sounds of letter to make them into
                words.{' '}
                <span className="font-bold text-emerald-400">
                  Dyslexia affects 15-20%{' '}
                </span>
                of the population in some way and is hereditary.
              </p>
              <div className="flex items-center flex-col justify-center text-emerald-400">
                <h4 className="text-3xl uppercase italic font-bold">
                  That means
                </h4>
                <span className="text-5xl font-semibold">1 in 5</span>
                <p className="font-semibold mt-2 text-xl">people have it</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[max-content] py-10 flex flex-row-reverse items-center justify-center ">
          <div className="h-[24rem] w-[35rem] border-2 border-black shadow-xl bg-white rounded-lg relative ml-20 ">
            <Image src={picFour} layout="fill" className='rounded-lg' objectFit="cover" />
          </div>
          <div className="h-[24rem] w-[35rem] border-2 border-black shadow-xl bg-white rounded-lg flex items-center justify-center ">
            <div className="">
              <h2 className="font-bold text-5xl italic text-red-500 mt-5 text-center backdrop-shadow-lg ">
                What Is Not
              </h2>
              <p className="px-5 mt-3 text-center">
              <span className="text-red-500 font-bold">
                Dyslexia is <span className="uppercase">Not</span> a problem of
                intelligence
              </span>
              . Kids with dyslexia are just as smart as their peers.{' '}
              <span className="font-bold text-emerald-400">
                Many are gifted artistically, athletically, and scientifically
              </span>
              .{' '}
              <span className="font-bold text-red-500">
                Dyslexia is <span className="uppercase">Not</span> a vision
                problem or reading backwards
              </span>
              . You can&apos;t out grow dyslexia, but with{' '}
              <span className="text-emerald-400 font-bold">
                early intervention
              </span>{' '}
              and{' '}
              <span className="text-emerald-400 font-bold">
                appropiate accommodations
              </span>{' '}
              literacy outcomes greatly improve.
            </p>
            <p className="px-2 mt-3 text-center">
              <span className="font-bold text-emerald-400">
                Early identification is key
              </span>
              , and dyslexia can be screened for as early as preschool. Students
              with dyslexia can learn to read and spell through{' '}
              <span className="uppercase font-bold text-emerald-400 block ">
                structured literacy instruction
              </span>{' '}
              This means that teaching techniques are evidence based and{' '}
              <span className="font-bold text-emerald-400">multi-sensory</span>.
              They are explicit, direct, cumulative, intensive, and focused on
              the structure of language.
            </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AboutDyslexia
