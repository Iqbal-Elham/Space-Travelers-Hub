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
  }, [dispatch]);
  return (
    <div>
      <h1>missions</h1>
      <ul>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            joined={mission.joined}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
