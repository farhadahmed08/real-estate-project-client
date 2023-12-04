import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UsePropertyAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const {data:property=[],isPending:loading,refetch} = useQuery({
        queryKey:['property'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/properties');
            return res.data;
        }
    })

    return [property, loading,refetch]
};

export default UsePropertyAdmin;