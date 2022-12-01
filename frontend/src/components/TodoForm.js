import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onAddTask, onDeleteTask, id }) => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: title,
      done: false,
    };

    onAddTask(newTask);
    setTitle("");
  };

  const isDisabledSubmitButton = !title;

  return (
    <form className="d-flex pt-5" onSubmit={handleAddNewTask}>
      <input
        type="text"
        className="form-control me-2"
        value={title}
        onChange={handleChangeTitle}
      />
      <button
        type="submit"
        className="btn btn-success"
        disabled={isDisabledSubmitButton}
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
