import Profile from './components/profile/user';
import user from './user.json';
import Statistics from './components/statistics/statistics';
// import statistics from './statistics.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statFollowers={user.stats.followers}
        statViews={user.stats.views}
        statLikes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statistics} />
    </div>
  );
}
