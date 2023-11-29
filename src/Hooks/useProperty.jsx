import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseaxiosPublic";


const useProperty = () => {

    const axiosPublic = useAxiosPublic();

    const {data:property=[],isPending:loading,refetch} = useQuery({
        queryKey:['property'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/properties');
            return res.data;
        }
    })

    return [property, loading,refetch]
};

export default useProperty;