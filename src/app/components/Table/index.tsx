import { Button, Label, Table, Tabs, TabsRef, TextInput } from "flowbite-react";
import Pagination from "../Pagination";
import { useRef, useState } from "react";
import { Bars4Icon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/solid";
import { TableCell } from "@nextui-org/react/types/table/base";


type row = {
    id: string,
    attributes: any
}



type Props = {
    searchKeyword: string,
    setSearchKeyword: any,
    orderBy: string,
    setOrderBy: any,
    orderAscending: boolean,
    setOrderAscending: any,
    pagination: number,
    setpagination: any,
    data: row[],
    pages: number,
    activePage: number,
    setActivePage: any,
    headers: string[]
    getDataById: Function
}



function index(parameter: Props) {
    function search() {
        let search_input = document.getElementById("table_search") as HTMLElement;
        // const delayDebounceFn = setTimeout(() => {
        if (search_input != null) {
            parameter.setActivePage(1);
            parameter.setSearchKeyword((document.getElementById("table_search") as HTMLInputElement).value);
        }
        // }, 2000)
    }


    return (
        <div className="">
            <div className="flex flex-row justify-end m-3">
                <div className="">
                    <input placeholder="Search here" type="text" id="table_search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onKeyUp={() => search()} />
                </div>
            </div>
            <Table className="shadow-md rounded-md">
                <Table.Head>
                    {parameter.headers.map((item, index) => {
                        return (
                            <Table.HeadCell key={item} onClick={() => { parameter.setOrderAscending(!parameter.orderAscending); parameter.setOrderBy(item) }}>
                                {item.replaceAll("_", " ")}
                                {(item == parameter.orderBy) ?
                                    ((parameter.orderAscending) ?
                                        <BarsArrowUpIcon className="h-4 float-right" />
                                        :
                                        <BarsArrowDownIcon className="h-4 float-right" />
                                    )
                                    :
                                    <Bars4Icon className="h-4 float-right" />
                                }
                            </Table.HeadCell>
                        );
                    })}
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {parameter.data.length > 0 ?

                        parameter.data.map((item: row, index: number) => {
                            return (
                                <Table.Row className="bg-white " key={item.id}>
                                    {parameter.headers.map((td, td_index) => {
                                        return (
                                            <Table.Cell key={td_index}>
                                                {td == "id" ? <>{item.id}</> : <>{item.attributes[td]}</>}
                                            </Table.Cell>
                                        );
                                    })}
                                    <Table.Cell>
                                        <button
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={() => {
                                                parameter.getDataById(item.id);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })
                        :
                        <Table.Row className="bg-white  h-24" >
                            <Table.Cell className=" justify-center text-center" colSpan={(parameter.headers.length + 1)}>
                                <span className="font-medium">
                                    No Data Found
                                </span>
                            </Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>
            </Table >
            <div className="flex items-center justify-center text-center">
                <Pagination
                    currentPage={parameter.activePage}
                    setActivePage={parameter.setActivePage}
                    totalPages={parameter.pages}
                />
            </div>

        </div >
    );
}

export default index