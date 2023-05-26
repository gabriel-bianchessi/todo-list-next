'useClient'
import React from 'react'
import { ITodo, useTodos } from '@/hooks/useTodos'
import { TrashIcon } from '@heroicons/react/24/outline'

const Todo: React.FC<ITodo> = ({ id, text, done }) => {
  const { updateTodoStatus, removeTodo } = useTodos()

  return (
    <div className="flex flex-row items-center justify-between w-60">
      <div className="flex gap-2 items-center justify-center">
        <input
          type="checkbox"
          className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-4 h-4 border-3 border-amber-500 focus:outline-none rounded-lg"
          onChange={() => updateTodoStatus(id)}
          checked={done}
        />
        <span>
          {id} - {text}
        </span>
      </div>
      <TrashIcon className="w-4 h-4" onClick={() => removeTodo(id)} />
    </div>
  )
}

export default Todo
