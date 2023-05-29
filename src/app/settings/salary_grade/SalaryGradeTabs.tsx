"use client";
import { Tabs } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Table from "../../components/Table";
import HttpService from '../../../../lib/http.services';
import Drawer from '../../components/Drawer';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FormElement } from '@/app/components/commons/FormElement';
import { setFormikErrors } from '../../../../lib/utils.service';
import { Alert } from 'flowbite-react';

// types

type row = {
    id: string,
    attributes: object[]
}

type alert = {
    type: string,
    message: string
}

// interfaces

interface IValues {
    number?: number;
    amount?: number;
}


//main function

function SalaryGradeTabs() {


    // variables
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    var [searchKeyword, setSearchKeyword] = useState<string>('');
    const [orderBy, setOrderBy] = useState<string>('');
    const [alerts, setAlerts] = useState<alert[]>([]);
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
    const [edit, setEdit] = useState<number>(0);
    const [showDrawer, setShowDrawer] = useState<boolean>(false);

    var [initialValues, setInitialValues] = useState<IValues>(
        {
            number: 0,
            amount: 0
        }
    );

    // Use Effect Hook

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

    useEffect(() => {
        if (edit == 0) {
            setInitialValues({
                number: 0,
                amount: 0
            });
        }
        setAlerts([]);
    }, [edit]);



    //    get data by id
    const getDataById = async (id: number) => {

        try {
            const resp = await HttpService.get("salary-grade/" + id);
            if (resp.status === 200) {
                setEdit(id);
                setInitialValues({
                    number: resp.data.number,
                    amount: resp.data.amount
                })
                setShowDrawer(true);

            }
        }
        catch (error: any) {
        }

    };


    // clear alert
    function clearAlert(key: number) {
        const temp_alerts = [...alerts];
        temp_alerts.splice(key, 1);
        setAlerts(temp_alerts);
    }


    // Submit form
    const onFormSubmit = async (
        values: IValues,
        { setSubmitting, resetForm, setFieldError }: FormikHelpers<IValues>
    ) => {
        const postData = {
            number: values.number,
            amount: values.amount,
            device_name: "web",
        };

        alerts.forEach(element => {
            alerts.pop();
        });

        try {
            // add
            if (edit == 0) {

                const resp = await HttpService.post("salary-grade", postData);
                if (resp.status === 200) {
                    let status = resp.data.status;
                    if (status === "Request was Successful") {
                        alerts.push({ "type": "success", "message": "Data has been successfully saved!" });
                        setActivePage(1);
                        setRefresh(!refresh);
                    }
                    else {
                        if (typeof resp.data != "undefined") {
                            alerts.push({ "type": "failure", "message": "An error occured! - " + resp.data.message });
                        }
                    }
                }
            }

            // update
            else {
                const resp = await HttpService.patch("salary-grade/" + edit, postData)
                if (resp.status === 200) {
                    let status = resp.data.status;
                    if (resp.data.data != "" && typeof resp.data.data != "undefined") {
                        alerts.push({ "type": "success", "message": "Data has been successfully saved!" });
                        setActivePage(1);
                        setRefresh(!refresh);
                    }
                    else {
                        if (typeof resp.data != "undefined") {
                            alerts.push({ "type": "failure", "message": "An error occured! - " + resp.data.message });
                        }
                    }
                }
            }
        }
        catch (error: any) {
            if (error.response.status === 422) {
                setFormikErrors(error.response.data.errors, setFieldError);
            }
        }

    };



    // tsx
    return (

        // Tabs
        <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
        >
            <Tabs.Item title="Salary Grade">


                {/* drawer */}
                <Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} setEdit={setEdit} title={`${(edit != 0) ? "Edit" : "Add"} ${title}`}>

                    {/* formik */}
                    <Formik initialValues={initialValues} onSubmit={onFormSubmit} enableReinitialize={true}
                    >

                        {({ errors, touched }) => (

                            // forms
                            <Form className='p-2' id="formik">
                                <div className='alert-container' id="alert-container">
                                    {alerts.map((item, index) => {
                                        return (
                                            <Alert className='my-1' color={item.type} key={index} onDismiss={() => { clearAlert(index) }} > <span> <p><span className="font-medium">{item.message}</span></p></span></Alert>
                                        );
                                    })}
                                </div>


                                {/* number */}
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


                                {/* Amount */}
                                <FormElement
                                    name="amount"
                                    label="Salary Amount"
                                    errors={errors}
                                    touched={touched}
                                >

                                    <Field
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter Amount"
                                        className="w-full p-4 pr-12 text-sm border border-gray-100 rounded-lg shadow-sm focus:border-sky-500"
                                    />

                                </FormElement>


                                {/* submit button */}

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
        </Tabs.Group >
    );
}

export default SalaryGradeTabs