import {  Navigate, useLoaderData, useLocation, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseWishList from "../../Hooks/UseWishList";
import Swal from "sweetalert2";


const SinglePropertie = () => {

    // const {id} = useParams()
    
    // console.log(id)

    const {user} = UseAuth()


    const singleProperty = useLoaderData();
    const {image,title,location,agentName,agentImage,verificationStatus,priceRange,_id} = singleProperty ;
    console.log(singleProperty);

    const currentLocation = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = UseWishList();


    const handleAddToWishList =()=>{
     
      if (user && user.email) {
        
        
        const wishListItem = {
          menuId:_id,
          email:user.email,
          Property_title:title,
          property_location:location,
          Agent_name:agentName,
          image,
          Agent_image:agentImage,
          price:priceRange,
          verificationStatus
        }
        axiosSecure.post('/wishList',wishListItem)
        .then(res=>{
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${title} has been added to the wishlist`,
              showConfirmButton: false,
              timer: 1500
            });
            
            refetch();
          }
        });

      }
      else{
        Swal.fire({
          title: "You are not logged In?",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
          //TODO: send the user to the login page 
          Navigate('/login',{state:{from:currentLocation}})
          }
        });
      }
  }


   
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
      <button onClick={handleAddToWishList} className="btn btn-primary">add to cart</button> 
    </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default SinglePropertie;