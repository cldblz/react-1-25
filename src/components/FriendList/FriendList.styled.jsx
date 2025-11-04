import styled from '@emotion/styled';

export const List = styled.ul`
  margin-bottom: 20px;
  width: 300px;
`;

export const Item = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const Status = styled.span`
  margin-right: 10px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  ${props => setStatus(props.isOnline)}
`;
export const Avatar = styled.img`
  margin-right: 10px;
`;
export const Name = styled.p``;

function setStatus(isOnline) {
  return isOnline
    ? 'background-color: var(--color-green);'
    : 'background-color: var(--color-red);';
}
