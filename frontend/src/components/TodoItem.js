import React from "react";

const TodoItem = ({ id, title, onDeleteTask, onUpdateTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleUpdateTask = () => {
    onUpdateTask(id);
  };

  return (
    <li>
      <input
        className="form-check-input me-2"
        type="checkbox"
        defaultValue
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
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
