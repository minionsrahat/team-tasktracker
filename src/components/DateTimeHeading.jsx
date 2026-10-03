import { useEffect, useState } from 'react'

export default function DateTimeHeading() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <h2 className="datetime">
      {now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}{' '}
      &middot; {now.toLocaleTimeString()}
    </h2>
  )
}
