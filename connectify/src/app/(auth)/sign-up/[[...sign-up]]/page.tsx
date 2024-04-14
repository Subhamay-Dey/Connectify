import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUps = () => {
  return (
    <div className='flex-center h-[100vh] w-full' >
        <SignUp/>
    </div>
  )
}

export default SignUps