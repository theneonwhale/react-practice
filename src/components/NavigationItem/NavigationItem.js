import { NavLink } from 'react-router-dom';
import s from './NavigationItem.module.css';

export default function NavigationItrm({ to, text, icon }) {
  return (
    <li>
      <NavLink to={to} className={s.item} activeClassName={s.active}>
        {icon} {text}
      </NavLink>
    </li>
  );
}
