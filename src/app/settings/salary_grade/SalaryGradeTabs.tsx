"use client";
import { Button, Tabs } from 'flowbite-react';
import React, { useEffect, useInsertionEffect } from 'react';
import { useState } from 'react';
import Table from "../../components/Table";
import HttpService from '../../../../lib/http.services';


function SalaryGradeTabs() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [orderBy, setOrderBy] = useState<string>('');
    const [orderAscending, setOrderAscending] = useState<boolean>(false);
    const [pagination, setpagination] = useState<number>(1);
    const [headers, setHeaders] = useState<string[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [data, setData] = useState<number>(1);
    const [link, setLink] = useState<string>("/salary_grade/");

    useEffect(() => {
        // query
        async function getData() {
            const postData = {
                activePage: activePage,
                searchKeyword: searchKeyword,
                orderBy: orderBy,
                orderAscending: orderAscending
            };
            const resp = await HttpService.post("search-salary-grade", postData);
            console.log(resp.data);
            if (resp != null) {
                setData(resp.data.data);
                setPages(resp.data.pages);
            }
        }

        getData();
    }, [searchKeyword, orderBy, orderAscending, pagination]);

    return (
        <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
        >
            <Tabs.Item title="Salary Grade">

                {/*Salary Grade Table*/}
                <Table
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    orderAscending={orderAscending}
                    setOrderAscending={setOrderAscending}
                    pagination={pagination}
                    setpagination={setpagination}
                    data={data}
                    pages={pages}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </Tabs.Item>
        </Tabs.Group>
    );
}

export default SalaryGradeTabs