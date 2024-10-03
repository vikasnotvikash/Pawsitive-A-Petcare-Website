import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();


    const [showMenu, setshowMenu] = useState(false)
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-5 mb-5 border-b border-b-gray-300'>
            <img onClick={() => {navigate(`/`)}} src={assets.pawsitive} className='sm:w-44 w-36 cursor-pointer' />
            <ul className='hidden md:flex items-start gap-10 font-medium mr-[10%]'>
                <NavLink to='/'>
                    <li className='py-1 tracking-wide'>HOME</li>
                    <hr className='border-none outline-none h-1 rounded-full  bg-primary w-full m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1 tracking-wide'>DOCTORS</li>
                    <hr className='border-none outline-none h-1 rounded-full bg-primary w-full m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1 tracking-wide'>ABOUT</li>
                    <hr className='border-none outline-none h-1 rounded-full bg-primary w-full m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1 tracking-wide'>CONTACT</li>
                    <hr className='border-none outline-none h-1 rounded-full bg-primary w-full m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 h-8 rounded-full' src={assets.my_image}  />
                            <img className='w-2.5'  src={assets.dropdown_icon}  />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        :
                        <button onClick={() => navigate('/login')} className='bg-primary text-slate-900 px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
                }
                <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} />

                {/* Mobile menu */}

                <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"}  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-primary transition-all duration-300`}>
                    <div className='flex items-center justify-between px-5 py-6 bg-white max-w-screen-sm'>
                        <img className='w-36' src={assets.pawsitive}  />
                        <img onClick={() => setshowMenu(false)} src={assets.cross_icon} className='transition-all duration-300 w-7' />
                    </div>
                    <ul className='flex flex-col ml-6 gap-2 mt-8 px-5 text-xl font-medium'>
                        <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setshowMenu(false)} to='/'>Home</NavLink>
                        <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setshowMenu(false)} to='/doctors'>Doctors</NavLink>
                        <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setshowMenu(false)} to='/about'>About</NavLink>
                        <NavLink className='px-4 py-2 rounded inline-block' onClick={() => setshowMenu(false)} to='/contact'>Contact</NavLink>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar