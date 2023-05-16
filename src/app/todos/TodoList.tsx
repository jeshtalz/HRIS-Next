
import Link from 'next/link';


type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}



const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  return todos
}

async function TodoList() {
  const todos = await fetchTodos()
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodoList