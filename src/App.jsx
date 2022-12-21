import { useState } from "react"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
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

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <>
      <Header />
      <AddTask
        onAdd={addTask}
      />
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : "Congrats, you've completed all your tasks!"}
    </>
  )
}

export default App