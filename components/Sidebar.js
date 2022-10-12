import React from 'react'
import Image from 'next/image'
import picOne from "../styles/Website Images/Amanda T  Headshots2.jpg";
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();
  return (
    <div className='h-full relative w-full pb-5'>
        <div className="sticky top-28">
            <h2 className='text-emerald-400 text-4xl italic font-bold text-center pt-5 mb-3'>Meet Amanda</h2>
            <div className="relative h-[450px] w-[350px] mx-auto mt-3 border-2 border-emerald-400 rounded-md shadow-xl ">
                    <Image src={picOne} layout="fill" objectFit="cover" />
                </div>
            <ul className='mx-auto w-fit mt-8 text-center'>
                <li className='font-bold'>Bachelor of Science - University of Southern Indiana</li>
                <li className='font-bold'>Licensed Teacher</li>
                <li className='font-bold'>Ortorn Gillingham Trained</li>
                <li className='font-bold'>Member of International Dyslexia Association</li>
                <li className='font-bold'>LETRS Trained</li>
            </ul>
            <div className="flex items-center justify-center ">
                <button onClick={() => router.push('/contact')} className='border-2 border-black text-center font-bold text-emerald-400 w-[300px] text-xl py-2 rounded-lg shadow-xl mx-auto mt-10  '>Contact Me</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar