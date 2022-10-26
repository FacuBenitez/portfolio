import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/CV.pdf';
import GitHub from '../assets/github.png';

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-96 bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='mx-auto mb-4'>

            <h1 className='text-5xl text-center border-b-4 border-pink-600 inline'>Let's Get in Touch</h1>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md flex justify-center flex-col items-center shadow-[#040c16] hover:scale-110 duration-500'>
                   <a href='https://www.linkedin.com/in/facundo-martin-benitez'>

                      <FaLinkedin
                          size={72}
                        />
                        Linkedin
                   </a> 
                  </div>
                <div className='shadow-md flex justify-center flex-col items-center shadow-[#040c16] hover:scale-110 duration-500'>
                    <a href='mailto:facu98ben@gmail.com'>
                      <HiOutlineMail
                      size={72}
                    />
                    Email
                    </a>
                  </div>
                <div className='shadow-md flex justify-center flex-col items-center shadow-[#040c16] hover:scale-110 duration-500'>
                    <a href={CV} target='_blank'>
                    <BsFillPersonLinesFill
                      size={72}
                    />
                    Download CV
                    </a>
                  </div>

              </div>

          </div> 
    </div>
  )
}
