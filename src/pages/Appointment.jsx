import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {


  let daysofWeek = ['SUN', 'MON' , 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const { docID } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);


  const [docInfo, setdocInfo] = useState([])
  const [docSlots, setDocSlots] = useState([])
  const [sloTIndex, setSloTIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')


  // fetchDocInfo: An asynchronous function that:
  // Finds the doctor with the matching docID from the doctors array.
  // Updates the docInfo state with the found doctor’s information.

  const fetchDocInfo = async () => {
    let docInfo = await doctors.find((doc) => doc._id === docID);
    setdocInfo(docInfo);
  }

  // getAvailableSlots: An asynchronous function that:
  // Clears the previous slots by setting docSlots to an empty array.
  // Gets the current date and time.
  const getAvailableSlots = async () => { 

    setDocSlots([])

    //getting current date
    let today = new Date();

    // Loop: Iterates over the next 7 days.

    for (let i = 0; i < 7; i++ ) {

      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endtime = new Date();

      //endtime: Sets the end time for each day to 9 PM.
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0);


      //Adjusting Start Time for Today
      //setting hours 

      // If the dates are the same:
      // Set the hours:
      // If the current hour is greater than 10, increase it by 1.
      // Otherwise, set it to 10.
      // Set the minutes:
      // If the current minutes are greater than 30, set them to 30.
      // Otherwise, set them to 0.

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        //add slot to array 
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        })
        

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docID])

  useEffect(() => {
    getAvailableSlots();
  }, [docID])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])
   
  return docInfo && ( 
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>

        {/* doctor image */}

        <div>
          <img className='w-full sm:max-w-72 bg-primary rounded-lg' src={docInfo.image} />
        </div>

        {/* doctor name, degree , speciality and experience */}

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-0 sm:mt-0'>
          <p className='flex items-center gap-2 font-medium text-xl sm:text-2xl text-slate-700'>{docInfo.name}
            <img className='w-3 sm:w-4' src={assets.verified_icon} />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-slte-700'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-3 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>

          {/* doctor about section */}

          <div>
            <p className='flex items-center gap-2 text-sm font-medium text-gray-900 mt-2 mb-2'>
              About <img src={assets.info_icon} />
            </p>
            <p className='text-sm text-slate-800 max-w-[700px]'>{docInfo.about}</p>
          </div>
          <p className='mt-5 text-slate-700 font-medium'>Appointment fee : <span className='text-slate-700'> {currencySymbol}&nbsp;{docInfo.fees} </span></p>
        </div>

      </div>

      {/* Booking slots */}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-slate-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index) => (
              <div onClick={()=> setSloTIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${sloTIndex === index ? 'bg-primary' : 'border border-slate-300'}`} key={index}>
                <p>{item[0] && daysofWeek[item[0].datetime.getDate()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[sloTIndex].map((item,index)=> (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-slate-700' : 'text-slate-500 border border-gray-300'}`} key={index}>{item.time.toLowerCase()}</p>
          ))}
        </div>
        <button className='bg-primary text-slate-950 text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>


      {/* listing related doctors */}

      <RelatedDoctors docID={docID} speciality={docInfo.speciality} />

    </div>
  )
}

export default Appointment