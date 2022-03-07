import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import toDoContext from './contexts/toDoContext';
import './toDo.css'


function App() {
  const [toDo, setToDo] = useState([])
  const [task, setTask] = useState('')
  const clickHandler = (e) => {
    e.preventDefault();
    setToDo([...toDo, {discription: task}]);
    setTask('');
  }
  return (
    <toDoContext.Provider value={{toDo, setToDo}}>
      <div className='container'>
      <div className='toDo'>
        <form action="post" className='form'>
          <input value={task} type="text" className='discription' onChange={(e) => setTask(e.target.value)}/>
          <button className='postButton' onClick={e => clickHandler(e) }>Добавить задание</button>
        </form>
      {toDo.map((item, index) => <ToDoItem task={item} number={index} key={index} />)}
      </div>
      </div>
    </toDoContext.Provider>
  );
}

export default App;
