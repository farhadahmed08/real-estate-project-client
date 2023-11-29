import { useEffect, useState } from "react";
import Properties from "./Properties";


const AllProperties = () => {


    const [allProperties,setAllProperties] = useState([])

    useEffect(()=>{
        fetch('allProperties.json')
        .then(res=>res.json()
        .then(data =>{
           setAllProperties(data)
        }))
    },[])



    return (
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            {
                allProperties.map(properties=><Properties key={properties.id} properties={properties}></Properties>)
            }
        </div>
    );
};

export default AllProperties;