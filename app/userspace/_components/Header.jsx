import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'



function Header() {
  const Menu=[
    {
      id:1,
      name:'Home',
      path:'/userspace/'
    },
    {
      id:2,
      name:'Explore',
      path:'/userspace/Explore'
    },
    {
      id:3,
      name:'Contact Us',
      path:'/userspace/Contact'
    },
  ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.png' alt='logo' width={180} height={80}/>
        <ul className='md:flex gap-8 hidden'>
          {Menu.map((item,index)=>(
      
      <Link href={item.path}>
            <li  className='hover:text-primary
            cursor-pointer hover:scale-105
            transition-all ease-in-out'
            >{item.name}</li>
       </Link>
          ))}
        </ul>
        </div>

        <Link href='/'>
       <Button>Logout</Button>
       </Link>
     </div>
  )
}

export default Header

