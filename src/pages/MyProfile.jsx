import React, { useState } from 'react'
import { assets } from '../assets/assets';

const MyProfile = () => {


  const [userData, setUserData] = useState({
    name: 'Vikas Tripathi',
    image: assets.my_image,
    email: 'vikastripathi9867@gmail.com',
    phone: '8948545798',
    address: 'Premnagar, Dehardun, Uttarakhand, INDIA',
    gender: 'Male',
    dob: '2000-01-01',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img src={userData.image} className='w-36 rounded' />
      {
        isEdit ?
          <input className='bg-slate-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          :
          <p className='font-medium text-3xl text-neutral-800 mt-4'> {userData.name} </p>
      }

      <hr className='bg-slate-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Info.</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id - </p>
          <p className='text-blue-500 underline'>{userData.email}</p>
          <p className='font-medium'>Phone - </p>
          {
            isEdit ?
              <input type="text" className='bg-gray-100 max-w-52' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              :
              <p className='text-blue-500'> {userData.phone} </p>
          }
          <p className='font-medium'>Address - </p>
          {
            isEdit ? 
            <p>
              <input className='bg-gray-50' type="text" value={userData.address} onChange={(e) => setUserData(prev => ({...prev,address:e.target.value}))} />
              <br />
            </p>
            :
            <p className='text-gray-500'>
              {userData.address}
            </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>Basic information </p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender - </p>
          {
            isEdit ? 
            <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            :
            <p className='text-gray-500'>{userData.gender}</p>
          }
          <p className='font-medium'>DOB - </p>
          {
            isEdit ? 
            <input type="date" className='bg-gray-50 max-w-28' value={userData.dob} onChange={(e) => setUserData(prev => ({...prev, dob:e.target.value}))} />
            :
            <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10 '>
        {
          isEdit ? 
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-slate-900 transition-all duration-1' onClick={() => setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-slate-900 transition-all duration-1' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile