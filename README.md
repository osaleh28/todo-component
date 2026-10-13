# My first React component

Open the [live app](https://osaleh28.github.io/todo-component/).

GitHub Pages automatically publishes updates pushed to `main`.

Open this folder in VS Code. In its terminal, run:

```sh
npm install
npm start
```

On Windows PowerShell, use `npm.cmd` if PowerShell blocks `npm`.
Open http://localhost:3000 in your browser. Click the checkbox to change the status.

- Component: `src/TodoItem.jsx`, a reusable to-do item.
- Props: `title` (text to display) and `initialCompleted` (initial checkbox value, defaults to false).
- State: `completed`, updated by the checkbox.
- Page: `src/main.jsx`, which renders one component with its props.

