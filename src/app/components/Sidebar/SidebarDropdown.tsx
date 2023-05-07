import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';


type Props = {
    title: String,
    icon: any,
    children: ReactNode,
};


function SidebarDropdown(parameter: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option: String) => {
        setIsOpen(false);
    };

    return (
        <li className="dropdown">
            <button className="dropdown-toggle flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsOpen(!isOpen)}>
                <div className='flex-shrink-0  text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'>
                    {parameter.icon}
                </div>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {parameter.title}
                    {isOpen && (
                        <ChevronUpIcon className='w-6 h-6 float-right' />
                    )}
                    {isOpen==false && (
                        <ChevronDownIcon className='w-6 h-6 float-right' />
                    )}
                </span>
               
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {parameter.children}
                </ul>
            )}
        </li>
    );
}

export default SidebarDropdown;