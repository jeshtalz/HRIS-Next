import { Button, Table, Tabs, TabsRef } from "flowbite-react";
import Pagination from "../Pagination";
import { useRef, useState } from "react";
import { Bars4Icon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/solid";


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
}



function index(parameter: Props) {
    function onPageChange() {
        var currentPage = 1;
        let buttons = document.getElementById('pagination')?.getElementsByTagName("button");
        if (typeof buttons != "undefined") {
            console.log(buttons);
        }
    }


    return (
        <div className="">
            <Table className="">
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
                    {parameter.data.map((item: row, index: number) => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                                {parameter.headers.map((td, td_index) => {
                                    return (
                                        <Table.Cell key={td_index}>
                                            {td == "id" ? <>{item.id}</> : <>{item.attributes[td]}</>}
                                        </Table.Cell>
                                    );
                                })}
                                <Table.Cell>
                                    <a
                                        href="/tables"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
            <div className="flex items-center justify-center text-center">
                <Pagination
                    currentPage={parameter.activePage}
                    setActivePage={parameter.setActivePage}
                    totalPages={parameter.pages}
                />
            </div>

        </div>
    );
}

export default index