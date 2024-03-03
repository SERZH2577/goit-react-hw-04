import { IoSearch } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handelChange = e => {
    setValue(e.target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handelSubmit}>
        <input
          value={value}
          className={css.input}
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          onChange={handelChange}
        />
        <button type='submit' className={css.btn}>
          <IoSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
