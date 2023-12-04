import image from "../../../assets/image.jpg";
import agent from "../../../assets/agent.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MeetAgent = () => {
    return (
       <div>
         
         <SectionTitle
            subHeading={"Agent"}
            heading={"Our Agent"} 
            >
            </SectionTitle>
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
          <img
            src={image}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={agent}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
              <h3 className="text-3xl text-orange-500 font-bold">About Agent</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            Meet our exceptional real estate agent, known for their exemplary professionalism and in-depth industry expertise. With a commitment to diligence and a thorough approach, they work tirelessly to ensure every detail is handled with care. This knowledgeable professional communicates with clarity and transparency, keeping clients well-informed throughout the process. Trusted for their honesty and integrity, this agent is not only reliable but also excels in strong negotiation skills, ensuring the best outcomes for their clients.
            </p>
           
           
          </div>
        </div>
      </div>
        </div>
       </div>
    );
};

export default MeetAgent;