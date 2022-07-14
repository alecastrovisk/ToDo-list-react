import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import styles from './TaskComponent.module.css';

interface TaskProps {
  content: string;
  isDone: boolean;
  onDelete: () => void;
}

export function TaskComponent({ content, isDone, onDelete }: TaskProps) {
  const [done, setDone] = useState(isDone);

  function handleTaskIsDone() {
    setDone(!done);
  }

  return (
    <div className={styles.container}>
      {done ?
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