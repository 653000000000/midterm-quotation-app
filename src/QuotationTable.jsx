import { Table, Button } from "react-bootstrap";

function QuotationTable({ data, clearDataItems, deleteByIndex }) {
  const totalDiscount = data.reduce((total, item) => total + item.discount, 0);
  const totalAmount = data.reduce((total, item) => total + ((item.ppu * item.qty) - item.discount), 0);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price Per Unit</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.item}</td>
            <td>{item.ppu}</td>
            <td>{item.qty}</td>
            <td>{item.discount}</td>
            <td>{(item.ppu * item.qty) - item.discount}</td>
            <td>
              <Button variant="danger" onClick={() => deleteByIndex(index)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">Total Discount</td>
          <td>{totalDiscount}</td>
          <td>
            <Button variant="warning" onClick={clearDataItems}>
              Clear
            </Button>
          </td>
        </tr>
        <tr>
          <td colSpan="5">Total Amount</td>
          <td>{totalAmount}</td>
          <td></td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default QuotationTable;
