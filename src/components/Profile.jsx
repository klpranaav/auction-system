import React, { useState, useEffect } from "react";
import "./Profile.css";
import Axios from 'axios';
import { useParams } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

function Profile() {
  const [data, setData] = useState([]);
  const {email} = useParams();
  const urlp = "/change-pass/" + email;
  let name = '';
  let phone = '';
  let id = '';
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
  for(const val of data)
          {
            id = val._id;
            name = val.name;
            phone = val.mobNo;
          }
  const url = "/update-det/" + email + "/" + id + "/" + name + "/" + phone;
  return (
    <div>
      <Header />
      <div className="profile-container">
      <h2>Profile Page</h2>
      <div>
        <table className="profile-table">
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>
                {name}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                {email}
              </td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>
                {phone}
              </td>
            </tr>
          </tbody>
        </table>
        <a href={url} type="button" class="btn btn-primary me-2">Edit Details</a>
        <a href={urlp} type="button" class="btn btn-primary me-2">Change Password</a>
        
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Profile;
