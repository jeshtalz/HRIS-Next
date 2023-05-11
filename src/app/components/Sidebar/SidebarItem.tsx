import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';


type Props = {
    href: any,
    label: String,
    icon: any,
    activeLink: String,
    SetActiveLink: any
};


function SideBarItem(parameter: Props) {
    return (
        <li>
            <Link href={parameter.href} className={`dropdown-toggle flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group  hover:bg-red-500 mb-4 hover:text-white hover:scale-95 hover:shadow-md ${parameter.activeLink == parameter.label ?"bg-red-500 text-white hover:scale-95 shadow-md":""}`}  onClick={() => parameter.SetActiveLink(parameter.label)} >
                <div className={`flex-shrink-0  text-gray-500 transition ${parameter.activeLink == parameter.label ?"text-white hover:scale-95":""} duration-75 group-hover:bg-red-500 group-hover:text-white group-hover:scale-95`}>
                    {parameter.icon}
                </div>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {parameter.label}
                </span>
            </Link>
        </li>
    );
}

export default SideBarItem;