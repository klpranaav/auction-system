import { useParams } from "react-router-dom"
import Axios from "axios"
import { useEffect, useRef,useState } from "react"
import Header from './Header';
import Footer from './Footer';

export default function Bid()
{

    const [dat,setDat] = useState([]);
    const {id} = useParams();

    const {email} = useParams();

    const Ref = useRef(null);

    const [st,setStatus] = useState(dat.status);
 
    // The state for our timer
    const [timer, setTimer] = useState(dat.time);

    const getDet = async()=>
    {

       
        const url = "https://server3-rho.vercel.app/backend/get_det/"+id;

        Axios.get(url).then((res)=>{

            if(res.status===200)
            {
                setDat(res.data);
            }
            else{

                Promise.reject();
            }

        })
        .catch((err)=>alert(err));



    }

    const cr_req = async() => {

        const url_cr = "https://server3-rho.vercel.app/backend/create-cart/";

        const c_det = {buyer:email,price:dat.price,name:dat.name};
        
        console.log(c_det);
        Axios.post(url_cr,c_det).then((res)=>{

            if(res.status===200)
            {
                console.log('Successfully created')
            }
            else{

                Promise.reject();

            }




        }).catch((err)=>console.log(err));



    }


    const Ong_set = async() => {

        try{

            const url = "https://server3-rho.vercel.app/backend/getauc/"+dat.id;
           
           const upd_obj = {status:"Ongoing"}
           await Axios.put(url,upd_obj).then((res)=>{

            if(res.status===200)
            {
                

                console.log('Successfully updated')
            }
            else{

                Promise.reject();

            }


           }
           ).catch((error)=>{});



        }
        catch(error)
        {
            console.error(error);
        }



    };


    const Comp_set = async() => {

        try{

            const url2 = "https://server3-rho.vercel.app/backend/getauc/"+dat.id;
           
           const upd_obj2 = {status:"Complete"}
          await Axios.put(url2,upd_obj2).then((res)=>{

            if(res.status===200)
            {

                console.log('Successfully Completed')
            }
            else{

                Promise.reject();

            }


           }
           ).catch((error)=>{console.log(error)});



        }
        catch(error)
        {
            console.error(error);
        }



    };

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());

        
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total > 0) {
 
            
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )

            
          Ong_set()

            setStatus("Ongoing");

           
        }
        else{

           
         Comp_set();
                cr_req();
            setStatus("Complete");
        }
    }
 
    const clearTimer = (e) => {
 
       

   

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        

 let tim = new Date(dat.time);

        return tim;
    }
 

    const [amt,setamt] = useState();
    const [curr_price,set_curr_p] = useState();
    const [sts,setst] = useState();
 


    

   const handleClick = async() =>{

    const url_amt = "https://server3-rho.vercel.app/backend/get_amt/"+id;

    Axios.get(url_amt).then((res)=>{

        set_curr_p(res.data.price);
        setst(res.data.status);

    }).catch((err)=>{alert(err)});

    if(amt>dat.price && sts!="Complete")
    {
        const url_upd_amt = "https://server3-rho.vercel.app/backend/upd-amt/"+id;

        const upd_price = {price:amt,buyer:email};

       await  Axios.put(url_upd_amt,upd_price).then((res)=>{

        
            if(res.status==200)
            {

                console.log("Price updated");
              
            }
            
            else{

                Promise.reject();
            }

        }
        ).catch((err)=>{ });


    }
    else if(sts=="Complete")
    {
        alert("Sorry auction is over");

    }
    else{


        alert('Enter an amount higher than current price');
    }




   }


    useEffect(()=>{

        getDet();

        clearTimer(getDeadTime());
        
console.log(dat)


    },[])
   


return(
    <div>
        <Header />
        <br></br><br></br>
    <div className="__card st" >
        <img src={dat.imageUrl} alt="img" />
        <span className="cont--header">{dat.name}</span>
        <span className="cont">Price: $ {dat.price} </span>
        <span className="cont">  Time Remaining: {timer} </span>
        <span className="cont">Status:  {dat.status}</span>
        <span className="cont"><input type="number" min="0" step="1" onChange={(e)=>setamt(e.target.value)}/></span>
        <span className="cont"><button type="button" class="btn btn-primary" onClick={handleClick}>Bid</button></span>
    </div>
    <Footer />
    </div>

)



}