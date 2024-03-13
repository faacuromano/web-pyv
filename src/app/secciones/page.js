import Image from 'next/image'
import React from 'react'
import image from '@/../public/gm.jpg'
const page = () => {
  return (
    <div className='h-dvh w-dvw px-20'>

      <h1 className='text-4xl text-cyan-900 p-8 w-full text-center'> NOMBRE DE LA RAMA </h1>

      <div className='w-full flex flex-col pb-8 items-center'>
        <h3 className='text-xl w-2/3 text-left'>
          Una descripcion de las actividades, la organizacion, ideas, objetivos, etc. 
        </h3>
        <h3 className='text-xl w-2/3 text-left'>
        La idea es poder explicar brevemente de que se trata para dar introduccion a las imagenes de las actividades
          Una descripcion de las actividades, la organizacion, ideas, objetivos, etc. La idea es poder explicar brevemente de que se trata para dar introduccion a las imagenes de las actividades        </h3>
      </div>

    <h1 className='text-xl w-2/3 px-8'>Si queres participar, contactate acá: (341) 5-123456 </h1>
    <div className='grid grid-cols-4 gap-8 p-8 rounded-xl'>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
      <Image className='cursor-pointer transition-all hover:scale-105 hover:rounded hover:shadow-xl shadow-none rounded w-full h-auto' alt='' src={image}></Image>
    </div>


    </div>
  )
}

export default page