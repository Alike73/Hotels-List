import { useState } from 'react';
import './App.css';
import { data } from './data';
import CarouselComponent from './Carousel';

function App() {

  const [hotels, setHotels] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !==id);
    setHotels(newHotels);
  }

  const showTextClick = (hotelData) => {
    hotelData.showMore = !hotelData.showMore;
    setShowMore(!showMore)
  }

  return (
    <div>
      <div className="Container">
        <h1 className='Title'>TOP &#171;<span className='HotelsNumber'>&#8902;{hotels.length}&#8902;</span>&#187; ABU-DHABI HOTELS</h1>
      </div>
      <div className="Container">
        <p className='Subtitle'>Rooms that will make you feel like royalty.</p>
      </div>
      <div className="Container">
        <CarouselComponent />
      </div>
      <div className="Separator"></div>
      {hotels.map((hotelData => {
        const {id, hotel, description, image, source, showMore} = hotelData;
        const btnText = showMore ? "Show less" : "Show more"
        return (
          <div key={id}>
            <div className='Container'>
              <h2>{id} - &#171;{hotel}&#187;</h2>
            </div>
            <div className='Container'>
              <p className='Description'>
              {showMore ? description : description.substring(0, 170) + "...."}
              <span className='whiteSpace'></span>
              <button className='showBtn' onClick={() => showTextClick(hotelData)}>{btnText}</button>
              </p>
            </div>
            <div className="Container">
              <img className='Image' src={image} alt="HotelImage" />
            </div>
            <div className="Container">
              <p>SOURCE: {source}</p>
            </div>
            <div className="Container">
              <button className='Btn' onClick={() => removeHotel(id)}>Remove</button>
            </div>
            <div className="Separator"></div>
          </div>
        )
      }))}
    </div>
  );
}

export default App;
