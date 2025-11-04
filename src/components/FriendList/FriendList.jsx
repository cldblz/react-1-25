import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friendsInfo }) => {
  return (
    <List>
      {friendsInfo.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};
