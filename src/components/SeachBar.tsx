import styles from './SearchBar.module.css';
import { PlusCircle } from 'phosphor-react'

export function SearchBar() {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />

      <button className={styles.button}>
        <text>Criar</text>
        <PlusCircle size={16} />
      </button>

    </div>
  );
}
