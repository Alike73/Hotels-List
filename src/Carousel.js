import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageOne from "./1.jpg";
import imageTwo from "./2.jpg";
import imageThree from "./3.jpg"
import imageFour from "./4.jpg";
import imageFive from "./5.jpg";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} infiniteLoop autoPlay>
                <div className='ImageBox'>
                    <h1 className='ImageTitle'>&#171;The Ritz-Carlton Abu Dhabi, Grand Canal&#187;</h1>
                    <img className='hotelImage' src={imageOne} alt='The Ritz-Carlton Abu Dhabi' />
                </div>
                <div className='ImageBox'>
                    <h1 className='ImageTitle'>&#171;The St. Regis Saadiyat Island Resort, Abu Dhabi&#187;</h1>
                    <img className='hotelImage' src={imageTwo} alt='The St. Regis Saadiyat Island Resort, Abu Dhabi' />
                </div>
                <div className='ImageBox'>
                    <h1 className='ImageTitle'>&#171;Park Hyatt Saadiyat Island&#187;</h1>
                    <img className='hotelImage' src={imageThree} alt='Park Hyatt Saadiyat Island' />
                </div>
                <div className='ImageBox'>
                    <h1 className='ImageTitle'>&#171;W Abu Dhabi Yas Island&#187;</h1>
                    <img className='hotelImage' src={imageFour} alt='W Abu Dhabi Yas Island' />
                </div>
                <div className='ImageBox'>
                    <h1 className='ImageTitle'>&#171;Shangri-La Hotel, Qaryat al Beri&#187;</h1>
                    <img className='hotelImage' src={imageFive} alt='Shangri-La Hotel, Qaryat al Beri' />
                </div>
            </Carousel>
        </div>
    );
}
