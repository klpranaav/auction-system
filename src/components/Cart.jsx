import './Cart.css';
import img from '../Images/cart1.png';
import { useEffect, useState } from "react";
import Axios from "axios";
import TableRow from "./TableRow";
import Footer from './Footer';
import Header from './Header';
import { useParams } from 'react-router-dom';


export const Cart = (props) => {
  const [resData, setResData] = useState([]);
  const {email} = useParams();
  console.log(email);
  //const emailToFind = email;
  useEffect(() => {
    const url = "https://server3-rho.vercel.app/backend/cart/" + email;
    //`https://server3-rho.vercel.app/backend/cart?email=${emailToFind}
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
    <div>
      <Header />
      <div className="container my-5" style={{ minHeight: "90vh" }}>
        <div className="display-4 my-2">Cart</div>
        <img src={img} alt="cart" />
        <br></br>
        <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr className="bg-dark">
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{Datatable()}</tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
