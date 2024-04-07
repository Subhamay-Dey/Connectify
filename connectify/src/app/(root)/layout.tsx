import React, { ReactNode } from 'react'

function RootLayout({children} : {children: ReactNode}) {
    
  return (
    <main>
      Navbar
      {children}
      Footer
    </main>
  )
}

export default RootLayout