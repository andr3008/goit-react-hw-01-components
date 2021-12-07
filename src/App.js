import Profile from './components/user';
import user from './user.json';
const data = user;
export default function App() {
  return (
    <div>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        statFollowers={data.stats.followers}
        statViews={data.stats.views}
        statLikes={data.stats.likes}
      />
    </div>
  );
}
