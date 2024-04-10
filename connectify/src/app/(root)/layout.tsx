import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../../Provider/StreamClientProvider'

function RootLayout({children} : {children: ReactNode}) {

  return (
    <main>
      <StreamVideoProvider>
         {children}
      </StreamVideoProvider>
      
    </main>
  )
}

export default RootLayout