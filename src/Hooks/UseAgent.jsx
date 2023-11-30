import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const UseAgent = () => {
    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure()
   const {data :isAgent,isPending: isAgentLoading } = useQuery({
    queryKey:[user?.email,'isAgent'],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/agent/${user?.email}`);
        console.log(res.data)
        return res.data?.agent;
    }
   })
   return [isAgent,isAgentLoading]
};

export default UseAgent;