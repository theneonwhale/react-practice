import React, { Component, createContext } from 'react';

import Container from './components/Container/Container';

// import Counter from './components/Counter/Counter';

// import Dropdown from './components/Dropdown/Dropdown';

// import ColorPicker from './components/ColorPicker';

// import Form from './components/Form/Form';

import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import initialTodos from '../src/todos.json';
import shortid from 'shortid';
import Filter from './components/TodoEditor/Filter';

import { FaFortAwesomeAlt } from 'react-icons/fa';
import Basic from './components/Formik/Formik';
import AppBar from './components/AppBar/AppBar';
import avatar from './avatar.png';
import authContext from './context/auth-context';

console.log(authContext);
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: '',
    filter: '',
    isLoggedIn: false,
    user: { name: 'Манго', avatar },
    onLogIn: () => this.setState({ isLoggedIn: true }),
    onLogOut: () => this.setState({ isLoggedIn: false }),
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // toggleCompleted = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id !== todoId) {
  //         return { ...todo, completed: !todo.completed };
  //       }
  //       return todo;
  //     }),
  //   }));
  // };
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTodo = text => {
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // handleInputChange = event => {
  //   this.setState({ inputValue: event.currentTarget.value });
  // };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleSurnameChange = event => {
  //   this.setState({ surname: event.currentTarget.value });
  // };

  // formSubmitHandler = data => {};

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodoCount = todos.reduce((acc, todo) => {
      return todo.completed ? acc + 1 : acc;
    }, 0);
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );

    return (
      <authContext.Provider value={this.state}>
        <Container>
          {/* <Form onSubmit={this.formSubmitHandler} /> */}
          {/* <Counter initialValue={100} /> */}
          {/* <Dropdown /> */}
          {/* <ColorPicker options={colorPickerOptions} /> */}
          {/* <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <div>
          <p>Total todo: {totalTodoCount}</p>
          <p>Completed todo: {completedTodoCount}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
          {/* <Basic /> */}
          <AppBar />
          <FaFortAwesomeAlt color="pink" />
        </Container>
      </authContext.Provider>
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
