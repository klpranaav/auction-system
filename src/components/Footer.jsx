import React from 'react';


const Footer = () => {
  return (
    <div className="bg-dark text-light footer">
      <div className="container">
        <div className="row my-3 text-secondary">
          <div className="col-4">CONSUMER POLICY</div>
          <div className="col-4">ABOUT</div>
          <div className="col-4">HELP</div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <a href="/tandc" style={{ color: 'white', textDecoration: 'none' }}>
              Terms and Conditions
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              About us
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Payments
            </a>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              User Agreement
            </a>
          </div>
          <div className="col-4">
            <a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>
              FAQ
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Shipping
            </a>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Licenses and policies
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Customer Service
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Others
            </a>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Security Policy
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}>
              Consumer Feedback
            </a>
          </div>
          <div className="col-4">
            <a href="#a" style={{ color: 'white', textDecoration: 'none' }}></a>
          </div>
        </div>
      </div>
      <hr style={{ color: 'white' }}></hr>
      <div className="container" style={{ fontSize: '10px' }}>
        <div className="row">
          <div className="col-4">
            OFFICE ADDRESS
            <br></br> VIT University
            <br></br>Vandalur-Kelambakam Road
            <br></br>Chennai
            <br></br>
            <br></br>CONTACT DETAILS
            <br></br> *number*
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            ADVERTISE WITH US
            <br></br>Please contact the below number or send
            <br></br> an email to the below mentioned mail id if
            <br></br>
            if you would like to advertise on our website
            <br></br>
            <br></br>
            CONTACT DETAILS
            <br></br> *number*
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
