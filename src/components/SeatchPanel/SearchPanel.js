import React, { useState } from 'react';
import styles from './SearchPanel.module.css';

import { IoSearchSharp } from 'react-icons/io5';

const SearchPanel = (props) => {
  const [inputText, setInputText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSearch(inputText.toLowerCase());
    setInputText('');
  }

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className={styles.input}
        value={inputText}
        placeholder='Enter city name'
        onChange={(e) => setInputText(e.target.value.trim())}
      />
      <button
        className={styles.searchBtn}
      >
        <IoSearchSharp /> 
      </button>
    </form>
  );
}

export default SearchPanel;