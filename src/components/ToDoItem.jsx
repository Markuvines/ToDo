import React, { useContext, useState } from 'react';
import toDoContext from '../contexts/toDoContext';
//import delete from '../image/delete.svg';
import deleteImg from '../image/delete.svg';
import edit from '../image/edit.svg';

const ToDoItem = props => {
  const {toDo, setToDo} = useContext(toDoContext);
  const [isEdit, setIsEdit] = useState(false);
  const [edited , setEdited] = useState(props.task.discription);
  return (
    <div className='toDoItem'>
      {isEdit ?<> <input type='text' value={edited} onChange={e => setEdited(e.target.value)}/> 
      <button onClick={() => {let arr = [...toDo]
      arr[props.number].discription = edited
       setToDo([...arr])
       setIsEdit(!isEdit)}}>Ок</button></>
      :<>
      <label className='check'>
        <input className='checkbox' type="checkbox"/> 
        <span className='check__box'></span>
        <span className='checkboxDisc'>{`${props.number + 1}.${props.task.discription}`}</span>
      </label>
      <img className='checkEdit' src={edit} alt="edit" onClick={() => {
        setIsEdit(!isEdit)
      }}/>
      <img className='checkDel' src={deleteImg} alt="delete" onClick={(e) => {
        setToDo([...toDo.filter((item) => item !== props.task)]) 
      }}/>
      </>}
    </div>
  );
};

export default ToDoItem;