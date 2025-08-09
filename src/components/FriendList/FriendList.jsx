import Friend from '../Friend/Friend';
import friendsData from '/src/data/friendsData.json';
import css from '../FriendList/FriendList.module.css';

function FriendList() {
  return (
    <ul className={css.FriendList}>
      {friendsData.map((friend) => (
        <li>
          <Friend key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
