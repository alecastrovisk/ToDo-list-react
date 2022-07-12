import { Circle, Trash } from 'phosphor-react';
import { HTMLAttributes } from 'react';

import styles from './TaskComponent.module.css';

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
}

export function TaskComponent({id, content, isDone}: TaskProps) {
  return (
    <div className={styles.container}>
      <Circle className={styles.icon} size={24} />
      <p>{content}</p>
      <Trash className={styles.icon} size={24} />
    </div>
  );
}