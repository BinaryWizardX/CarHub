import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='hero-section xl:h-screen relative pl-24 prose flex max-w-screen-2xl flex-col xl:flex xl:flex-row xl:gap-36'>
      <div className='hero-first-div pt-48 pl-4'>
         <h1 className='text-[64px]'>Find, book, rent a car — quick and <span className='text-blue-600'>super easy !</span></h1>
         <p className='text-xl text-gray-500'>Stremline your car rental experience with <br /> our effortless booking process</p>
        <CustomButton containerStyles='hover:bg-blue-800 bg-blue-600 rounded-full px-4 py-2' textStyles='text-white' title='Explore Cars' btnType='button' />
      </div>
      <div className='second-div xl:relative xl:h-full xl:w-full'>
        
          <div className='image-container xl:absolute '>
              <Image src="/images/hero.png"
              alt='hero_image'
              height={100}
              width={100}
              className='pt-24 xl:absolute xl:top-[150px] xl:-left-[50px]'
              layout="responsive"
              

              />
          </div>

      
        
      </div>
        
       

        
        
        
      

    </section>
   
  )
}
