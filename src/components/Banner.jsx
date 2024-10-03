import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();



  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
        {/* left side banner */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700'>
                <p className=''>Book Appointment</p>
                <p className='sm:mt-2 m-0'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={() => { navigate(`/login`); scrollTo(0,0)}} className='bg-white text-[13px] sm:text-base text-slate-700 px-4 md:px-8 py-1 md:py-2 rounded-full mt-4 sm:mt-6 hover:scale-105 transition-all duration-1'>Create Account</button>
        </div>


        {/* right side banner */}
        <div className='w-40 md:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img}  />
        </div>
    </div>
  )
}

export default Banner