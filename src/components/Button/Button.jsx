import button from './Button.module.css';
export function Button({ onClick }) {
  return (
    <button onClick={onClick} type="submit" className={button.button}>
      Load more
    </button>
  );
}
