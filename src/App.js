import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Description from './components/Description';
import Home from './components/Home';
import Profile from './components/Profile';
import AddProducts from './components/AddProducts';
import Cards from './components/Cards';
import { Cart } from './components/Cart';
import {Payment} from './components/Payment';
import {Invoice} from './components/Invoice';
import {FAQ} from './components/Faq';
import { TandC } from './components/TandC';
import { Update } from './components/update-det';
import { ChangePass } from './components/ChangePass';
import Bid from './components/Bid';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <div>

            <Routes>
              <Route path="/" element={<Description />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home/:email" element={<Home />} />
              <Route path="/profile/:email" element={<Profile />} />
              <Route path="/sell/:email" element={<AddProducts />} />
              <Route path="/auction/:email" element={<Cards />} />
              <Route path="/card-det/:id/:email" element={<Bid />} />
              
              <Route path="/cart/:email" element={<Cart />} />
              <Route path="/payment/:amount/:id/:item/:email" element={<Payment />} />
              <Route path="/invoice/:amount/:id/:item/:email" element={<Invoice />} />
              <Route path="/faq/:email" element={<FAQ />} />
              <Route path="/tandc/:email" element={<TandC />} />
              <Route path="/update-det/:email/:id/:name/:phone" element={<Update />} />
              <Route path="/change-pass/:email" element={<ChangePass />} />
            </Routes>

          </div>

        </div>
      </Router>
    </div>
  );
};

export default App;