// import React, { useState, useEffect } from 'react';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import { getPlacesData } from './api';
// import Location from './components/Geocoding/Location';

// const App = () => {
//   const [places, setPlaces] = useState([]);
//   const [coordinates, setCoordinates] = useState({});
//   const [filteredPlaces, setFilteredPlaces] = useState([]);



//   const [type, setType] = useState('Restaurants');
//   const [rating, setRating] = useState('All');

//   const [city, setCity] = useState('');

//   const handleCitySubmit = (city) => {
//     setCity(city);
//   };


//   useEffect(()=>{
//       const filteredPlaces = places.filter((place)=> place.rating > rating);
//       setFilteredPlaces(filteredPlaces);
//   }, [rating]);


//   useEffect(() => {
//     console.log('Type:', type);
//     getPlacesData(coordinates, type).then((data) => {
//       console.log(data);
//       if (data) {
//         setPlaces(data);
//         setFilteredPlaces([]);
//       }
//     });
//   }, [type, coordinates]);
  

//   const handleLocationUpdate = (lat, lon) => {
//     setCoordinates({ latitude: lat, longitude: lon });
//     console.log("latitude is: ",lat);
//     console.log("longitide is: ",lon);
//   };

//   return (
//     <div>
//       <Header onCitySubmit={handleCitySubmit} />
//       <Location city={city} onLocationUpdate={handleLocationUpdate} />
//       <List places={ filteredPlaces.length? filteredPlaces :  places} type={type} setType={setType} rating={rating} setRating={ setRating} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getPlacesData } from './api';
import Location from './components/Geocoding/Location';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [type, setType] = useState('Restaurants');
  const [rating, setRating] = useState('All');
  const [city, setCity] = useState('');

  const handleCitySubmit = (city) => {
    setCity(city);
  };

  useEffect(() => {
    const filteredPlaces = places.filter((place) => {
      if (rating === 'All') {
        return true;
      }
      return place.rating > parseFloat(rating);
    });
    setFilteredPlaces(filteredPlaces);
  }, [places, rating]);

  useEffect(() => {
    getPlacesData(coordinates, type).then((data) => {
      if (data) {
        setPlaces(data);
        setFilteredPlaces([]);
      }
    });
  }, [type, coordinates]);

  const handleLocationUpdate = (lat, lon) => {
    setCoordinates({ latitude: lat, longitude: lon });
  };

  return (
    <div>
      <Header onCitySubmit={handleCitySubmit} />
      <Location city={city} onLocationUpdate={handleLocationUpdate} />
      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
};

export default App;

