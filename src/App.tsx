import { Header } from "./components/Header/Header"
import { useState } from "react"
import { FormTask } from "./components/FormTask"
import { List } from "./components/List"
import { TodoItem } from "./components/TodoItem"
import { Footer } from "./components/Footer/Footer"

interface IFormTaskProps {
  task: string,
  description: string,
  taskPoints: number,
  complete: boolean
}

export function App() {
  const [list, setList] = useState([
    { id: 1, task: 'Fazer Macarrão Caseiro', description: 'Fazer macarrão tarara tarara', taskPoints: 10.00, complete: false },
    { id: 2, task: 'Criar API de Usuários', description: 'Fazer API tarara tarara', taskPoints: 40.00, complete: false },
    { id: 3, task: 'Criar Front-End de Usuários', description: 'Fazer Front tarara tarara', taskPoints: 50.00, complete: false },
  ])

  function handleAddTask({ task, description, taskPoints, complete }: IFormTaskProps) {
    if (task === '' || !taskPoints) {
      throw new Error('Fill all the form inputs')
    }
    setList([...list, {
      id: Number(list.length + 1),
      task: task,
      description: description,
      taskPoints: taskPoints,
      complete: complete,
    }])
  }

  function handleDeleteTask(id: number) {
    const filteredList = list.filter((item) => {
      return (item.id !== id)
    })
    setList(filteredList);
  }

  function handleCompleteTask(id: number) {
    setList([
      ...list.map(item => ({
        ...item,
        complete: item.id === id ? true : item.complete
      }))
    ])
  }

  return (
    <>
      <Header />

      <FormTask onAdd={(task, description, taskPoints, complete) => handleAddTask({ task, description, taskPoints, complete })} />

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 20 }}>
        <List>
          {list.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id} task={item.task}
              description={item.description}
              taskPoints={item.taskPoints}
              complete={item.complete}
              onDelete={handleDeleteTask}
              onComplete={handleCompleteTask} />
          ))}
        </List>
      </div >
      <Footer />
    </>
  )
}
