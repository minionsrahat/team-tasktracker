import { useEffect, useState } from 'react'

export default function DateTimeHeading() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="datetime">
      <p className="greeting">{getGreeting(now.getHours())}</p>
      <h2>
        {now.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        &middot; {now.toLocaleTimeString()}
      </h2>
    </div>
  )
}

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 21) return 'Good evening'
  return 'Good night'
}
