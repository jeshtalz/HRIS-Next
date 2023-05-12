"use client";
import './globals.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMinimized, setMinimized] = useState<boolean>(false);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <html lang="en">
      <head />
      <body className='min-h-screen'>
        <Provider store={store}>
          <Header isMinimized={isMinimized} setMinimized={setMinimized} isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
          <div className='relative'>
            {isAuthenticated && (
              <div className='col-span-3 sm:col-span-1 md:col-span-2   lg:col-span-2'>
                <Sidebar isMinimized={isMinimized} setMinimized={setMinimized} />
              </div>
            )}
            <div className={`p-4 ${(isAuthenticated && isMinimized == false) ? "sm:ml-64" : ""} ${(isAuthenticated && isMinimized == true) ? "sm:ml-24" : "sm:ml-64"}   mt-16 sm:mt-16 bg-slate-100`}>
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
