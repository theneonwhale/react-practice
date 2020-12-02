import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      <p>Todo List</p>
      <ul>
        {todos.map(({ id, text }) => {
          return (
            <li className="TodoList__item" key={id}>
              <p className="TodoList__text">{text}</p>
              <button onClick={() => onDeleteTodo(id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// class TodoList extends Component {
//   render() {
//     return;
//   }
// }

export default TodoList;
