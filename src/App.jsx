import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Piggy Pedicure',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // delete task
  const deleteTask = (id) => {
    console.log(`delete:`, id)
  }

  return (
    <>
      <Header />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
      />
    </>
  )
}

export default App