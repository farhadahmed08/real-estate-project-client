
import Properties from "./Properties";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import useProperty from "../../Hooks/useProperty";



const AllProperties = () => {

   

    const [property] = useProperty()





    // const [allProperties,setAllProperties] = useState([])

    // useEffect(()=>{
    //     fetch('allProperties.json')
    //     .then(res=>res.json()
    //     .then(data =>{
    //        setAllProperties(data)
    //     }))
    // },[])



    return (
        <div>
            
            <SectionTitle>

            </SectionTitle>
            
            <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            {
                property?.map(properties=><Properties key={properties._id} properties={properties}></Properties>)
            }
        </div>
        </div>
    );
};

export default AllProperties;