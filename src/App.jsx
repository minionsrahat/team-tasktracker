import Header from './components/Header.jsx'
import DateTimeHeading from './components/DateTimeHeading.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const tasks = []

  return (
    <div className="app">
      <Header />
      <DateTimeHeading />
      <main className="main">
      </main>
      <Footer />
    </div>
  )
}
