import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import styles from './todo.module.css';

export default function Todo({todo, onUpdated, onDeleted}) {
  const {id, text, status} = todo;
  const handleChange = e => {
    const status = e.target.checked ? true : false;
    onUpdated({...todo, status});
  }
  const handleDelete = () => onDeleted(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
      <button
        className={styles.button}
        onClick={handleDelete}>
          <FaTrashAlt/>
      </button>
      </span>
    </li>
  )
}
