"use client"
import Link from 'next/link'
import React from 'react'
import { HomeIcon, CogIcon } from '@heroicons/react/24/solid';
import { Sidebar } from "flowbite-react";


function index() {
    return (
        <Sidebar id="default-sidebar" className="top-0 left-0  z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 sm:w-auto shadow-md" aria-label="Sidebar">
            <Sidebar.Items className="h-full overflow-y-auto">
                <Sidebar.ItemGroup>

                    <Link className='group flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700' href="/">
                        <HomeIcon className='h-6 text-gray-500 group-hover:text-gray-900' />
                        <span className="ml-3">Dashboard</span>
                    </Link>

                    <Sidebar.Collapse label="Settings" icon={CogIcon} >
                        <Link className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ml-6' href="/settings/user_management">
                            <span className="ml-3">User Management</span>
                        </Link>
                    </Sidebar.Collapse>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar >
    )
}

export default index