'use client'
import CreateTodo from '@/components/CreateTodo'
import Todo from '@/components/Todo'
import { useTodos } from '@/hooks/useTodos'

export default function Home() {
  const { todos } = useTodos()

  return (
    <div className="bg-zinc-800 text-zinc-50 h-screen flex items-center justify-center flex-col">
      <header className="flex items-center justify-center flex-col p-6">
        <h1 className="text-2xl font-bold">To-do list</h1>
        <span>Just keep it simple</span>
      </header>
      <main className="bg-zinc-700 p-6 rounded-lg w-80">
        <CreateTodo />
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />
        })}
      </main>
    </div>
  )
}
