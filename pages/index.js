import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Invest from '../components/Invest'
import InvestDesktop from '../components/InvestDesktop'
import PSA from '../components/PSA'
import PSADesktop from '../components/PSADesktop'
import ProfessionalCard from '../components/subComponents/ProfessionalCard'

export default function Home() {
  return (
    <div className="md:scrollbar md:scrollbar-track-gray-400/20 md:overflow-y-scroll md:scrollbar-thumb-emerald-400 ">
      <section className="realtive top-0 ">
        <Header />
      </section>

      <section className='mt-[88px]'>
        <Hero />
      </section>
      <div className="xl:hidden">
        <section className="bg-white h-[fit-content] pb-5 ">
          <Invest />
        </section>

        <section className='bg-white'>
          <PSA />
        </section>
      </div>
      <div className="hidden xl:block">
        <InvestDesktop />
        <PSADesktop />
      </div>

      <footer className="h-[max-content] bg-gradient-to-b from-gray-300 to-emerald-300 text-black ">
        <Footer />
      </footer>

    </div>
  )
}
