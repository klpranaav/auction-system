import { useState } from "react";
import Axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import Header from './Header.jsx';
import Footer from "./Footer"; 


export function Update()
{
const [data, setData] = useState([]);
  const {email} = useParams();
  const {id} = useParams();
  const {name} = useParams();
  const {phone} = useParams();
  const history = useNavigate();
  const handleSubmit = () => {
    const url = "https://server3-rho.vercel.app/backend/update/" + id;
    const rurl = "/home/" + email;
    const updatedObj = {name:upname,email:upemail,mobNo:upphone};
    Axios.put(url,updatedObj)
    .then((res)=>{
        if(res.status ===200){
            alert("Successfully updated")
            history(rurl);
        }
        else{
            Promise.reject();
        }
    })
    .catch((err)=>alert(err));
}
    const [upname,setUpname] = useState(name);
    const [upemail,setUpemail] = useState(email);
    const [upphone,setUpphone] = useState(phone);

    const handleC2 = (e) => {
        setUpname(e.target.value);
    }
    const handleC1 = (e) => {
        setUpemail(e.target.value);
    }
    const handleC3 = (e) => {
        setUpphone(e.target.value);
    }
    
    return (
        <div>
            <Header />
            <br></br><br></br><br></br>
            <hr></hr>
            Enter only the details which needs to be updated
            <br></br>
            <div class="container my-5">

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder={email} onChange={handleC1}/>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name"  placeholder={name} onChange={handleC2} />
                </div>
                <div class="form-group">
                    <label for="ph">Phone number</label>
                    <input type="text" class="form-control" id="ph"  placeholder={phone} onChange={handleC3}/>
                </div>
                <button type="submit" onClick = {handleSubmit}class="btn btn-primary">Submit</button>
                </form>
            </div>
            <br></br><br></br><br></br><br></br>
            <Footer />
        </div>
    )
}