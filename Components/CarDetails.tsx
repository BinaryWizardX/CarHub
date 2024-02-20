'use client';
import React,{Children, useState} from 'react'
import { Dialog } from '@headlessui/react'

type Props = {
    
}

function CarDetails({}: Props) {
    let [isOpen, setIsOpen] = useState(true)

    return (
      <>

            <div className='fixed left-0 top-0 z-50'>
                <p>This is the modal for </p>

            </div>


       
      </>
    )
}

export default CarDetails