import logoSvg from './assets/Logo.svg';

import styles from './App.module.css';

import './global.css';

import { SearchBar } from './components/SeachBar';
import { ToDoEmpty } from './components/ToDoEmpty';
import { TaskComponent } from './components/TaskComponent';

const tasks = [
  {
    id: '1',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ducimus cupiditate accusantium consequuntur? Consectetur, est dolor nesciunt doloremque quasi ipsa ad dolores quia doloribus odio, obcaecati quisquam, itaque officiis voluptates!',
    done: false
  },
  {
    id: '2',
    content: 'Estudar React',
    done: true
  },
  {
    id: '3',
    content: 'Estudar React',
    done: false
  },

];

function App() {
  return (
    <div className="App">
      <header className={styles.teste}>
        <img src={logoSvg} />
      </header>

      <main className={styles.main}>
        <SearchBar />

        <div className={styles.info}>
          <span>
            Tarefas criadas <strong>0</strong>
          </span>
          <span>
            Concluídas <strong>0</strong>
          </span>
        </div>

        {/* <ToDoEmpty /> */}
        <div>
        {
          tasks.map(task => 
            <TaskComponent
              id={task.id}
              content={task.content}
              isDone={task.done}
            />
          )
        }
        </div>
      </main>
    </div>
  )
}

export default App
