import PropTypes from 'prop-types';
import s from './Friendlist.module.css';
export default function Friendlist({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <li className={s.friend} key={friend.id}>
          <span
            className={friend.isOnline ? s.statusOnline : s.statusOffline}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
