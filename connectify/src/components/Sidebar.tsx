"use client";

import React from 'react'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-col gap-6'>
        {sidebarLinks.map((index) => {
          const isActive = pathname === index!.route || pathname.startsWith(index!.route);
          return(
            <>

            </>
          )
        })}
      </div>
    </section> 
  )
}

export default Sidebar