import about from "../../assets/about.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AboutUs = () => {
    return (
      <div>
         
         <SectionTitle
            subHeading={"About Us"}
            heading={"Our work"} 
            >
            </SectionTitle>
          <div className="hero min-h-screen bg-base-200 m-5">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="lg:w-1/2 space-y-5 p-4">
              <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">We Maintain good Price and High Quality</h1>
            <p className="py-6">
            our mission is to empower our clients in achieving their real estate aspirations. We are dedicated to providing unparalleled professionalism and expertise in every transaction. Guided by integrity and transparency, we aim to build lasting relationships based on trust. Our commitment to diligent work, clear communication, and strong negotiation ensures that our clients receive the highest standard of service. With a focus on excellence, we strive to make the real estate journey seamless and successful for every individual and family we serve.
            </p>
           
           
          </div>
          <div className="lg:w-1/2 ">
          <img
            src={about}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          
          </div>
        </div>
      </div>
      </div>
    );
};

export default AboutUs;