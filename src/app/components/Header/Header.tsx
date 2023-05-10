"use client";
import React from 'react';
import Image from 'next/image';
import logo from 'public/logo.png';
import { Navbar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import Cookies from 'js-cookie';
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

type Props = {
    isMinimized: boolean,
    setMinimized: any,
    isAuthenticated: boolean,
};

export default function Header(parameter: Props) {
    return (
        <header>
            <Navbar className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md dark:border-gray-600'
                fluid={true}
                rounded={true}
            >
                {parameter.isAuthenticated &&(
                    <button data-drawer-target="default-sidebar" onClick={() => parameter.setMinimized(!parameter.isMinimized)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:mt-2">
                        <span className="sr-only">Sidebar</span>
                        {parameter.isMinimized && (<ChevronDoubleLeftIcon className="w-5 h-5" />)}
                        {!parameter.isMinimized && (<ChevronDoubleRightIcon className="w-5 h-5" />)}
                    </button>
                )}
                
                <Navbar.Brand href="https://flowbite.com/">
                    <Image
                        src={logo}
                        alt="logo"
                        priority={true}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '150px', height: 'auto' }}
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle className='sm:hidden' />
                </div>
                <Navbar.Collapse>
                    {/* <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
