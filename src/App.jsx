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

  return (
    <div className="app">
      <Header />
      <DateTimeHeading />
      <main className="main">
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  )
}
