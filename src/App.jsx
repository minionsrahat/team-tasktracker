import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import DateTimeHeading from './components/DateTimeHeading.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage unavailable; fall back to system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [tasks, setTasks] = useState([])
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  function addTask({ title, description }) {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title, description }])
  }

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <DateTimeHeading />
      <main className="main">
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  )
}
