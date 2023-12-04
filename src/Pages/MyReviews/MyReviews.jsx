import UseAuth from "../../Hooks/UseAuth";



const MyReviews = () => {
    const {user} = UseAuth()

  



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{user?.displayName}</h2>
    <p>this is very good apartment and location</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">post</button>
      <button className="btn btn-primary">delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyReviews;