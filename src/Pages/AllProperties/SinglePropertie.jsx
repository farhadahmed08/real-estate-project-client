import { useLoaderData, useParams } from "react-router-dom";


const SinglePropertie = () => {

    const {id} = useParams()
    
    console.log(id)


    const singleProperty = useLoaderData();
    // const {image,title,location,agentName,agentImage,verificationStatus,priceRange} = singleProperty ;
    console.log(singleProperty)

   
    return (
        <div>
            <h2>hi</h2>
            <h2>{id}</h2>
            {/* <h2>{title}</h2> */}
            <h2>{id}</h2>
            <h2>{id}</h2>
        </div>
    );
};

export default SinglePropertie;