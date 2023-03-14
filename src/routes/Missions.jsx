import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => (store.missions.isSucceed));
  const missions = useSelector((store) => store.missions.missions);
  const isLoading = useSelector((store) => store.missions.isLoading);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [ifSucceed, dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading</p>;
  } else if (ifSucceed) {
    content = Object.keys(missions).map((key) => {
      const currentMission = missions[key][0];
      return (
        <Mission
          key={key}
          missionId={currentMission.mission_id}
          missionName={currentMission.mission_name}
          description={currentMission.description}
        />
      );
    });
  }
  return (
    <div>
      <h1>missions</h1>
      <ul>{content}</ul>
    </div>
  );
};

export default Missions;
