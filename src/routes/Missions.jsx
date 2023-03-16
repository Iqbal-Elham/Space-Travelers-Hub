import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';
import '../components/styles/missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <div>
      <div className="headers">
        <h3>Missions</h3>
        <h3>Description</h3>
        <h3>Status</h3>
      </div>
      <ul>
        {missions.map((mission, index) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            joined={mission.joined}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
