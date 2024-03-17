import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ error, isHidden }) {
  return (
    <div className={css.container}>
      <p className={css.error} style={{ display: isHidden }}>
        {error}
      </p>
    </div>
  );
}
