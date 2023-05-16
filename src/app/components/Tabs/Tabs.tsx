"use client";
import { Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
};


function index(parameter: Props) {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabsRef = useRef<TabsRef>(null);
    return (
        <Tabs.Group
            aria-label="Default tabs"
            style="default"
            ref={tabsRef}
            onActiveTabChange={tab => setActiveTab(tab)}
        >
            {parameter.children}
        </Tabs.Group>
    )
}

export default index