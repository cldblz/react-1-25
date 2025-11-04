import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userInfo from '../json-data/user.json';
import dataInfo from '../json-data/data.json';
import friendsInfo from '../json-data/friends.json';
import transactionsInfo from '../json-data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'var(--color-gray)',
      }}
    >
      <Profile userInfo={userInfo} />
      <Statistics title="Upload stats" dataInfo={dataInfo} />
      <Statistics dataInfo={dataInfo} />
      <FriendList friendsInfo={friendsInfo} />
      <TransactionHistory transactionsInfo={transactionsInfo} />
    </div>
  );
};
