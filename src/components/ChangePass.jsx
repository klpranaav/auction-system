import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export function ChangePass()
{
    let id = '';
    let pass = '';
    let uname = '';
    let phone = '';
    const {email} = useParams();
    const[newpass,setNewpass] = useState('');
    const[oldpass,setOldpass] = useState('');
    const [data,setData] = useState([]);
    const handleC1 = (e) => {
        setOldpass(e.target.value);
    }
    const handleC2 = (e) => {
        setNewpass(e.target.value);
    }
    
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
            pass = val.password;
            uname = val.name;
            phone = val.mobNo;
        }


    const handleSubmit =  () => {
        if(oldpass === pass)
        {
            alert("Matched");
        }
        else
        {
            alert("Old password does not match");
        }
    }    
    return(
        <div>
            <div class="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Old Password</label>
                    <input type="password" class="form-control" id="exampleInputEmail1"  onChange={handleC1}/>
                </div>
                <div class="form-group">
                    <label for="name">New password</label>
                    <input type="password" class="form-control" id="name"  onChange={handleC2} />
                </div>
                <button type="submit" onClick = {handleSubmit}class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}