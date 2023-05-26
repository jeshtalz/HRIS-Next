"use client";
import { Button, Tabs } from 'flowbite-react';
import React, { useEffect, useInsertionEffect } from 'react';
import { useState, useRef } from 'react';
import Table from "../../components/Table";
import HttpService from '../../../../lib/http.services';
import Drawer from '../../components/Drawer';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FormElement } from '@/app/components/commons/FormElement';
import { setFormikErrors } from '../../../../lib/utils.service';
import { object, string, number, date, InferType } from 'yup';
import { IMaskInput } from 'react-imask';
import CurrencyInput from 'react-currency-input-field';

type row = {
    id: string,
    attributes: object[]
}

interface IValues {
    number?: number;
    amount?: number;
}


function SalaryGradeTabs() {
    const formikRef = useRef();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    var [searchKeyword, setSearchKeyword] = useState<string>('');
    const [orderBy, setOrderBy] = useState<string>('');
    const [refresh, setRefresh] = useState<boolean>(false);
    const [orderAscending, setOrderAscending] = useState<boolean>(false);
    const [pagination, setpagination] = useState<number>(1);
    const [headers, setHeaders] = useState<string[]>([
        "id",
        "number",
        "amount"
    ]);
    const [pages, setPages] = useState<number>(1);
    const [data, setData] = useState<row[]>([]);
    const [title, setTitle] = useState<string>("Salary Grade");
    const [edit, setEdit] = useState<number>(1);
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const ref = useRef(null);
    const inputRef = useRef(null);

    var initialValues: IValues = {
        number: 0,
        amount: 0
    };

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
            if (resp != null) {
                setData(resp.data.data);
                setPages(resp.data.pages);
            }
        }


        getData();
    }, [refresh, searchKeyword, orderBy, orderAscending, pagination, activePage]);



    //    get data by id
    const getDataById = async (id: number) => {

        try {
            const resp = await HttpService.get("salary-grade/" + id);
            if (resp.status === 200) {
                setEdit(id);
                setShowDrawer(true);

            }
        }
        catch (error: any) {
        }

    };



    // Submit
    const onFormSubmit = async (
        values: IValues,
        { setSubmitting, resetForm, setFieldError }: FormikHelpers<IValues>
    ) => {
        const postData = {
            number: values.number,
            amount: values.amount,
            device_name: "web",
        };


        try {
            const resp = await HttpService.post("salary-grade", postData);
            if (resp.status === 200) {
                let status = resp.data.status;
                if (status === "Request was Successful") {
                    setActivePage(1);
                    setRefresh(!refresh);
                }
                else {
                    let error = { number: [resp.data.message] };
                    setFormikErrors(error, setFieldError);
                }
            }
        }
        catch (error: any) {
            if (error.response.status === 422) {
                setFormikErrors(error.response.data.errors, setFieldError);
            }
        }

    };

    return (
        <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
        >
            <Tabs.Item title="Salary Grade">
                <Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} setEdit={setEdit} title={`${(typeof edit != "undefined") ? "Edit" : "Add"} ${title}`}>
                    <Formik initialValues={initialValues} onSubmit={onFormSubmit} enableReinitialize={true}
                    >
                        {({ errors, touched }) => (
                            <Form className='p-2' id="formik">
                                <FormElement
                                    name="number"
                                    label="Salary Grade Number"
                                    errors={errors}
                                    touched={touched}
                                >
                                    <Field
                                        id="number"
                                        name="number"
                                        placeholder="Enter Number"
                                        className="w-full p-4 pr-12 text-sm border border-gray-100 rounded-lg shadow-sm focus:border-sky-500"
                                    />
                                </FormElement>

                                <FormElement
                                    name="amount"
                                    label="Salary Amount"
                                    errors={errors}
                                    touched={touched}
                                >
                                    {/* <Field
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter Amount"
                                        className="w-full p-4 pr-12 text-sm border border-gray-100 rounded-lg shadow-sm focus:border-sky-500"
                                    /> */}
                                    <Field
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter Amount"
                                        className="w-full p-4 pr-12 text-sm border border-gray-100 rounded-lg shadow-sm focus:border-sky-500"
                                        defaultValue={0}
                                        decimalsLimit={2}
                                    // onValueChange={(value, name) => console.log(value, name)}
                                    />
                                </FormElement>
                                {/* <FormElement
                                    name="amt"
                                    label="Salary Amount"
                                    errors={errors}
                                    touched={touched}
                                >
                                    <CurrencyInput
                                        id="input-example"
                                        name="input-name"
                                        placeholder="Please enter a number"
                                        defaultValue={1000}
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                    />;
                                </FormElement> */}

                                <div className="grid grid-flow-row auto-rows-max mt-5">
                                    <button type="submit" className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg focus:scale-90 shadow-sm mx-auto" >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Drawer>
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
                    headers={headers}
                    getDataById={getDataById}
                />
            </Tabs.Item>
        </Tabs.Group>
    );
}

export default SalaryGradeTabs