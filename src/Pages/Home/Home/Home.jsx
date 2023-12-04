import { Helmet } from "react-helmet-async";
import AboutUs from "../../AboutUs/AboutUs";
import MeetAgent from "../MeetAgent/Meetagent";
import Reviews from "../Reviews/Reviews";
import Advertise from "./Advertise/Advertise";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
<>
        <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
        <div>
            <Banner/>
            <Advertise/>
            <Reviews/>
            <MeetAgent/>
            <AboutUs/>

        </div>
        </>
    );
};

export default Home;