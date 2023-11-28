import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../../assets/15418324_547 (1).jpg'
import img2 from '../../../../assets/15418377_554 (1).jpg'
import img3 from '../../../../assets/15433467_563 (1).jpg'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                   
                </div>
                <div>
                    <img src={img2} />
                 
                </div>
                <div>
                    <img src={img3} />
                   
                </div>
            </Carousel>
    );
};

export default Banner;