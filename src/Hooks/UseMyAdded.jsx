import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const UseMyAdded = () => {
    
    const axiosSecure = useAxiosSecure();
    const {user} = UseAuth();

    const {data:added=[],isPending:loading,refetch} = useQuery({
        queryKey:['added'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/myAdded?email=${user.email}`);
            return res.data;
        }
    })

    return [added, loading,refetch]
};

export default UseMyAdded;