import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

            {/* left side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-slate-700 font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Arrange a meeting  <br />  with a reputable physician.
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-slate-700 text-sm font-normal'>
                    <img src={assets.group_profiles} className='w-28' />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />  schedule your appointment hassle-free.</p>
                </div>
                <a href="#speciality"  className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book an Appointment <img className='w-3' src={assets.arrow_icon} />
                </a>
            </div>


            {/* right side */}
            <div className='md:w-1/2 relative'>
                <img src={assets.header_img} className='w-full md:absolute bottom-0 auto rounded-lg' />
            </div>
        </div>
    )
}

export default Header