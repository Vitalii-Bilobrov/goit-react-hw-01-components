import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friends, avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        className={css.status}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
