'use client';

import React, { useState , useEffect } from 'react'
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { car } from '@/types';
import { generateCarImageUrl } from '@/UtilFunctions';

type Props = {
    ismodalOpen : boolean,
    carDetails : car,
    closeModal : ()=> void
}

function CarModal({ismodalOpen, carDetails, closeModal}: Props) {

    let [isOpen,setIsOpen] = useState(ismodalOpen);

    useEffect(() => {
        setIsOpen(ismodalOpen);
    }, [ismodalOpen]);
  return (
    
        

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}
                className="relative z-50">
                
                <div className='fixed inset-0 flex w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm '>

                
                    <Dialog.Panel className='relative w-full max-w-[480px] rounded-2xl h-[90vh] overflow-auto bg-white p-5'>
                        
                       <div className=' mb-3 w-full bg-[url("/images/pattern.png")] bg-center bg-cover h-40 rounded-md'>

                            <Image src={generateCarImageUrl(carDetails,'29')} width={250} height={250} alt='car-image' className='mx-auto'/>

                       </div>
                       <button className='absolute top-2 right-2 bg-slate-100 rounded-full p-1'
                       onClick={()=> 
                        {
                            setIsOpen(false)
                            closeModal()

                        }}
                       >
                            <Image  src="/images/close.svg" width={30} height={30} alt='close-button'
                            
                            />
                       </button>
                       <div className='w-full flex gap-3'>
                        <div className='w-1/3 bg-slate-200 rounded-md h-24 p-1'>
                            <Image src={generateCarImageUrl(carDetails,'29')} width={200} height={200} alt='car-image' />

                        </div>
                        <div className='w-1/3 bg-slate-200 rounded-md h-24 p-1'>
                            <Image src={generateCarImageUrl(carDetails,'33')} width={200} height={200} alt='car-image' />

                        </div>
                        <div className='w-1/3 bg-slate-200 rounded-md h-24 p-1'>
                            <Image src={generateCarImageUrl(carDetails,'13')} width={200} height={200} alt='car-image' />

                        </div>

                       </div>

                       <div className='w-full mt-5 car-details-container'>

                            <h1 className='font-semibold text-xl capitalize'>{carDetails.make} {carDetails.model}</h1>

                            <div className='grid grid-cols-1 gap-4 mt-4'>
                            {Object.entries(carDetails).map(([key, value]) => (
                                <div key={key} className='flex justify-between'>
                                    <span className='text-gray-500 capitalize'>{key}</span>
                                    <span className='font-semibold'>{value}</span>
                                </div>
                            ))}

                            </div>
                       </div>
                       

                        

                        
                    </Dialog.Panel>
                </div>
            </Dialog>
                            

        
  )
}

export default CarModal