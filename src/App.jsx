import React from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { useSelector} from 'react-redux'


export default function App() {
  const tasks = useSelector((state) => state.tasks.value)

  return (
    <>
      <Navbar />
      <TaskList tasks={tasks} />
    </>
  );
}
