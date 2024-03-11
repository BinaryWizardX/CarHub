import React, { MouseEventHandler } from 'react'
import CustomButton from './CustomButton'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'










export default function ShowMore({pageNumber , isNext}: ShowMoreProps) {

  

  const router = useRouter();


  const updateSearchParams = () => {

    
    
    const newLimit = (pageNumber + 1) * 10;

    if(newLimit > 30){
      isNext = true;
    }

    const SearchParams = new URLSearchParams(window.location.search)

    

    console.log('newLimit', newLimit)

    if(!isNext){
      SearchParams.set('limit', newLimit.toString())
    }
    else{
      SearchParams.delete('limit')
    }

    const newPathname = `${window.location.pathname}?${SearchParams.toString()}`;

    router.push(newPathname);
  
  }



  return (
    <div className='w-full flex justify-center gap-5 mt-10'>

        <CustomButton title='ShowMore' containerStyles='hover:bg-blue-800 bg-blue-600 rounded-full px-4 py-2' textStyles='text-white'  btnType='button' 
        handleClick={updateSearchParams}
        />
    </div>
  )
}