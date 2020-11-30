import React from 'react';

function Controls({ onIncrement, onDecrement }) {
  return (
    <div className="Counter_controls">
      <button type="button" onClick={onIncrement}>
        Increase by 1
      </button>
      <button type="button" onClick={onDecrement}>
        Decrease by 1
      </button>
    </div>
  );
}

export default Controls;
