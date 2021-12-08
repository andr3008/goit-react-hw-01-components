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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} width="100" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{statFollowers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{statViews}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{statLikes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statFollowers: PropTypes.number.isRequired,
  statViews: PropTypes.number.isRequired,
  statLikes: PropTypes.number.isRequired,
};
