import Profile from './components/Profile/Profile';
import profile from './components/Profile/Profile.json';
import Statistics from './components/Statistics/Statistics';
import statistics from './components/Statistics/Statistics.json';
import FriendList from './components/Friendlist/Friendlist';
import friendlist from './components/Friendlist/Friendlist.json';
import Transaction from './components/Transaction/Transaction';
import transaction from './components/Transaction/Transaction.json';
import s from './App.module.css';
export default function App() {
  return (
    <div className={s.App}>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        statFollowers={profile.stats.followers}
        statViews={profile.stats.views}
        statLikes={profile.stats.likes}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friendlist} />
      <Transaction items={transaction} />
    </div>
  );
}
