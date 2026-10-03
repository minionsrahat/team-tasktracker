import ThemeToggle from './ThemeToggle.jsx'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
