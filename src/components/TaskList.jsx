export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p className="empty">No tasks yet. Your task list is empty.</p>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  )
}
