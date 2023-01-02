import React, { useState } from 'react'
import { AddTodo } from '../addTodoList/addTodoList';
import Todo from '../todo/todo';
import styles from './todoList.module.css';

export const TodoList = ({filter}) => {
  const [todos, setTodos] = useState([
    {id: '123', text: '장보기', status: false},
    {id: '124', text: '공부하기', status: false},
  ]);
  const handleAdd = todo => setTodos([...todos, todo]);
  const handleUpdate = updated => setTodos(todos.map(td => td.id === updated.id ? updated : td));
  const handleDelete = deleted => setTodos(todos.filter(td => td.id !== deleted.id));
  const filtered = getFilteredItems(todos, filter);
  return(
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map(item => (
          <Todo
            key={item.id}
            todo={item}
            onUpdated={handleUpdate}
            onDeleted={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

function getFilteredItems(todos, filter){
  if(filter === 'all'){
    return todos;
  }
  else if(filter === 'active')
    return todos.filter(todo => todo.status === false);
  else
    return todos.filter(todo => todo.status === true);
}