/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';
import { setReserved, cancelReserved } from "../redux/rockets/rocketsSlice";

const Rocket = ({ id, name, type, img, description }) => {
  const { reserved } = useSelector(store => store.rockets)
  const [ reserve, setReserve ] = useState(reserved);
  const dispatch = useDispatch();
  const handleReserve = (rocketId) => {
    if (!reserve) {
      dispatch(setReserved(rocketId));
      setReserve(true);
    }
    else {
      dispatch(cancelReserved(rocketId));
      setReserve(false);
    }
  }

  return (
    <div className="d-flex p-3 gap-3">
      <img src={img} alt="Rocket" width="470" height="350" className="img-fluid" />
      <div className="pt-1">
        <h2>{name}</h2>
        <p className="text-justify h5"><span>{reserve ? <Badge>Reserved</Badge> : ''} </span>{description}</p>
        <p className="h6">{type}</p>
        <Button 
        className="mt-4 py-2 px-4" 
        variant={!reserve ? 'primary' : 'secondary'} 
        onClick={() => handleReserve(id)} >
          {!reserve ? 'Reserve Rocket' : 'Cancel Reservation'}
          </Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
};

export default Rocket;
