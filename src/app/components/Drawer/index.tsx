import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react"
import { ReactNode, useState } from "react"

type Props = {
    title: string,
    children: ReactNode,
    setId: any
    showDrawer: boolean,
    setShowDrawer: any
    setProcess: Function
}


function index(parameter: Props) {


    return (
        <>
            <Button className='btn btn-sm text-white rounded-lg bg-cyan-500  hover:scale-90 shadow-sm text' onClick={() => {
                parameter.setShowDrawer(true);
                parameter.setId(0);
                parameter.setProcess("Add");
            }} onDoubleClick={() => { parameter.setShowDrawer(false); }}>Add Item
            </Button>

            <div id="drawer-right-example" className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white min-w-84 dark:bg-gray-800 ${parameter.showDrawer ? 'w-96' : 'translate-x-full'} shadow-md`}>
                <div className="flex my-4">
                    <h5 className=" font-medium my-auto text-lg">{parameter.title}</h5>
                    <button title="Close Drawer" className={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white`} type="button" onClick={() => { parameter.setShowDrawer(false); }}>
                        <span>
                            <XMarkIcon className="h-5"></XMarkIcon>
                        </span>
                    </button>
                </div>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    {parameter.children}
                </div>
            </div>
        </>
    )
}

export default index