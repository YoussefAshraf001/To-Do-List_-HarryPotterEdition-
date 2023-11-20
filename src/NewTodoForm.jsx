import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label className="page-title" htmlFor="item">To Do List</label>
        <input
          value={newItem}
          placeholder="Write Your Task"
          autocomplete="off"
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn-add">Flagrate</button>
      {/* <button className="btn">Flagrate</button> */}
    </form>
  )
}
