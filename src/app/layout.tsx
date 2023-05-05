import './globals.css';
import Header from './components/Header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { NextResponse, NextRequest } from 'next/server';
import AuthService from '../../lib/auth.service';
import { use } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let template = <html lang="en">
    <head />
    <body className='min-h-screen'>
      <Header />
      <main className='relative'>
        {children}
      </main>
    </body>
  </html>;

  return (
    <>
      {template}
    </>

  )
}
