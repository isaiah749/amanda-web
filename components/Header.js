import React, { useState } from 'react'
import logo from '../styles/Website Images/MagnificentMindsTutoring[No Background].png'
import Image from 'next/image'
import menuIcon from '../styles/Icons/menu-icon.svg'
import { useRouter } from 'next/router'

const Header = () => {

    let [open,setOpen] = useState(false);
    let router = useRouter();


  return (
    <div className='shadow-md z-[200000] w-full fixed top-0 left-0'>
      <div className='flex items-center justify-between bg-gradient-to-b bg-gray-200 from-emerald-300 to-transparent py-2 md:px-10 px-2'>
          <a href="/">
                <div className='font-bold text-2xl cursor-pointer flex items-center '>
                    <span className='mr-1 pt-2 md:hidden'>
                        <Image src={logo} alt='logo' height={60} width={70} />
                    </span>
                    <span className='mr-1 pt-2 hidden md:block'>
                        <Image src={logo} alt='logo' height={80} width={100} />
                    </span>
                    <div className="text-2xl md:text-4xl italic text-black name-font md:ml-2 font-semibold">Magnificent Minds</div>
                </div>
            </a>
      
            <div onClick={()=>setOpen(!open)} className='cursor-pointer mt-[12px] w-[fit-content] hide-menu'>
                <Image src={menuIcon} height={30} width={30} name={open ? 'close':'menu'} />
            </div>

            <ul className={`pb-5 absolute pt-12 bg-white xl:bg-transparent z-[-1] left-0 w-full desktop-nav pl-2 transition-all duration-500 ease-in md:pt-20 ${open ? 'top-10 ':'top-[-490px]'}`}>
    
                <a  className="md:ml-5 text-lg lg:text-xl ">
                    <li onClick={() => router.push('/')} className="text-emerald-600  hover:text-emerald-400 font-semibold mt-2  md:mt-2 lg:mt-0 cursor-pointer md:text-2xl lg:text-xl  duration-500 ">Home</li>
                </a>
            
                <a className="md:ml-5 text-lg lg:text-xl my-7 ">
                    <li onClick={() => router.push('/about')} className="text-emerald-600  hover:text-emerald-400 font-semibold my-7 md:my-2 md:text-2xl lg:text-xl lg:my-0 cursor-pointer duration-500 ">About</li>
                </a>
    
                <a className="md:ml-5 text-lg lg:text-xl my-7 ">
                    <li onClick={() => router.push('/services')} className="text-emerald-600  hover:text-emerald-400 font-semibold my-7 md:text-2xl lg:text-xl md:my-2 lg:my-0 cursor-pointer duration-500 ">Services</li>
                </a>
    
                <a className="md:ml-5 text-lg lg:text-xl my-7 ">
                    <li onClick={() => router.push('/contact')} className="text-emerald-600  hover:text-emerald-400 font-semibold my-7 md:text-2xl lg:text-xl md:my-2 lg:my-0 cursor-pointer mr-5 duration-500 ">Contact</li>
                </a>
    
                {/* <button className="border-2 cursor-pointer border-yellow-400 py-2 px-3 font-semibold hover:bg-yellow-400 hover:text-black duration-500 mt-5 lg:mt-0 text-yellow-400">Contact me</button> */}
    
            </ul>
        </div>
    </div>
  )
}

export default Header