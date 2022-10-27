import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'
import shotOne from '../styles/Website Images/15.jpg'
import shotTwo from '../styles/Website Images/dys-warning-signs.png'
import Footer from '../components/Footer'

const Resources = () => {
  return (
    <div className='h-[max-content]'>
        <nav>
            <Header />
        </nav>
            <div className="relative w-full mt-20 lg:mt-28 h-[250px] md:h-[400px] xl:h-[550px] ">
                <Image src={shotOne} layout='fill' objectFit='cover' />
                <h2 className="absolute top-1/3 text-center w-full left-0 right-0 mx-auto text-emerald-400 italic drop-shadow-xl font-bold text-3xl md:text-4xl xl:text-5xl">Helpful Resources</h2>
            </div>
        <main className="py-5 mx-auto px-5 md:py-10 flex items-center justify-center ">
            <div>
            <h3 className="font-bold text-xl underline underline-offset-2 md:text-2xl ">Links</h3>
            <ul className="list-none mt-2 space-y-2">
                <Link href={'https://www.dyslexiaida.org'}>
                    <li className='helpful-resource-link'>International Dyslexia Association</li>
                </Link>
                <Link href={'https://understood.org'}>
                    <li className='helpful-resource-link'>Understood for All Inc.</li>
                </Link>
                <Link href={'https://www.dyslexia.yale.edu'}>
                    <li className='helpful-resource-link'>The Yale Center for Dyslexia and Creativity</li>
                </Link>
                <Link href={'https://www.brightsolutions.us'}>
                    <li className='helpful-resource-link'>Bright Solutions for Dyslexia</li>
                </Link>
                <Link href={'https://www.bartonreading.com'}>
                    <li className='helpful-resource-link'>Barton Reading & Spelling System</li>
                </Link>
                <Link href={'https://www.ortonacademy.org'}>
                    <li className='helpful-resource-link'>Orton Gillingham Academy</li>
                </Link>
                <Link href={'https://www.learningally.org'}>
                    <li className='helpful-resource-link'>Learning Ally (audiobooks)</li>
                </Link>
            </ul>            
            </div>
        </main>


        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Resources