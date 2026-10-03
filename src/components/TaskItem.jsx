import { useState } from 'react'

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  function startEditing() {
    setTitle(task.title)
    setDescription(task.description)
    setIsEditing(true)
  }

  function handleSave(e) {
    e.preventDefault()
    if (!title.trim()) return

    onUpdate(task.id, { title: title.trim(), description: description.trim() })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="task-item">
        <form className="task-edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            aria-label="Task title"
            autoFocus
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            aria-label="Task description"
          />
          <div className="task-actions">
            <button type="submit" className="btn btn-primary" disabled={!title.trim()}>
              Save
            </button>
            <button type="button" className="btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </li>
    )
  }

  return (
    <li className="task-item">
      <div className="task-content">
        <span className="task-title">{task.title}</span>
        {task.description && (
          <span className="task-description">{task.description}</span>
        )}
      </div>
      <div className="task-actions">
        <button type="button" className="btn" onClick={startEditing}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}
