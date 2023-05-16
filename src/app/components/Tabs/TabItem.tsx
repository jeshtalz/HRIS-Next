import { ReactNode } from 'react'
import { Tabs } from 'flowbite-react'

type Props = {
    title: string,
    children: ReactNode,
};

function TabItem(parameter: Props) {
    return (
        <Tabs.Item active title={parameter.title} className=" overflow-auto">
            {parameter.children}
        </Tabs.Item>
    )
}

export default TabItem