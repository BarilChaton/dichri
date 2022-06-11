import React from 'react'
import {Link} from 'react-scroll'
import Logo from '../assets/Logo/Logo.png'
import {GiFlowerTwirl} from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 border-y-4 border-[#5ce1e6] bg-[#2b8894]'>
            <div className='mt-[87px] -ml-[22px]'>
                <a href="/"><img src={Logo} alt="Logo image" style={{width: '175px'}} className='hover:scale-110 duration-300' /></a>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex justify-between items-center gap-[30px]'>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Hem
                </Link>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Nyheter
                </Link>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Produkter
                </Link>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Information
                </Link>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Vilka Material?
                </Link>
                </li>
                <div className='text-[#5ce1e6] animate-spin-slow'>
                    <GiFlowerTwirl />
                </div>
                <li className='text-2xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
                <Link to="hero" smooth={true} duration={500}>
                    Frågor och Svar
                </Link>
                </li>
            </ul>

        
        </div>
        {/* Panel under menu */}
        <div className='fixed flex flex-col-2 right-0 top-[90px] w-[60%] h-[35px] rounded-bl-full place-items-center justify-center gap-[15%] bg-blue-300 text-white'>
            <p>Mysighet galore!</p>
            <ul className='flex gap-6'>
                <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />Allt handgjort av mig!</li>
                <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />100% återvunnen tråd!</li>
                <li className='flex place-items-center'><AiOutlineCheckCircle className='mx-2' />Högsta kvalite!</li>
            </ul>
        </div>
    </div>
  )
}


export default Navbar