import PropTypes from 'prop-types';
import s from './Friendlist.module.css';
export default function Friendlist({ items }) {
  return (
    <ul className={s.friend_list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <span className={s.status}></span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={s.name}></p>
        </li>
      ))}
    </ul>
  );
}
Friendlist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
