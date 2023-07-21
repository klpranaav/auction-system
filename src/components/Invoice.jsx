import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

export const Invoice = () => {
  const { amount, id, email } = useParams();
  const [data, setData] = useState([]);
  const {item} = useParams();
  useEffect(() => {
    const url1 = "https://server3-rho.vercel.app/backend/user-details/" + email;
    Axios.get(url1)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
    
  }, []);

  
  let name = '';
  let phno = '';
  for(const val of data)
  {
    name =val.name;
    phno = val.mobNo;
  }
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div
          className="text-end"
          style={{ fontFamily: "fantasy", fontSize: "45px" }}
        >
          INVOICE
        </div>
        <br></br>
        <hr style={{ size: "10px", color: "blue" }}></hr>
        <div style={{ fontFamily: "monospace" }}>
          {name}
          <br></br>
          {phno}
          <br></br>
          {email}
        </div>
        <div className="my-5">
          <table className="table" style={{ fontFamily: "Courier", fontWeight: "900" }}>
            <tbody>
              <tr>
                <td>Order ID</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>Item Name</td>
                <td>{item}</td>
              </tr>
              <tr>
                <td>Delivery incharge</td>
                <td>Siva</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>{amount}</td>
              </tr>
              <tr>
                <td>Payment Status</td>
                <td className="text-success font-weight-bold">PAID</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <p>Terms and Conditions</p>
          <p style={{ wordBreak: "break-word", fontSize: "10px" }}>
            By accessing this website we assume you accept these terms and
            conditions in full. Do not continue to use JAPS’s website if you do
            not accept all of the terms and conditions stated on this page. The
            following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and any or all Agreements:
            Client, You and Your refers to you, the person accessing this
            website and accepting the Company’s terms and conditions. The
            Company, Ourselves, We, Our and Us, refers to our Company. Party,
            Parties, or Us, refers to both the Client and ourselves, or either
            the Client or ourselves. All terms refer to the offer, acceptance
            and consideration of payment necessary to undertake the process of
            our assistance to the Client in the most appropriate manner,
            whether by formal meetings of a fixed duration, or any other means,
            for the express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services/products, in accordance
            with and subject to, prevailing law of India. Any use of the above
            terminology or other words in the singular, plural, capitalisation
            and/or he/she or they, are taken as interchangeable and therefore
            as referring to same.
          </p>
          <p>
            Thanking You for visiting our website. We hope you are satisfied
            with your purchase and we look forward to doing busniess with you
            once again.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
