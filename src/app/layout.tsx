"use client";
import './globals.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMinimized, setMinimized] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (typeof Cookies.get('token') != "undefined") {
      setAuthenticated(true);
    }
  });


  return (
    <html lang="en">
      <head />
      <body className='min-h-screen'>
        <Header isMinimized={isMinimized} setMinimized={setMinimized} isAuthenticated={isAuthenticated} />
        <div className='relative'>
          {isAuthenticated && (
            <div className='col-span-3 sm:col-span-1 md:col-span-2   lg:col-span-2'>
              <Sidebar isMinimized={isMinimized} setMinimized={setMinimized} />
            </div>
          )}
          <div className={`p-4 ${isAuthenticated ? "sm:ml-64" : ""}  mt-16 sm:mt-16`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
