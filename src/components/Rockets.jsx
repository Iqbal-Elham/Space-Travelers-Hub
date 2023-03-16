import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { allRockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!allRockets.length) dispatch(getRockets());
  }, [dispatch, allRockets]);

  return (
    <div>
      {allRockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          type={rocket.rocket_type}
          img={rocket.flickr_images}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
