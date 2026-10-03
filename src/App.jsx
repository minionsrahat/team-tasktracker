import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const tasks = []

  return (
    <div className="app">
      <Header />
      <main className="main">
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  )
}
