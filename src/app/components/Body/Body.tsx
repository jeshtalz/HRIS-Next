"use client";
import React, { ReactNode } from 'react'
import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';



type Props = {
    children: ReactNode,
};

function index(parameter: Props) {
    const [isMinimized, setMinimized] = useState<boolean>(false);
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    return (
        <Provider store={store}>
            <Header isMinimized={isMinimized} setMinimized={setMinimized} isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
            <div className='relative m-0'>
                {isAuthenticated && (
                    <div className='col-span-3 sm:col-span-1 md:col-span-2   lg:col-span-2'>
                        <Sidebar isMinimized={isMinimized} setMinimized={setMinimized} />
                    </div>
                )}
                <div className={`${(isAuthenticated == true && isMinimized == false) ? "sm:ml-64" : ""} ${(isAuthenticated && isMinimized == true) ? "sm:ml-24" : "sm:m-0"} ${(isAuthenticated ? 'p-4' : '')} mt-16 sm:mt-16 bg-slate-100`}>
                    {parameter.children}
                </div>
            </div>
        </Provider>
    )
}

export default index;
