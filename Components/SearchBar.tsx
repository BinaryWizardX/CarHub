'use client';
import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function  SearchBar() {

  
  const[make, setManufacturer] = useState('')
  const[model, setModel] = useState('')

  const router = useRouter()

  const handleClick = (event: FormEvent<HTMLFormElement>)=>{

    event.preventDefault();

     if(make === "" && model === ""){
      alert("Some of the fields are missing. Try again");
     }

     updateSearchParameters(make.toLowerCase(), model.toLowerCase())
     

  }
  const updateSearchParameters = (make : string, model : string)=>{

    const SearchParams = new URLSearchParams(window.location.search)

    
    if(make){
      SearchParams.set('make' , make)
      
    }
    else{
      SearchParams.delete('make')
    }

    if(model){
      SearchParams.set('model', model);
    }
    else{
      SearchParams.delete('model')
    }

  const newPathname = `${window.location.pathname}?${SearchParams.toString()}`;

    router.push(newPathname);

    setManufacturer('')
    setModel('')

    

  }


  return (
    <form className='max-w-[760px] flex p-3 min-[690px]:bg-gray-100 rounded-full max-[690px]:bg-none  max-[690px]:flex-col  ' onSubmit={handleClick}>
      

    
        <div className=' 
        flex gap-3 items-center bg-gray-100 rounded-full max-[690px]:mb-5  max-[690px]:p-3'>

            <button>
              <Image src='/images/car-logo.svg'
              width={20}
              height={20}
              alt='Volkswagen car icon'
              
              />
            </button>
            <input
            className=' bg-transparent focus:outline-none text-gray-600 w-80 max-[760px]:max-w-72'
            type='text'
            placeholder='Volkswagen...'
            value={make}
            onChange={(e)=>{
              setManufacturer(e.target.value)
              
            }}
            />

            <Image
              className='min-[690px]:hidden' 
              src='/images/magnifying-glass.svg'
              width={30}
              height={30}
              alt='search-image'
              
              />



            
        </div>

        <div className=' 
        flex items-center gap-3 bg-gray-100 rounded-full max-[690px]:bg-none max-[690px]:p-3'>
            <button className=''>
              <Image 
              src='/images/model-icon.png'
              width={20}
              height={20}
              alt='car logo'
              
              />
            </button>

              <input 
              className='bg-transparent w-80 focus:outline-none text-gray-600 max-[760px]:max-w-72'
              type='text'
              placeholder='Tiguan...'
              value={model}
              onChange={(e)=>{
                setModel(e.target.value)
              }}
              />
              <Image
              className='min-[690px]:hidden' 
              src='/images/magnifying-glass.svg'
              width={30}
              height={30}
              alt='search-image'
              
              />


        </div>
      

      


      <button
       className='max-[690px]:hidden'
      >
        <Image 
        src='/images/magnifying-glass.svg'
        width={30}
        height={30}
        alt='search-image'
        
        />
      </button>
     

       

      

     

      


    </form>
  )
}

export default SearchBar