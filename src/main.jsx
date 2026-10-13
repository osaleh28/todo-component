import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoItem from './TodoItem.jsx';
import './styles.css';

// Render our component on a simple page, passing its props.
createRoot(document.getElementById('root')).render(
  <main>
    <p className="eyebrow">My first React component</p>
    <h1>One small task.</h1>
    <TodoItem title="Learn React components" initialCompleted={false} />
  </main>
);
