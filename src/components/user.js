import PropTypes from 'prop-types';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  statFollowers,
  statViews,
  statLikes,
}) {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} width="300" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{statFollowers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{statViews}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{statLikes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statFollowers: PropTypes.number,
  statViews: PropTypes.number,
  statLikes: PropTypes.number,
};
