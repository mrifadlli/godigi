import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type Child = {
    children: React.ReactElement
}

export default function DefaultLayout({children}: Child) {
  return (
    <div className='overflow-hidden'>
    <Navbar />
    <div>
        {children}
    </div>
    <Footer />
    </div>
  )
}
