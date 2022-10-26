import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
            </p>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. My name is Facundo Benitez and i am a Web developer. </p>
            </div>
            <div>
                <p>I specialize in creating web applications and websites. Enthusiast to learn and improve my abilities as a developer.</p>
            </div>
            </div>
        </div>
  </div>
  )
}
