import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const DATA = [
  {
    id: 1,
    title: "Homework",
  },
  {
    id: 2,
    title: "Clean House",
  },
  {
    id: 3,
    title: "Read Book",
  },
];

const Todo = () => {
  const [taskList, setTaskList] = useState(DATA);

  const addTaskHandler = (task) => {
    const listTaskTemp = [...taskList];
    listTaskTemp.push(task);
    setTaskList(listTaskTemp);
  };

  const updateTaskHandler = () => {};

  const deleteTaskHandler = (id) => {
    const listTaskTemp = [...taskList];
    const deleteTasks = listTaskTemp.filter((item) => item.id !== id);
    setTaskList(deleteTasks);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1>To do App</h1>
      <ul>
        {taskList.length === 0 ? (
          <div>No task </div>
        ) : (
          taskList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              onDeleteTask={deleteTaskHandler}
            />
          ))
        )}
      </ul>
      <div className="text-danger">Task left: {taskList.length}</div>
      <TodoForm onAddTask={addTaskHandler} />
    </div>
  );
};

export default Todo;
