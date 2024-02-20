'use client';


import React from 'react'
import { useState } from 'react';
import { Item } from './CarCatelogue'
import Image from 'next/image';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

type Props = {
  menuName?: string,
  menuList? : Item[] 
}

export default function CustomFilters({menuName,menuList}: Props) {
  const [selectedItem, setSelectedItem]  = useState<string |null>(null)
  return (
    <div className='relative rounded-md bg-white w-40 text-center flex justify-center items-center  max-[1200px]:w-40 max-[1200px]:h-14 shadow-[0px_0px_85px_-17px_rgba(128,128,128,1)]'>
      <Dropdown>
        <DropdownTrigger className='flex relative justify-between gap-7 outline-none'>
           <Button className=''>
           {selectedItem
              ? menuList?.find(item => item.key === selectedItem)?.label
              : menuList?.[0]?.label}

            {menuList &&(
              <Image  className=''

              src='/images/chevron-up-down.svg'
              width={30}
              height={30}
              alt='drop-down-icon'
  
              />
            )}
           </Button>
        </DropdownTrigger>
        <DropdownMenu className='bg-white w-40 mx-auto h-60 overflow-y-auto z-50 '>
            {menuList
              ? menuList.map((item) => {

                  
                 
                  return(
                    <DropdownItem className='cursor-pointer  p-3 rounded-md hover:bg-blue-600 hover:text-white' onClick={()=>{setSelectedItem(item?.key)}} key={item.key}>{item.label}</DropdownItem>
                  )
                  
              })
              : <p>Not Found</p>}
        </DropdownMenu>


      </Dropdown>
      
      
    </div>
  )
}