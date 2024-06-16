import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = ({ city, onLocationUpdate }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const options = {
        method: "GET",
        url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
        params: {
          city: city,
          "accept-language": "en",
          polygon_threshold: "0.0",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_Key,
          "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const { lat, lon, display_name } = response.data[0];
        setLatitude(lat);
        setLongitude(lon);
        setDisplayName(display_name);
        onLocationUpdate(lat, lon);
        console.log("lat: ", lat);
        console.log("long: ", lon)
      } catch (error) {
        console.error(error);
      }
    };

    if (city) {
      fetchLocation();
    }
  }, [city]);

  return (
    <div style={{ marginTop: "70px" }}>
      <h4>Location Details : <span style={{fontWeight: 'normal'}}>{displayName}</span></h4>
      {/* <p>City: {city}</p> */}
      {/* <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p> */}
    </div>
  );
};

export default Location;
