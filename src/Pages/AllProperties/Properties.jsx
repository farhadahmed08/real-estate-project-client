import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Properties = ({properties}) => {
    const {image,title,location,agentName,agentImage,verificationStatus,priceRange,id} = properties
    return (
        
        
        <div >

          <Helmet>
            <title>Properties</title>
          </Helmet>


     <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border ">
    <img
      src={image}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h4>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
      {location}
    </p>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
      Status: <span className="text-blue-800">{verificationStatus}</span>
    </p>
  </div>
  <div className="flex items-center justify-between p-6 ">
    <div className="flex items-center -space-x-3 gap-5">
      <img
        alt="natali craig"
        src={agentImage}
        className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 hover:z-10"
        data-tooltip-target="author-1"
      />
     <p>{agentName}</p>
      
    
    </div>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
      ${priceRange}
    </p>
  </div>
<Link to={`/allPropertie/${id}`}><button className="btn btn-primary ">Details</button></Link>
</div>
    </div>
    );
};

export default Properties;