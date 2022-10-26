import React, { useState } from 'react'
import {FaBars, FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Navbar = () => {
    
const [nav, setNav] = useState(false)  

  const handleClick = () => {
    setNav(!nav)
  }

    return (
    <div className='w-screen h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
        <div className='text-3xl text-[#F47C7C]'>
          FB
        </div>

        <ul className='hidden md:flex '>
            <li>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='work' smooth={true} duration={500}>
                Works
              </Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {
              !nav ? <FaBars className='text-3xl'/> : <FaTimes className='text-3xl'/>
            }
        </div>

        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center gap-8'}>
            <li className='text-4xl'>Home</li>
            <li className='text-4xl'>About</li>
            <li className='text-4xl'>Skills</li>
            <li className='text-4xl'>Works</li>
            <li className='text-4xl'>Contact</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/facundo-martin-benitez'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/FacuBenitez'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:facu98ben@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
          
    </div>
  )
}
