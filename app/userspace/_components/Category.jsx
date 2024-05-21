import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

function Category() {
  return (
   <div className='nb-10 items-center px-5 flex flex-col gap-4'>
  <h2 className="text-3xl font-bold sm:text-4xl">
   Search <span className='text-primary'>doctors near you</span></h2> 
   <h2 className='text-gray-500 text-xl'>Find what you're looking for and book your appointment.</h2>

   <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
                        <Input type="text" placeholder="Search..." />
                        <Button type="submit">
                          <SearchIcon className='h-4 w-4 mr-2'/> 
                          Search</Button>
  </div>



<div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/doc.svg' alt="doc_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >General doctor</label>
</div>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/ear.svg' alt="ear_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >Otologist</label>
</div>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/neuro.svg' alt="neuro_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >Neurologist</label>
</div>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/cardio.svg' alt="cardio_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >Cardiologist</label>
</div>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/baby.svg' alt="baby_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >Pediatrist</label>
</div>

<div className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out '>
 <img src='/eye.svg' alt="eye_icon"
 width={40}
 height={40} />
<label className='text-primary text-bg ' >Ophthalmologist</label>
</div>

</div>













    </div>
  )
}

export default Category