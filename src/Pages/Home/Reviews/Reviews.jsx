import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Reviews = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('https://real-estate-platform-server-nu.vercel.app/reviews')
        .then(res=>res.json()
        .then(data =>{
           setReviews(data)
        }))
    },[])


    return (
        <section className="m-10">
            
            <SectionTitle
            subHeading={"Reviews"}
            heading={"Watch Review"} 
            >
            </SectionTitle>
            <div className="grid grid-cols-3 gap-5">
            {
                reviews.map(review=><SingleReview key={review._id} review={review}></SingleReview>)
            }
        </div>
        </section>
    );
};

export default Reviews;