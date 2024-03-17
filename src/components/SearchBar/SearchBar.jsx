import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => {
  toast.error("Enter your search term!", { duration: 2000 });
};

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      notify();
      return;
    }

    onSubmit(value);

    setValue("");
  };

  return (
    <header className={css.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handelSubmit}>
        <input
          value={value}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handelChange}
        />
        <button type="submit" className={css.btn}>
          <IoSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
