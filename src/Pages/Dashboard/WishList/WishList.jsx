import UseWishList from "../../../Hooks/UseWishList";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const WishList = () => {
    const [wishList, refetch] = UseWishList();
    const axiosSecure = useAxiosSecure()



    return (
        <div>
            
        </div>
    );
};

export default WishList;