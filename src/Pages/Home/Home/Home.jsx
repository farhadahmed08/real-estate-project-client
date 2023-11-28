import Reviews from "../Reviews/Reviews";
import Advertise from "./Advertise/Advertise";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Reviews/>

        </div>
    );
};

export default Home;