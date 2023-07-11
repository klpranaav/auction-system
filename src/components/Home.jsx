import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Images/aubg1.png';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Header />
      <img style={{width: "100%", height: "608px"}} src={img} alt="auction-background-img1" className="bg-image" />
      <div>
        
        <div className="cl1" style={{ width: '65%', height: '40%' }}>
          <div>
            <p style={{ fontSize: '60px' }}>Welcome to JAPS auction!</p> You can buy and sell items at your convenience. We offer goods transportation from the seller to the buyer at no cost within certain countries listed in our <a href="#a">Q/A page</a>. For other regions, a fee is charged if you would like us to handle the delivery process.
            <br></br>We hope you find what you need or sell your product for a reasonable price. <br></br>Good luck with the auction!.
          </div>
        </div>
        
      </div>
      <Footer className="footer" />

    </div>
  );
};

export default Home;
