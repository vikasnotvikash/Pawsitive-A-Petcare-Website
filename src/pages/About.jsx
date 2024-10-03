import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='sm:mb-[0px] mb-[-24vw]'>

      <div className='text-2xl text-center pt-2 sm:pt-10 text-slate-700 mb-[-13px]'>
        <p>ABOUT <span className='text-slate-950 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-8 sm:gap-12 items-center justify-center'>
        <img className='w-full md:max-w-[360px] rounded-md' src={assets.about_image} />
        <div className='flex flex-col justify-start gap-6 md:w-2/4 text-sm text-slate-700'>
          <p>Welcome to <b>Pawsitive</b>, your trusted partner in pet care and companionship! Our mission is to provide pet owners with the highest quality products, services, and information to ensure their furry friends lead happy, healthy lives. At <b>Pawsitive</b>, we understand that pets are more than just animals—they are beloved members of your family</p>
          <p>That’s why we offer a wide range of services, including expert grooming, nutritious pet food, engaging toys, and reliable pet sitting and walking services. Our team of passionate pet lovers and experienced professionals is dedicated to meeting the unique needs of each pet, from playful puppies to senior cats. We also provide valuable resources and tips on pet health, training, and behavior to help you build a stronger bond with your pet.</p>
          <p>Join our community of pet enthusiasts and discover how <b>Pawsitive</b> can make a positive difference in your pet’s life. Whether you’re a new pet parent or a seasoned owner, we’re here to support you every step of the way. Thank you for choosing <b>Pawsitive</b> where pets are family!</p>
        </div>
      </div>

      <div className='text-xl my-4 flex justify-center items-center'>
        <p className='text-slate-700 font-medium mb-10'>Why Choose Us</p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Empore iusto assumenda iure a adipisci sed repellat laudantium voluptatem labore fugiat minima commodi amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Rerum culpa doloremque quaerat, placeat voluptas reprehenderit.</p>
        </div>
      </div>

    </div>
  )
}

export default About