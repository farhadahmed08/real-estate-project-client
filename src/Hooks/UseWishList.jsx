import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseWishList = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = UseAuth();
    const {refetch,data:wishList=[]} =  useQuery({
        queryKey:['wishList',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/wishList?email=${user.email}`);
            return res.data;
        }
    })
    return [wishList, refetch]

};

export default UseWishList;