"use client";

import React from 'react';
import { sidebarLinks } from '../../constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6 '>
        {sidebarLinks.map((index)  => {
          const isActive = pathname === index.route || pathname.startsWith(`${index.route}/`);
          return(
            <Link
              href={index.route}
              key={index.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{
                'bg-blue-1': isActive,
              })}
            >
              <Image
                src={index.imgUrl}
                alt={index.label}
                width={24}
                height={24}
              />
              <p className='text-lg font-semibold max-lg:hidden'>
                {index!.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section> 
  )
}

export default Sidebar