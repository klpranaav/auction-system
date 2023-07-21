import Axios  from 'axios';
import React, { useState, useRef, useEffect } from 'react'
export default function Card(props)
{

    const Ref = useRef(null);
    const [st,setStatus] = useState(props.status);
 
    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");
 
    const Ong_set = async() => {

        try{

            const url = "https://server3-rho.vercel.app/backend/getauc/"+props.id;
           
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

            const url2 = "https://server3-rho.vercel.app/backend/getauc/"+props.id;
           
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
           ).catch((error)=>{});



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
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )

            
            Ong_set()

            setStatus("Ongoing");

           
        }
        else{

           
            Comp_set()

            setStatus("Complete");
        }
    }
 
    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
        
     
     //setTimer("HH:MM:SS");
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec

   

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        
 //let deadline = new Date();

 let tim = new Date(props.time);



        // This is where you need to adjust if
        // you entend to add more time
        
        //const timeString = props.time; // input string

//const arr = timeString.split(":"); // splitting the string by colon


//const seconds = arr[0]*3600+arr[1]*60+(+arr[2]); // converting



//const second = Date.parse(new Date(props.time))-Date.parse(new Date())


        //deadline.setSeconds(deadline.getSeconds()+seconds);

     

        return tim;
    }
 
   
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


 


return(


<div className="__card" >
    <img src={props.img} alt="img" />
    <span className="cont--header">{props.title}</span>
    <span className="cont">Description:  {props.desc} </span>
    <span className="cont">Price: $ {props.price} </span>
    <span className="cont">Condition:  {props.cond} </span>
    <span className="cont">  Time Remaining: {timer} </span>
    <span className="cont">Status:  {props.status}</span>
</div>

)


}