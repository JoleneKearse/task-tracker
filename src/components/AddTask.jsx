import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // validation
    if (!text) {
      alert("Oh no! You're missing your task! 😭")
      return
    }

    onAdd({ text, day, reminder })

    // clear the form
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form
      className="add-form"
      onSubmit={onSubmit}
    >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
          style={{ color: "#EE96C8" }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day & Time"
          style={{ color: "#EE96C8" }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        className="btn btn-block"
        type="submit"
        value="Save Task"
      />
    </form>
  )
}

export default AddTask