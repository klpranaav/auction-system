import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

import img1 from '../Images/mcard1.png';
import img2 from '../Images/visa1.png';
import img3 from '../Images/qr1.png'

import Header from './Header';
import Footer from './Footer';

export const Payment = () => {
    const [card, setCard] = useState(false);
    const [upi, setUpi] = useState(false);

    const [cno, setCno] = useState('');
    const [d, setD] = useState('');
    const [cvv, setCvv] = useState('');

    const { amount } = useParams();
    const { id } = useParams();
    const { email } = useParams();
    const { item } = useParams();
    const [resData, setResData] = useState([]);

    useEffect(() => {
        const url = "https://server3-rho.vercel.app/backend/card";
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
        
    const handleC1 = (event) => {
        setCno(event.target.value);
    }

    const handleC2 = (event) => {
        setD(event.target.value);
    }

    const handleC3 = (event) => {
        setCvv(event.target.value);
    }

    const handleCard = () => {
        setCard(true);
        setUpi(false);
    }

    const handleUPI = () => {
        setCard(false);
        setUpi(true);
    }

    const [url, setUrl] = useState('');

    const handleLink = () => {
        let flg = 0;
        if (cno === '') {
            alert('Please enter card number');
        } else if (parseInt(d) - 2023 <= 0) {
            alert('Expiration date must be over a year');
        } else if (cvv === '') {
            alert('Please enter CVV');
        } else {
            
            for(const val of resData) {
                if(val.number === cno)
                {
                    if(val.expiration === d && val.cvv === cvv)
                    {
                        const url1 = "https://server3-rho.vercel.app/backend/del/" + id;
                        Axios.delete(url1)
                        .then((res) => {
                            if (res.status === 200) {
                            console.log("Deleted successfully");
                            console.log(res.data);
                            } else {
                            Promise.reject();
                            }
                        })
                        .catch((err) => alert(err.message));
                        setUrl('/invoice/' + amount + "/" + id + "/" + item + "/" + email);
                    }
                    else
                    {
                        alert("Invalid details");
                    }
                    flg = 1;
                    break;
                }
              }
              if(flg===0)
                alert("Card number not found");
        }
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ fontFamily: "Courier-new", fontSize: "40px" }}>Payment</div>
                <p className="text-success" style={{ fontFamily: "Courier", fontSize: "20px" }}>
                    <b>Amount to pay ${amount} </b>
                </p>
                <p> Order ID {id}</p>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">CARD</h5>
                                <p className="card-text">
                                    Payments can be made using credit cards or debit cards. The expiration date of the card must be at least a year more than the current date according to our company's guidelines.
                                </p>
                                <button onClick={handleCard} className="px-3 mx-2 btn btn-primary bt1" style={{ width: "40%" }}>Card</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">UPI</h5>
                                <p className="card-text">
                                    Google Pay and PayTM UPI payments are supported. Once the payment is done through UPI, click next and wait for the confirmation after which the invoice will be generated.
                                </p>
                                <button onClick={handleUPI} className="px-3 mx-2 btn btn-primary bt1" style={{ width: "40%" }}>UPI</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                {card && (
                    <div>
                        <div className="row">
                            <div className="col mx-2">
                                <img src={img1} alt="Card" />
                            </div>
                            <div className="col mx-2">
                                <img src={img2} alt="Visa" />
                            </div>
                        </div>
                        <form>
                            <div className="form-group d-flex justify-content-center my-3">
                                <input type="text" className="form-control" onChange={handleC1} placeholder="Card Number" />
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <input type="text" className="form-control" onChange={handleC2} placeholder="Expiration Year" />
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <input type="password" className="form-control" onChange={handleC3} placeholder="CVV" />
                            </div>
                            <a href={url} className="btn btn-primary" onClick={handleLink}>Continue</a>
                        </form>
                    </div>
                )}

                {upi && (
                    <div>
                        <center><img src={img3} alt="QR Code" /></center>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
