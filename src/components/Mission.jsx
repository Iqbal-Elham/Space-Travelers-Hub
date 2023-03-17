import PropTypes from 'prop-types';
import './styles/mission.css';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({
  id, name, description, joined, index,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="mission-container">
      <ul className={!(index % 2) ? 'mission backgrd' : 'mission'}>
        <li><h5 className="name">{name}</h5></li>
        <li><p className="description">{description}</p></li>
        <span>
          { joined
            ? <Badge bg="info">Active Member</Badge>
            : <Badge bg="secondary">NOT A MEMBER</Badge>}
        </span>
        <div className="stat">
          {
           joined
             ? <Button variant="danger" onClick={() => dispatch(leaveMission(id))}>Leave Mission</Button>
             : <Button variant="success" onClick={() => dispatch(joinMission(id))}>Join Mission</Button>
          }
        </div>
      </ul>
    </div>
  );
};
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
export default Mission;
