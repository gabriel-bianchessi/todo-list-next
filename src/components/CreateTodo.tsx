import React from 'react'

const CreateTodo: React.FC = () => {
  return (
    <form>
      <label>Adicionar nova task:</label>
      <input type="text" className="bg-zinc-600" />
    </form>
  )
}

export default CreateTodo
