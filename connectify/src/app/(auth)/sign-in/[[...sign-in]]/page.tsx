import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signinpage = () => {

  return (

    <main className='flex-center h-[100vh] w-full '>
        <SignIn/>
    </main>
    
  )
}

export default signinpage