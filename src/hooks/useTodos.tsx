'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export interface ITodo {
  id: number
  done: boolean
  text: string
}

export interface ITodosContext {
  todos: ITodo[]
  addTodo: (todo: ITodo) => void
  removeTodo: (id: number) => void
  updateTodoStatus: (id: number) => void
}

const TodosContext = createContext({} as ITodosContext)

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      done: true,
      text: 'Estudar next',
    },
  ])

  const addTodo = useCallback((todo: ITodo) => {
    setTodos((prev) => [...prev, todo])
  }, [])

  const removeTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateTodoStatus = useCallback(
    (id: number) => {
      console.log(todos)
      setTodos((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) return { ...todo, done: !todo.done }
          return todo
        })
      })
    },
    [todos],
  )

  const valueMemo = useMemo(
    () => ({
      todos,
      addTodo,
      removeTodo,
      updateTodoStatus,
    }),
    [addTodo, removeTodo, todos, updateTodoStatus],
  )

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <TodosContext.Provider value={valueMemo}>{children}</TodosContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodosContext)

  if (!context)
    throw new Error('The application needs to be wrapped by the TodoProvider')

  return context
}
