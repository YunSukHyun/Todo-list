import React, { useEffect, useState } from 'react'
import { AddTodo } from '../addTodo/addTodo';
import Todo from '../todo/todo';
import styles from './todoList.module.css';

export const TodoList = ({filter}) => {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
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
function readTodosFromLocalStorage(){
  console.log("sibal");
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
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
