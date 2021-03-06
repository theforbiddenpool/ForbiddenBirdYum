import styles from './Editor.module.scss';

export default function Section({ id, handleInput, handleRemove }) {
  return (
    <div className={`${styles.section} ${styles.wordbreak}`} data-id={id}>
      <div className={styles.keyword} onInput={handleInput} contentEditable />
      <div className={styles.content} onInput={handleInput} contentEditable />
      <div className={styles.trashcan}>
        <button type="button" onClick={handleRemove} data-target={id}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
        </button>
      </div>
    </div>
  );
}
