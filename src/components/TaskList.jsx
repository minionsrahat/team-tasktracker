import TaskItem from './TaskItem.jsx'

export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="empty">No tasks yet. Your task list is empty.</p>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
