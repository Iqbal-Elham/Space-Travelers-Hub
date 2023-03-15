/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { setReserved } from "../redux/rockets/rocketsSlice";

const Rocket = ({ id, name, type, img, description }) => {

  const dispatch = useDispatch();
  const handleReserve = (rocketId) => {
    dispatch(setReserved(rocketId));
  }

  return (
    <div className="d-flex p-3 gap-3">
      <img src={img} alt="Rocket" width="470" height="350"/>
      <div className="pt-1">
        <h2>{name}</h2>
        <p className="text-justify h5">{description}</p>
        <p className="h6">{type}</p>
        <Button className="mt-4 py-2 px-4" varian="primary" onClick={() => handleReserve(id)} >Reserve Rocket</Button>
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
