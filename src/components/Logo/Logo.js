import s from './Logo.module.css';
export default function Logo({ imgUrl, alt = '' }) {
  return <img src={imgUrl} alt={alt} className={s.logo} />;
}
