import React, { useState } from 'react';

// Props are values supplied by the page using this component.
export default function TodoItem({ title, initialCompleted = false }) {
  // State remembers whether this item is completed.
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <article className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
        <span className={completed ? 'completed' : ''}>{title}</span>
      </label>
      <span className="status" aria-live="polite">
        {completed ? 'Completed' : 'To do'}
      </span>
    </article>
  );
}
