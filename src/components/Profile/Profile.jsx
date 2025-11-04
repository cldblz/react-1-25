import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatElement,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ userInfo }) => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatElement key={stats.followers}>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatElement>
        <StatElement key={stats.views}>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatElement>
        <StatElement key={stats.likes}>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatElement>
      </Stats>
    </ProfileContainer>
  );
};

