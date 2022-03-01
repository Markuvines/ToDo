import React from 'react';

const ToDoItem = props => {
  return (
    <div className='toDoItem'>
      <label className='check'>
        <input className='checkbox' type="checkbox"/> 
        <span className='check__box'></span>
        <span className='checkboxDisc'>Сходить посрать</span>
      </label>
    </div>
  );
};

export default ToDoItem;