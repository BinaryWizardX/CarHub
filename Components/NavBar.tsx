'use client'
import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

export default function NavBar() {
  return (

    <header className='w-full bg-transparent absolute p-3 !z-10 '>
      <nav className="max-w-7xl mx-auto flex items-center justify-between !bg-transparent">

        <Link href='/'>
          <Image src='/images/logo.svg' width={100} height={50} alt="log-image"/>
        </Link>

        <CustomButton title="Sign-in" containerStyles="bg-white rounded-full px-6 py-2" textStyles="text-blue-600 text-sm"/>
       
      </nav>

    </header>
    
  )
}
