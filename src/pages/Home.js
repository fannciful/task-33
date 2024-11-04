import React from 'react';
import TodoList from '../components/TodoList';
import ThemeSwitcher from '../components/ThemeSwitcher';

function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <h1>Main page</h1>
      <TodoList />
    </div>
  );
}

export default Home;
