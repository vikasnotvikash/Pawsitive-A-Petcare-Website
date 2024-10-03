import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* left section */}
                <div>
                    <img className='mb-5 w-40' src={assets.pawsitive} />
                    <p className='w-full md:2/3 text-slate-700 leading-loose sm:text-lg text-[14px] sm:ml-[1.5%] ml-[3%]'>Caring for your pets like family, every step of the way.</p>
                </div>

                {/* center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-slate-700 cursor-pointer'>
                        {["Home","About Us","Contact Us","Privacy Policy"].map((item,index)=> 
                        (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul>
                        {["+1-234-987-789","pawsitivepetcare@gmail.com"].map((item,index)=> (
                            <li className='flex flex-col text-slate-700 cursor-pointer gap-2 mb-1.5' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright section */}
            <div>
                <hr />
                <p className='py-6 text-sm text-center'>Copyright 2024@ Pawsitive - A Pet Care Website | All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer