import React from "react";

const TodoItem = ({
  id,
  title,
  done,
  onDeleteTask,
  onUpdateTask,
  onDoneTask,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleUpdateTask = () => {
    onUpdateTask(id);
  };

  const handleDoneTask = () => {
    onDoneTask(id);
  };

  return (
    <li>
      <input
        className="form-check-input me-2"
        type="checkbox"
        defaultValue
        id="flexCheckDefault"
        defaultChecked={done}
        onChange={handleDoneTask}
      />
      <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
        style={{ textDecoration: done ? "line-through" : null }}
      >
        {title}
      </label>
      <div className="btn-group">
        <button type="button" className="btn">
          <i className="bi bi-pen" onClick={handleUpdateTask}></i>
        </button>
        <button type="button" className="btn">
          <i className="bi bi-trash" onClick={handleDeleteTask}></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
