import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setfilterDoc] = useState(doctors)
  const [showfilter, setShowFilter] = useState(false)
  const navigate = useNavigate(); 

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality))
    }
    else {
      setfilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  return (
    <div>
      <p className='text-slate-700 pl-1 text-lg font-medium'>Browse through the doctors specialist.</p>
      <div className='flex flex-col items-start sm:flex-row'>
        <button className={`py-1 mt-4 px-8 border rounded text-sm transition-all duration-150 sm:hidden ${showfilter ? "bg-primary text-slate-900" : ""}`} onClick={() => setShowFilter(prev => !prev)}>Filter</button>
        <div className={`w-[25vw] flex flex-col gap-2 text-sm text-slate-700 mt-5 sm:mr-[2%] ${showfilter ? 'flex' : 'hidden sm:flex'} `}>
          <p onClick={() => speciality === 'Dermatologist' ? navigate(`/doctors`) : navigate(`/doctors/Dermatologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer ${speciality === "Dermatologist" ? "text-black bg-indigo-100" : ""}`} >Dermatologist</p>
          <p onClick={() => speciality === 'Pathologist' ? navigate(`/doctors`) : navigate(`/doctors/Pathologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer ${speciality === "Pathologist" ? "text-black bg-indigo-100" : ""}`} >Pathologist</p>
          <p onClick={() => speciality === 'Radiologist' ? navigate(`/doctors`) : navigate(`/doctors/Radiologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer  ${speciality === "Radiologist" ? "text-black bg-indigo-100" : ""}`} >Radiologist</p>
          <p onClick={() => speciality === 'Oncologist' ? navigate(`/doctors`) : navigate(`/doctors/Oncologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer  ${speciality === "Oncologist" ? "text-black bg-indigo-100" : ""}`} >Oncologist</p>
          <p onClick={() => speciality === 'Ophthalmologist' ? navigate(`/doctors`) : navigate(`/doctors/Ophthalmologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer  ${speciality === "Ophthalmologist" ? "text-black bg-indigo-100" : ""}`} >Ophthalmologist</p>
          <p onClick={() => speciality === 'Cardiologist' ? navigate(`/doctors`) : navigate(`/doctors/Cardiologist`)}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 rounded-lg transition-all cursor-pointer  ${speciality === "Cardiologist" ? "text-black bg-indigo-100" : ""}`} >Cardiologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 mt-5'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index}
                className='border border-blue-200 rounded-xl overflow-hidden 
                cursor-pointer hover:translate-y-[-10px] transition-all duration-1'>
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
      </div>
    </div>
  )
}

export default Doctors