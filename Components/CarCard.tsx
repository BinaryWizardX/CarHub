'use client'

import { car } from '@/types'
import React, {MouseEvent} from 'react'
import { calculateRent } from '@/UtilFunctions';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { CarDetails } from '.';
import { generateCarImageUrl } from '@/UtilFunctions';

type Props = {
    carInstance : car
    onViewDetailsClick : (car :car )=> void
}

function CarCard({carInstance, onViewDetailsClick}: Props) {

    const {city_mpg, year, make, model, transmission, drive} = carInstance;

    const rent = calculateRent(city_mpg,year);

    


        

    

   

  return (
    <>
    
        <div className='bg-blue-50 p-5 rounded-2xl cover-div'>
            <h2 className='car-card-title'>{make} {model}</h2>

            <p className='text-[32px] leading-[38px] mt-6'>
                <sup>$</sup>
                <span className='font-extrabold'>{rent}</span>
                <sub>/day</sub>
            </p>

            <div className='relative w-full h-40 my-3 object-contain '>
                <Image src={generateCarImageUrl(carInstance)} alt='car-image'fill priority className='object-contain'/>
            </div>
            <div className='main-div'>
                <div className='w-full flex card-first-div '>
                    <div className='w-1/3 flex flex-col justify-center items-center'>
                        <Image src='/images/steering-wheel.svg' width={20} height={20} alt='steering-wheel'/>
                        <p>{transmission === "a" ? "Auto" : "Manual"}</p>
                    </div>

                    <div className='w-1/3 flex flex-col justify-center items-center'>
                        <Image src="/images/tire.svg" width={20} height={20} alt='wheel'/>
                        <p>{drive}</p>
                    </div>
                    <div className='w-1/3 flex flex-col justify-center items-center'>

                        <Image src="/images/gas.svg" width={20} height={20} alt='wheel'/>
                        <p>{city_mpg} MPG</p>

                    </div>

                </div>

                <div className='card-second-div text-center hidden bg-blue-600 rounded-full cursor-pointer px-3'>

                    <CustomButton btnType='button' title='View More' containerStyles='bg-blue-600 w-11/12 ' textStyles='text-white font-bold' handleClick={()=>onViewDetailsClick(carInstance)}/>

                    <Image  src='/images/right-arrow.svg' width={25} height={25} alt='arrow'/>

                </div>
                

            </div>
            
            

        </div>

        
    </>
  )
}

export default CarCard