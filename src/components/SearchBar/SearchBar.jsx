import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.input}
          type='text'
          autocomplete='off'
          autofocus
          placeholder='Search images and photos'
        />
        <button type='submit' className={css.btn}>
          <IoSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
