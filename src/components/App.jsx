import { Profile } from 'components/Profile/Profile';
import user from './user.json';
export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      views={user.stats.views}
      likes={user.stats.likes}
      followers={user.stats.followers}
    />
  );
};
