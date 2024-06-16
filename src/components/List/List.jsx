
import React from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, type, setType, rating, setRating }) => {

    return (
        <div>
            <h3>Restaurants and Attractions around you.</h3>
            <div className="d-flex">
                <div className="input-group mb-3" style={{ maxWidth: "200px", marginRight: "20px" }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Places</label>
                    <select value={type} className="form-select" id="inputGroupSelect01" onChange={(e) => { setType(e.target.value) }}>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Attractions">Attractions</option>
                    </select>
                </div>
                <div className="input-group mb-3" style={{ maxWidth: "200px" }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Ratings</label>
                    <select defaultValue={rating} className="form-select" id="inputGroupSelect02" onChange={(e) => { setRating(e.target.value) }}>
                        <option value="0">All</option>
                        <option value="1">Above 3.0</option>
                        <option value="2">Above 4.0</option>
                        <option value="3">Above 4.5</option>
                    </select>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {places?.map((place, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <PlaceDetails place={place} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default List;
