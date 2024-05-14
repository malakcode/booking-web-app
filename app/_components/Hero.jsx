import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src="/doctors.jpg"
            width={800}
            height={800}
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Introducing Check Up </h2>
          
          <p className="mt-4 text-gray-600 ">
          Your personalized healthcare companion. With our user-friendly interface, booking doctor's 
          appointments has never been easier. Say goodbye to waiting on hold and hello to hassle-free scheduling.
           Whether it's a routine check-up or an urgent consultation, manage your health on your terms, 
           right from your fingertips. Experience convenience and peace of mind with Check Up.
          </p>
          
     <div className='px-4 py-8'> 
        <Button >Explore More</Button>
   </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero