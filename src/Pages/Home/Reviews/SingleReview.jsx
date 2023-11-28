

const SingleReview = ({review}) => {

    const {reviewerName,reviewerImage,propertyTitle,description,rating}=review


    return (
        <div>
            <article>
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src={reviewerImage} alt=""/>
        <div className="font-medium dark:text-white">
            <p>{reviewerName} </p>
        </div>
    </div>

    <h1 className="font-bold">{propertyTitle}</h1>
   
    
    <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
   
   
    
</article>
        </div>
    );
};

export default SingleReview;