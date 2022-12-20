import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import picOne from '../styles/Website Images/Amanda T  Headshots-30.jpg'
import ContactForm from '../components/subComponents/ContactForm'

const Contact = () => {
  return (
    <div className="">
      <nav className="">
        <Header />
      </nav>
      {/* Mobile and Tablet */}
      <main className="xl:hidden bg-gradient-to-b from-gray-300 to-emerald-300">
        <section className="h-[100vh] md:h-[75vh] pt-24 md:pt-28 ">
          <h2 className="text-center text-emerald-400 itaic font-bold drop-shadow-lg text-[3rem] md:text-[3.5rem] italic ">
            Lets Chat
          </h2>
          <div className="h-[2px] w-[120px] bg-emerald-400 mx-auto mt-1 drop-shadow-lg mb-5 md:w-[160px] "></div>
          <div className="h-[20rem] flex justify-center ">
            <section className="grid mt-5 grid-cols-1 h-[25rem] md:h-[40rem] w-full relative ">
              <Image src={picOne} layout="fill" objectFit="cover" />
              <div className="absolute top-0 space-y-5 right-0 left-0 md:top-20">
                <ContactForm />
              </div>
            </section>
          </div>
        </section>
      </main>
      {/* Laptop */}
      <section className="hidden xl:block pt-28 h-[100vh]  ">
        <h2 className="text-center text-emerald-400 itaic font-bold drop-shadow-lg text-[3rem] md:text-[4rem] italic ">
          Lets Chat
        </h2>
        <div className="h-[2px] w-[120px] bg-emerald-400 mx-auto mt-1 drop-shadow-lg mb-5 md:w-[160px] "></div>
        <section className="w-full h-[35rem] flex items-center  justify-center bg-gradient-to-b from-gray-300 to-emerald-300 ">
          <div className="w-[35%] ">
            <div className="relative h-[35rem] ">
              <Image src={picOne} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="w-[35%] bg-white border-2 border-black rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </section>
      </section>
      <footer className="xl:-mt-[7rem]">
        <Footer />
      </footer>
    </div>
  )
}

export default Contact
