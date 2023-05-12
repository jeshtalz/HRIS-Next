"use client";
import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Tooltip } from 'flowbite-react';


type Props = {
    title: String,
    icon: any,
    children: ReactNode,
    isMinimized: boolean,
};


function SidebarDropdown(parameter: Props) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>

            <li className={`dropdown overflow-x-visible`}>
                <button className={`group flex items-center w-full p-2 text-gray-900 transition duration-100 rounded-lg group  hover:bg-cyan-500 mb-4 hover:text-white hover:scale-95 hover:shadow-md `} onClick={() => { setIsOpen(!isOpen); }}>
                    <div className={`flex-shrink-0  text-gray-500 transition duration-75  group-hover:text-white group-hover:scale-95 ${parameter.isMinimized ? 'mx-auto' : 'sm:text-cyan-500 '}`}>
                        {parameter.icon}
                    </div>
                    <span className={`flex-1 mx-2 text-left whitespace-nowrap transition-transform ${parameter.isMinimized ? 'sm:hidden' : ''}`} >
                        {parameter.title}
                        {isOpen && (
                            <ChevronUpIcon className={`w-6 h-6 float-right`} />
                        )}
                        {isOpen == false && (
                            <ChevronDownIcon className={`w-6 h-6 float-right`} />
                        )}
                    </span>

                </button>
                {isOpen && (
                    <ul className={`dropdown-menu  ${parameter.isMinimized ? 'rounded-lg bg-white w-52 p-2 border borderr-1 shadow-sm' : ''}`} >
                        {parameter.children}
                    </ul>
                )}
            </li>
        </>
    );
}

export default SidebarDropdown;