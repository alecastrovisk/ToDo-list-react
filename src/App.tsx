import logoSvg from './assets/Logo.svg';

import styles from './App.module.css';

import './global.css';

import { SearchBar } from './components/SeachBar';
import { ToDoEmpty } from './components/ToDoEmpty';

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
        
        <ToDoEmpty />
      </main>
    </div>
  )
}

export default App
