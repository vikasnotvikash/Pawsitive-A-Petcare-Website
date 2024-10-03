import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docID }) => {

    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDocs] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docID)
            setRelDocs(doctorData);

        }

    }, [doctors, docID, speciality])


    return relDoc && ( 
        <div className='flex flex-col items-center gap-4 my-0 sm:my-2 text-slate-700 sm:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our entensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-7 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-1'>
                        <img className='bg-blue-50' src={item.image} />
                        <div className='p-4'>
                            <div className='flex items-center text-center gap-2 text-sm text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-slate-700 text-lg font-medium'>{item.name}</p>
                            <p className='text-slate-500 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate(`/doctors`); scrollTo(0, 0) }} className='bg-blue-50 text-slate-700 px-10 py-3 rounded-full mt-10'>more</button>
        </div>
    )  
}

export default RelatedDoctors