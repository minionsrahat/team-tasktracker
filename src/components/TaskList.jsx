export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p className="empty">No tasks yet. Your task list is empty.</p>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span className="task-title">{task.title}</span>
          {task.description && (
            <span className="task-description">{task.description}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
