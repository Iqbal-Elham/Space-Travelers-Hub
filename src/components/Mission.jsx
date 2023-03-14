import PropTypes from 'prop-types';

const Mission = ({ name, description }) => (
  <div className="mission-container">
    <ul className="mission">
      <li><h3 className="name">{name}</h3></li>
      <li><h2 className="title">{description}</h2></li>
    </ul>
  </div>
);
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Mission;
