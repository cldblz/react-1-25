import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  padding-block: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  width: 300px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  font-size: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  color: var(--color-white);
`;

export const StatItem = styled.li`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  :nth-of-type(1) {
    background-color: var(--color-dark-blue);
  }
  :nth-of-type(2) {
    background-color: var(--color-purple);
  }
  :nth-of-type(3) {
    background-color: var(--color-red);
  }
  :nth-of-type(4) {
    background-color: var(--color-dark-gray);
  }
  :nth-of-type(5) {
    background-color: var(--color-dark-green);
  }
`;

export const Label = styled.span`
  font-size: 10px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span``;
