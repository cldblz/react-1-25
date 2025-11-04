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
        <tr>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </tr>
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
