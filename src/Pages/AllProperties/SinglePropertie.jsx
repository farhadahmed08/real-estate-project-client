import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const SinglePropertie = () => {

    // const {id} = useParams()
    
    // console.log(id)


    const singleProperty = useLoaderData();
    const {image,title,location,agentName,agentImage,verificationStatus,priceRange} = singleProperty ;
    console.log(singleProperty)

   
    return (
       <div>
        <SectionTitle>

        </SectionTitle>
         <div className="">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{location}</h2>
    <p>Price: ${priceRange}</p>
    <p>Agent: {agentName}</p>
    <p> Status:{verificationStatus}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">add to cart</button> 
    </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default SinglePropertie;