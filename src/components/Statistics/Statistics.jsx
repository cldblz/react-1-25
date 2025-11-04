import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, dataInfo }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {dataInfo.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsContainer>
  );
};
