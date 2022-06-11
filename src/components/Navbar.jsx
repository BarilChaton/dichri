import React from 'react'
import {Link} from 'react-scroll'
import Logo from '../assets/Logo/Logo.png'
import {GiFlowerTwirl} from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 border-y-8 border-[#5ce1e6] bg-[#2b8894]'>
        <div className='mt-[100px] -ml-[20px]'>
            <img src={Logo} alt="Logo image" style={{width: '175px'}} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex justify-between items-center gap-[30px]'>
            <li className='font-bold text-3xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
            <Link to="hero" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <div className='text-[#5ce1e6] animate-spin-slow'>
                <GiFlowerTwirl />
            </div>
            <li className='font-bold text-3xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
            <Link to="hero" smooth={true} duration={500}>
                Listings
            </Link>
            </li>
            <div className='text-[#5ce1e6] animate-spin-slow'>
                <GiFlowerTwirl />
            </div>
            <li className='font-bold text-3xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
            <Link to="hero" smooth={true} duration={500}>
                Info
            </Link>
            </li>
            <div className='text-[#5ce1e6] animate-spin-slow'>
                <GiFlowerTwirl />
            </div>
            <li className='font-bold text-3xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
            <Link to="hero" smooth={true} duration={500}>
                Used Materials
            </Link>
            </li>
            <div className='text-[#5ce1e6] animate-spin-slow'>
                <GiFlowerTwirl />
            </div>
            <li className='font-bold text-3xl text-[#5ce1e6] hover:border-y-2 p-1 rounded-lg hover:text-white duration-100'>
            <Link to="hero" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar