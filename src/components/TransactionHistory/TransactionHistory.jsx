import {
  Table,
  TableHeader,
  HeaderCell,
  Row,
  Cell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionsInfo }) => {
  return (
    <Table>
      <TableHeader>
        <Row>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </Row>
      </TableHeader>
      <tbody>
        {transactionsInfo.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};
