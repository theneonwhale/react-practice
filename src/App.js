import React, { Component } from 'react';

import Container from './components/Container/Container';

// import Counter from './components/Counter/Counter';

// import Dropdown from './components/Dropdown/Dropdown';

// import ColorPicker from './components/ColorPicker';

import TodoList from './components/TodoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

import initialTodos from '../src/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodos = todos.length;
    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodosCount = todos.reduce((acc, todo) => {
      return todo.completed ? acc + 1 : acc;
    }, 0);

    return (
      <Container>
        {/* <Counter initialValue={100} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Total todo: {totalTodos}</p>
          <p>Completed todo: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

// export default function App() {
//   return (
//     <Container>
//       {/* <Counter initialValue={100} /> */}
//       {/* <Dropdown /> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </Container>
//   );
// }

export default App;
