"use client";

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { HomeIcon, CogIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Sidebar } from "flowbite-react";
import SidebarDropdown from './SidebarDropdown';
import SidebarDropdownItem from './SidebarDropdownItem';
import SideBarItem from './SidebarItem';

type Props = {
    isMinimized: boolean,
    setMinimized: any,
};



function index(parameter: Props) {
    const [activeLink, SetActiveLink] = useState('Dashboard');

    return (
        <Sidebar id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${parameter.isMinimized ? "translate-x-0" : "-translate-x-full"} mt-16 md:mt-16   sm:translate-x-0 sm:border-spacing-1 rounded-sm sm:border-r-gray-500 shadow-xl`} aria-label="Sidebar">
            <ul className="font-medium">
                {/* Sidebar Dropdown */}
                <SidebarDropdown title="Settings" icon={<CogIcon className='w-6 h-6' />}>
                    <SidebarDropdownItem href={"/"} label="User Management" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                </SidebarDropdown>
                {/* SideBarItem  */}
                <SideBarItem href={"/"} label="Settings" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />
            </ul>
        </Sidebar>
    )
}

export default index