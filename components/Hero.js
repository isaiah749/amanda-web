import React from 'react'
import Image from 'next/image'
import exploreBg from '../styles/Website Images/7.jpg'

const Hero = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
        <Image src={exploreBg} layout='fill' objectFit='cover' />
        <div className="absolute top-12 left-0 md:top-[20%] w-[55%] lg:w-[30%] lg:left-[10%] lg:top-[25%] px-2 text-center">
            <p className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl italic">
                Growing magnificent minds, one student at a time
            </p>
        </div>
    </div>
  )
}

export default Hero