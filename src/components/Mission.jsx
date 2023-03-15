import PropTypes from 'prop-types';
import './styles/mission.css';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({
  id, name, description, joined,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="mission-container">
      <ul className="mission">
        <li><h3 className="name">{name}</h3></li>
        <li><h2 className="title">{description}</h2></li>
        <span>
          { joined
            ? <Badge bg="info">Active Member</Badge>
            : <Badge bg="secondary">NOT A MEMBER</Badge>}
        </span>
        <div>
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
};
export default Mission;
