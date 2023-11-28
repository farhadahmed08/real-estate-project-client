import { useEffect, useState } from "react";
import SingleAdvertise from "./SingleAdvertise";


const Advertise = () => {

    const [advertise,setAdvertise] = useState([])

    useEffect(()=>{
        fetch('advertise.json')
        .then(res=>res.json()
        .then(data =>{
           setAdvertise(data)
        }))
    },[])



    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
           {
            advertise.map(item=> <SingleAdvertise key={item.id} item={item}></SingleAdvertise>)
           }
        </div>
    );
};

export default Advertise;