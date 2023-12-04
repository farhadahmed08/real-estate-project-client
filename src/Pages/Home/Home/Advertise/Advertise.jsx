import { useEffect, useState } from "react";
import SingleAdvertise from "./SingleAdvertise";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const Advertise = () => {

    const [advertise,setAdvertise] = useState([])

    useEffect(()=>{
        fetch('https://real-estate-platform-server-nu.vercel.app/advertise')
        .then(res=>res.json()
        .then(data =>{
           setAdvertise(data)
        }))
    },[])



    return (
       <div>
        <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
            heading={"Advertise"} 
        >
        </SectionTitle>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
           {
            advertise.map(item=> <SingleAdvertise key={item._id} item={item}></SingleAdvertise>)
           }
        </div>
       </div>
    );
};

export default Advertise;