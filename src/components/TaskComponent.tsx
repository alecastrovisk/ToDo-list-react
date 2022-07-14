import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import styles from './TaskComponent.module.css';

interface TaskProps {
  content: string;
  handleTaskIsDone: () => void;
  onDelete: () => void;
  isDone: boolean;
}

export function TaskComponent({ content, handleTaskIsDone, isDone, onDelete }: TaskProps) {
  return (
    <div className={styles.container}>
      {isDone ?
        <>
          <CheckCircle
            className={styles.checkedIcon}
            size={24}
            onClick={handleTaskIsDone}
          />
          <p className={styles.checkedText}>{content}</p>
        </>
        :
        <>
          <Circle
            className={styles.icon}
            size={24}
            onClick={handleTaskIsDone}
          />
          <p>{content}</p>
        </>
      }
      <Trash
       className={styles.icon} 
       size={24}
       onClick={onDelete}
      />
    </div>
  );
}