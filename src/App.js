import { useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import toDoContext from './contexts/toDoContext';
import './toDo.css'


function App() {
  const [toDo, setToDo] = useState([])
  return (
    <toDoContext.Provider value={toDo, setToDo}>
      <div className='container'>
      <div className='toDo'>
        <form action="post" className='form'>
          <input type="text" className='title'/>
          <input type="text" className='discription'/>
        </form>

        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </div>
      </div>
    </toDoContext.Provider>
  );
}

export default App;
