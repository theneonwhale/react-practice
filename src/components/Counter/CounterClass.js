import styles from './Counter.module.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import { getValue } from '../../redux/counter/counter-selectors';
export default function CounterClass() {
  const value = useSelector(getValue);
  const step = useSelector(state => state.counter.step);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.value}>{value}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(actions.increment(step))}
      >
        Увеличить на {step}
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(actions.decrement(step))}
      >
        Уменьшить на {step}
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });
// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(actions.increment(value)),
//   onDecrement: value => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
