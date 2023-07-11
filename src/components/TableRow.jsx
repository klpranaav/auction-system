import './Cart.css';
import { useState } from 'react';
const TableRow = (props) => {
  // Object Destruction
  const { _id, name, price, buyer } = props.obj;
  const [url, setURL] = useState('');

  const handleClick = () => {
    setURL('/payment/' + price + "/" + _id + "/" + name + "/" + buyer);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <a
          href={url}
          className="btn btn-primary"
          style={{ width: "100px" }}
          onClick={handleClick}
        >
          Pay
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
