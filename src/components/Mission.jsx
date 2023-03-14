import PropTypes from 'prop-types';

const Mission = ({ missionName, description }) => (
  <div className="mission-container">
    <ul className="mission">
      <li><h3 className="name">{missionName}</h3></li>
      <li><h2 className="title">{description}</h2></li>
    </ul>
  </div>
);
Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Mission;
