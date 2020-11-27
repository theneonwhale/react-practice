import PropTypes from 'prop-types';
import s from './Alert.module.css';
import Container from '../Container/Container';

function Alert({ text, type }) {
  return (
    <Container>
      <p role="alert" className={s[type]}>
        {text}
      </p>
    </Container>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

export default Alert;
