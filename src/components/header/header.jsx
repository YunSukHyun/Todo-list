import React from 'react'
import styles from './header.module.css';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header} >
      <button className={styles.toggle} onClick={() => toggleDarkMode()}>
        {darkMode ? <BsFillMoonFill/>:<BsFillSunFill/>}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, idx) =>
          <li key={idx}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={()=>onFilterChange(value)}>
              {value}
            </button>
          </li>)}
      </ul>
    </header>
  )
}
