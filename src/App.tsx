import { ChangeEvent, FormEvent, useState } from 'react';

import { v4 as uuidV4 } from 'uuid';

import logoSvg from './assets/Logo.svg';
import styles from './App.module.css';

import './global.css';

import { SearchBar } from './components/SeachBar';
import { ToDoEmpty } from './components/ToDoEmpty';
import { TaskComponent } from './components/TaskComponent';
import { PlusCircle } from 'phosphor-react';

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState([] as TaskProps[]);
  const [newTask, setNewTask] = useState({} as TaskProps);
  // const [tasksCount, setTasksCount] = useState(tasks.length - 1);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask({
      id: uuidV4(),
      content: event.target.value,
      isDone: false
    });
  }

  function handleDeleteTask(taskToDelete: TaskProps) {
    const tasksWithoutDeletedOne = tasks.filter(task => 
      task.id !== taskToDelete.id
    );

    setTasks(tasksWithoutDeletedOne);
  }
  return (
    <div className="App">
      <header className={styles.teste}>
        <img src={logoSvg} />
      </header>

      <main className={styles.main}>
        {/* <SearchBar /> */}
        <form onSubmit={handleNewTask}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="Adicione uma nova tarefa"
              value={newTask.content}
              onChange={handleNewTaskChange}
            />

            <button type='submit' className={styles.button}>
              <p>Criar</p>
              <PlusCircle size={16} />
            </button>
          </div>
        </form>

        <div className={styles.info}>
          <span>
            Tarefas criadas <strong>0</strong>
          </span>
          <span>
            Concluídas <strong>0</strong>
          </span>
        </div>

        <div>
          {
            tasks.length === 0  ?
              <ToDoEmpty />
              :
              tasks.map(task =>
                task.content !== '' ?
                <TaskComponent
                  key={uuidV4()}
                  content={task.content}
                  isDone={task.isDone}
                  onDelete={()=> handleDeleteTask(task)}
                />
                : 
                null
              )
          }
        </div>
      </main>
    </div>
  )
}

export default App
