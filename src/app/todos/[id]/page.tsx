import React from 'react'
import { notFound } from 'next/navigation';


type PageProps = {
    params: {
        id: string;
    }
}

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodo = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        { next: { revalidate: 60 } })
    const todo: Todo = await res.json()
    return todo
}

async function TodoPage({ params: { id } }: PageProps) {
    const todo = await fetchTodo(id)
    if (!todo.id) return notFound()
    return (
        <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className='border-t border-black mt-5 text-right'> By User:  {todo.userId}</p>
        </div>
    )
}

export default TodoPage

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: Todo[] = await res.json();

    return todos.map(todo => ({
        id: todo.id.toString()
    }));
}
