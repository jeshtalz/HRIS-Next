"use client"
import React from 'react'
import Image from 'next/image'
import logo from 'public/logo.png'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import Cookies from 'js-cookie'


export default function Header(login: boolean) {
    return (
        <header>
            <Navbar className='bg-white p-5 z-50  border shadow-md md:p-3 lg:px-10'
                fluid={true}
                rounded={true}
            >
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
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
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
                    <Navbar.Toggle />
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
