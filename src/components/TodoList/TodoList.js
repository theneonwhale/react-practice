import React from 'react';
import './TodoList.css';
import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <div>
      <p>Todo List</p>
      <ul>
        {todos.map(({ id, text, completed }) => {
          return (
            <li
              className={classNames('TodoList__item', {
                'TodoList__item--completed': completed,
              })}
              key={id}
            >
              <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={() => onToggleCompleted(id)}
              />
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
