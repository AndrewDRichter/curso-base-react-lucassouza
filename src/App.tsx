import { Card } from "./components/Card"
import { CardTitle } from "./components/CardTitle"
import { CardContent } from "./components/CardContent"
import { Header } from "./components/Header/Header"
import { useState } from "react"
import { FormTask } from "./components/FormTask"
import { List } from "./components/List"

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
            <Card key={item.id}>
              <CardTitle>
                <h1>
                  {item.task}
                </h1>
                {!item.complete ? (
                  <button style={{ height: '30px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={() => handleDeleteTask(item.id)}>
                    Delete
                  </button>
                ) : (
                  <span style={{ fontSize: '16px', color: 'green' }}>Completed</span>
                )}
              </CardTitle>
              <CardContent>
                <p style={{ fontSize: '14px', color: 'gray', padding: '0px 14px' }}>{item.description}</p>
                <p>Get <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '5px', backgroundColor: 'green', padding: '6px' }}>{item.taskPoints}</span> points</p>
              </CardContent>
              {!item.complete && <button
                style={{ color: '#fff', cursor: 'pointer', backgroundColor: 'green', border: 'none', padding: '10px', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                onClick={() => handleCompleteTask(item.id)}
              >
                Done!
              </button>
              }
            </Card>
          ))}
        </List>
      </div >
    </>
  )
}
