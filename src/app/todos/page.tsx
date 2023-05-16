import React from 'react'
import TodoList from './TodoList'

export default function page() {
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            {/* <TodoList /> */}
        </div>
    )
}
