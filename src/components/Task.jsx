import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3
        style={{ color: "#EE96C8" }}
      >
        {task.text}
        <FaTimes
          style={{ color: "#FF481F", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task