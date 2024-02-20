import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {

    const currentYear = new Date().getFullYear() 
  return (
    <>
        <hr className='font-extrabold border-1'/>

        <section className='max-w-7xl mx-auto pt-8 flex flex-row justify-between mb-10 px-3 mobile-view'>
            <div className=' footer-first-div flex flex-col gap-8'>
                <Link href='/'>
                    <Image src='/images/logo.svg' width={100} height={50} alt="log-image"/>
                </Link>
                <div>

                    <p>Carhub {currentYear}</p>
                    <p>All Rights Reserved &copy;</p>

                </div>
                
                

            </div>
            <div className='second-section md:grid md:grid-cols-3 md:gap-20 grid grid-cols-2 gap-20'>
                <div className='about-list'>
                    <h2 className='font-bold mb-5'>About</h2>
                    <ul className='text-gray-500 flex flex-col gap-5'>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Business Relation</li>
                    </ul>

                </div>


                <div className='Company-list '>
                    <h2 className='font-bold mb-5'>Company</h2>
                    <ul className='text-gray-500 flex flex-col gap-5'>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>Podcasts</li>
                        <li>Invite a friend</li>
                    </ul>

                </div>

                <div className='Socials-list col-start-2 col-end-4 md:col-start-3 md:col-end-4'>
                    <h2 className='font-bold mb-5'>Socials</h2>
                    <ul className='text-gray-500 flex flex-col gap-5'>
                        <li>Discord</li>
                        <li>instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>

                </div>
                

                


            </div>

        </section>

        <hr className='font-extrabold border-1'/>
        <section className='max-w-7xl mx-auto flex justify-between py-7 px-3'>
             <p>&#64; {currentYear} CarHub. All rights Reserved</p>

            <div className='flex gap-7 text-gray-500'>
                <p>Privacy & Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </section>
    </>
    
  )
}
