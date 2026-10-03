import { useState } from 'react'
import Header from './components/Header.jsx'
import DateTimeHeading from './components/DateTimeHeading.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [tasks, setTasks] = useState([])

  function addTask({ title, description }) {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title, description }])
  }

  function updateTask(id, changes) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...changes } : task))
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <DateTimeHeading />
      <main className="main">
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </main>
      <Footer />
    </div>
  )
}
