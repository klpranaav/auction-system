import { useEffect, useState } from "react";
import Axios from "axios";
import TableRow from "./TableRow";

export const Test = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const url = "https://server3-rho.vercel.app/cart/";
    Axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          setResData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const Datatable = () => {
    return resData.map((val, ind) => {
      return <TableRow obj={val} key={ind} />;
    });
  };

  return (
    <div class="container">
      Test
      <table class="mx-auto bg-primary table-bordered table-hover my-4">
        <tr class="bg-success">
          <th>Index</th>
          <th>Item Name</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        <tbody>{Datatable()}</tbody>
      </table>
    </div>
  );
};
