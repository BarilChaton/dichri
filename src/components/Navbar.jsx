import React, { useState } from 'react'
import Logo from '../assets/Logo/Logo.png'
import {GiFlowerTwirl, GiHamburgerMenu} from "react-icons/gi";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div>
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 border-y-4 border-[#5ce1e6] bg-[#2b8894] z-[100]'>
            <div>
                <a href="/"><img src={Logo} alt="Logo image" style={{width: '175px'}} className='absolute -mt-[45px] -ml-[22px] hover:scale-110 duration-300 z-10' /></a>
            </div>

            {/* Menu */}
            <ul className='hidden xl:flex justify-between items-center gap-[30px]'>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/">Hem</a>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/News">Nyheter</a>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/">Produkter</a>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/">Information</a>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/">Vilka Material?</a>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-lg text-[#5ce1e6] hover:border-y-2 p-1 hover:text-white duration-100'>
                    <a href="/">Frågor & Svar</a>
                </li>
            </ul>

            {/* Panel under menu */}
            <div className='hidden xl:flex fixed flex-col-2 right-0 top-[90px] w-[1000px] h-[35px] rounded-bl-full place-items-center justify-center gap-[15%] bg-blue-300 text-white'>
                <p>Mysighet galore!</p>
                <ul className='flex gap-6'>
                    <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />Allt handgjort av mig!</li>
                    <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />100% återvunnen tråd!</li>
                    <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />Högsta kvalite!</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='lg:hidden absolute right-3 scale-150 text-white z-10'>
                {!nav ? <MdMenu /> : <MdMenuOpen />}
            </div>

            {/* Mobile Menu */}
            <div className='lg:hidden'>
                <ul className={!nav ? 'scale-x-0 ease-out duration-150 fixed top-[90px] left-0 w-screen h-screen rounded-lg bg-blue-300 flex flex-col place-content-center items-center' :
                                      'scale-x-100 ease-in duration-150 fixed top-[90px] left-0 w-screen h-screen rounded-lg bg-blue-300 flex flex-col place-content-center items-center'}>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/">Hem</a>
                    </li>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/News">Nyheter</a>
                    </li>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/">Produkter</a>
                    </li>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/">Information</a>
                    </li>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/">Vilka Material?</a>
                    </li>
                    <li className='text-3xl text-white border-2 mb-6 rounded-lg bg-[#2b8894] p-3'>
                        <a href="/">Frågor & Svar</a>
                    </li>
                </ul>
                
            </div>
            
        
        </div>
    </div>
  )
}


export default Navbar