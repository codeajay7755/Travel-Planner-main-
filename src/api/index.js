import axios from 'axios';
export const getPlacesData = async (coordinates, type) => {
let endpoint;

if (type === 'Restaurants') {
endpoint = 'restaurants';

const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
  params: {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_Key,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
});

console.log(data);
return data;
}

if (type === 'Attractions') {
endpoint = 'attractions';

const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
  params: {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_Key,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
});

console.log(data);
return data;
}
};