import logoSvg from './assets/Logo.svg';

import styles from './App.module.css';

import './global.css';
import { SearchBar } from './components/SeachBar';

function App() {
  return (
    <div className="App">
      <header className={styles.teste}>
        <img src={logoSvg} />
      </header>

      <main className={styles.main}>
        <SearchBar />
        
        <div className='tasks'>
          <span>
            Tarefas criadas<strong>0</strong>
          </span>
          <span>
            Concluídas<strong>0</strong>
          </span>
        </div>

        <div></div>

        <div> 
          <img src="" alt="" />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h1>Crie tarefas e organize seus itens a fazer</h1>
        </div>
      </main>
    </div>
  )
}

export default App
