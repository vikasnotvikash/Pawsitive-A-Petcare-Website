import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext)




  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-slate-900 border-b'>My appointments</p>
        <div>
          {doctors.slice(0, 2).map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p>{item.degree}</p>
                <p>{item.experience}</p>
                <p>{item.fees}</p>
                <p className='text-indigo-500'><span className='text-slate-950'>Date & Time : </span>{item.speciality === 'General physician' ? "09 June, 2024 | 8:30 PM" : "24 July, 2024 | 11:30 PM"}</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-slate-800 transition-all duration-1'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white transition-none duration-1'>Cancel appointment</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyAppointments