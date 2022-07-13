import styles from './SearchBar.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';

export function SearchBar() {
  return (
    <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
        />

      <button type='submit' className={styles.button}>
        <p>Criar</p>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
