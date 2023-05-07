"use client";
import './globals.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  function minimizeSideBar(){

  }

  const [isMinimized, setMinimized] = useState(false);

  let template = <html lang="en">
    <head />
    <body className='min-h-screen'>
      <Header isMinimized={isMinimized} setMinimized={setMinimized} />
      <main className='relative'>
        <div className='col-span-3 sm:col-span-1 md:col-span-2   lg:col-span-2 '>
          <Sidebar isMinimized={isMinimized} setMinimized={setMinimized}/>
        </div>
        <div className="p-4 sm:ml-64 mt-16 sm:mt-16">
          {children}
        </div>
      </main>
    </body>
  </html>;

  return (
    <>
      {template}
    </>

  )
}
