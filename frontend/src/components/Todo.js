import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const DATA = [
  {
    id: 1,
    title: "Homework",
    done: true,
  },
  {
    id: 2,
    title: "Clean House",
    done: false,
  },
  {
    id: 3,
    title: "Read Book",
    done: false,
  },
];

const Todo = () => {
  const [taskList, setTaskList] = useState(DATA);

  const addTaskHandler = (task) => {
    const listTaskTemp = [...taskList];
    listTaskTemp.push(task);
    setTaskList(listTaskTemp);
  };

  const deleteTaskHandler = (id) => {
    const listTaskTemp = [...taskList];
    const deleteTasks = listTaskTemp.filter((item) => item.id !== id);
    setTaskList(deleteTasks);
  };

  const doneTaskHandler = (id) => {
    const listTaskTemp = [...taskList];
    const doneTasks = listTaskTemp.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTaskList(doneTasks);
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
              done={item.done}
              onDeleteTask={deleteTaskHandler}
              onDoneTask={doneTaskHandler}
            />
          ))
        )}
      </ul>
      <div className="text-danger">Task left: {taskList.length}</div>
      <TodoForm onAddTask={addTaskHandler} />
      <ToastContainer />
    </div>
  );
};

export default Todo;
