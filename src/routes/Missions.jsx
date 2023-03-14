import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const isSucceed = useSelector((store) => (store.missions.isSucceed));
  const { missions } = useSelector((store) => store.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [missions, isSucceed, dispatch]);
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
