import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseaxiosPublic";


const useProperty = (asc,search,currentPage,itemsPerPage) => {

    const axiosPublic = useAxiosPublic();

    const {data:property=[],isPending:loading,refetch} = useQuery({
        queryKey:['property',asc,search,currentPage,itemsPerPage],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/properties?sort=${asc ? 'asc' : 'desc'}&search=${search}&page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    })

    return [property, loading,refetch]
};

export default useProperty;