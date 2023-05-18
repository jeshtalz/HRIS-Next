"use client";
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';


type Props = {
    href: any,
    label: String,
    icon: any,
    activeLink: String,
    SetActiveLink: any,
    isMinimized: boolean
};




function SideBarItem(parameter: Props) {
    return (
        <li>
            <Link href={parameter.href} className={` flex items-center w-full p-2  transition duration-75 rounded-lg group  hover:bg-cyan-500 mb-4 hover:text-white hover:scale-95 hover:shadow-md ${parameter.activeLink == parameter.label ? "bg-cyan-500 hover:scale-95 shadow-md text-white" : "text-gray-900"} `} onClick={() => parameter.SetActiveLink(parameter.label)} >
                <div className={`flex-shrink-0  text-gray-500 sm:text-cyan-500 transition   duration-75 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-95 ${parameter.isMinimized ? 'mx-auto text-gray-500 sm:text-gray-500 ' : 'text-cyan-500'} ${parameter.activeLink == parameter.label ? "text-white sm:text-white" : ""}  `}>
                    <Tooltip
                        className={`${parameter.isMinimized ? "" : "hidden"}`}
                        content={parameter.label}
                        trigger="hover"
                        placement="right"
                        style="light"
                    >
                        {parameter.icon}
                    </Tooltip>
                </div>
                <span className={`flex-1 ml-3 text-left whitespace-nowrap ${parameter.isMinimized ? 'sm:hidden' : ''}`}>
                    {parameter.label}
                </span>
            </Link>
        </li>
    );
}

export default SideBarItem;