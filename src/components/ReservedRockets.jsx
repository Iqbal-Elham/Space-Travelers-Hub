import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ReservedRockets = ({ reservedRockets }) => (
  <div>
    {reservedRockets.length === 0 ? (
      <p style={{ color: 'red' }} data-testid="pId">No Reserved Rockets</p>
    ) : (
      <ListGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
        {reservedRockets.map((rocket) => (
          <ListGroup.Item key={rocket.rocket_id}>
            {rocket.rocket_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
);

ReservedRockets.propTypes = {
  reservedRockets: PropTypes.instanceOf(Array).isRequired,
};

export default ReservedRockets;
