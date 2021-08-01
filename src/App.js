import {React, useState} from 'react'
import Header from './components/Header'
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(
    [{
      id: 1,
      text: 'First Task'
    }]
  );
  const handleAddTask = (value) => {
    console.log(value);
    let task = {
      id: taskList.length + 1,
      text: value
    }
    console.log(task);
    setTaskList([...taskList,task]);
  }

  return (
    <div className="container">
      <Header title="TODO-LIST" />
      <InputTask handleAddTask={handleAddTask} />
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
