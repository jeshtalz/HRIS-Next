"use client";
import { CogIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Pagination, Table, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";

export const metadata = {
  title: 'User Management',
};


export default function Home({ }) {

  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);
  function onPageChange() {

  }

  return (

    <Tabs.Group
      aria-label="Default tabs"
      style="default"
      ref={tabsRef}
      onActiveTabChange={tab => setActiveTab(tab)}
    >
      <Tabs.Item active title="Users">
        <Table>
          <Table.Head>
            <Table.HeadCell>
              Product name
            </Table.HeadCell>
            <Table.HeadCell>
              Color
            </Table.HeadCell>
            <Table.HeadCell>
              Category
            </Table.HeadCell>
            <Table.HeadCell>
              Price
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
              </Table.Cell>
              <Table.Cell>
                Sliver
              </Table.Cell>
              <Table.Cell>
                Laptop
              </Table.Cell>
              <Table.Cell>
                $2999
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>
                White
              </Table.Cell>
              <Table.Cell>
                Laptop PC
              </Table.Cell>
              <Table.Cell>
                $1999
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>
                Black
              </Table.Cell>
              <Table.Cell>
                Accessories
              </Table.Cell>
              <Table.Cell>
                $99
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Pagination
          currentPage={15}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </Tabs.Item>
      <Tabs.Item color="green" title="Logs">Dashboard content</Tabs.Item>
    </Tabs.Group>
  )
}


