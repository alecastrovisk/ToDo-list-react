import styles from './ToDoEmpty.module.css';

import clipboard from '../assets/Clipboard.svg';

export function ToDoEmpty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Cool clipboard image" />
      <h1>
        <strong>
          Você ainda não tem tarefas cadastradas
        </strong>
      </h1>
      <h1>Crie tarefas e organize seus itens a fazer</h1>
    </div>
  );
}