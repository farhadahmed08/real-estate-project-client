import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";


const Reviews = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json()
        .then(data =>{
           setReviews(data)
        }))
    },[])


    return (
        <div className="grid grid-cols-3 gap-5">
            {
                reviews.map(review=><SingleReview key={review.id} review={review}></SingleReview>)
            }
        </div>
    );
};

export default Reviews;