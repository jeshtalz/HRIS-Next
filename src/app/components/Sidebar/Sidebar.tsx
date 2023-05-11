"use client";

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { HomeIcon, CogIcon, ArrowLeftIcon, ChartPieIcon } from '@heroicons/react/24/solid';
import { Sidebar } from "flowbite-react";
import SidebarDropdown from './SidebarDropdown';
import SidebarDropdownItem from './SidebarDropdownItem';
import SideBarItem from './SidebarItem';
import Cookies from 'js-cookie';

type Props = {
    isMinimized: boolean,
    setMinimized: any,
};

function index(parameter: Props) {
    const [activeLink, SetActiveLink] = useState('Dashboard');
    let token = Cookies.get('token');

    return (
        <Sidebar id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${parameter.isMinimized ? "translate-x-0" : "-translate-x-full"} mt-16 md:mt-16   sm:translate-x-0 sm:border-spacing-1 rounded-sm sm:border-r-gray-500 shadow-xl`} aria-label="Sidebar">
            <ul className="font-medium">

                <SideBarItem href={"/"} label="Dashboard" icon={<ChartPieIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                {/* Sidebar Dropdown */}
                <SidebarDropdown title="Vacancy" icon={<CogIcon className='w-6 h-6' />}>
                    <SidebarDropdownItem href={"/"} label="All Request" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Approved" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Queued" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                </SidebarDropdown>

                <SidebarDropdown title="Applicants" icon={<CogIcon className='w-6 h-6' />}>
                    <SidebarDropdownItem href={"/"} label="Master List" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Shortlisted" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Disqualified" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Interviewed" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Appointed" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                </SidebarDropdown>

                {/* SideBarItem  */}
                <SideBarItem href={"/"} label="Interview" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                <SideBarItem href={"/"} label="Oath Taking" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                <SideBarItem href={"/"} label="Orientation" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                <SideBarItem href={"/"} label="Employees" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                <SideBarItem href={"/"} label="Leaves" icon={<CogIcon className='w-6 h-6' />} activeLink={activeLink} SetActiveLink={SetActiveLink} />

                <SidebarDropdown title="Reports" icon={<CogIcon className='w-6 h-6' />}>
                    <SidebarDropdownItem href={"/"} label="Request for Publication" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Notice to CSC" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Initial Comparative Assessment Form" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Final Comparative Asessment Form" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Report For Appointment" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                </SidebarDropdown>

                <SidebarDropdown title="Settings" icon={<CogIcon className='w-6 h-6' />}>
                    <SidebarDropdownItem href={"/"} label="PSB" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Positions" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="User Management" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Holidays/Suspension" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                    <SidebarDropdownItem href={"/"} label="Salary Grade" activeLink={activeLink} SetActiveLink={SetActiveLink} />
                </SidebarDropdown>

            </ul>
        </Sidebar>
    )
}

export default index