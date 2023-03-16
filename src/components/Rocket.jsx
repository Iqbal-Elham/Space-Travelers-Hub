/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';
import { setReserved, cancelReserved } from "../redux/rockets/rocketsSlice";

const Rocket = ({ id, name, type, img, description, reserved }) => {
  console.log(reserved)
  const dispatch = useDispatch();
  return (
    <div className="d-flex p-3 gap-3">
      <img src={img} alt="Rocket" width="470" height="350" className="img-fluid" />
      <div className="pt-1">
        <h2>{name}</h2>
        <p className="text-justify h5"><span>{reserved ? <Badge>Reserved</Badge> : ''} </span>{description}</p>
        <p className="h6">{type}</p>
        <div>
        {
          !reserved ? <Button 
          className="mt-4 py-2 px-4" 
          variant="primary" 
          onClick={() => dispatch(setReserved(id))}>
            Reserve Rocket
          </Button>
          : <Button 
          className="mt-4 py-2 px-4" 
          variant="secondary" 
          onClick={() => dispatch(cancelReserved(id))}>
            Cancel Reservation
          </Button>
        }
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
};

export default Rocket;
