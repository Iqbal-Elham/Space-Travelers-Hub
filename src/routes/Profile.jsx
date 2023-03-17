import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import JoinedMission from '../components/JoinedMission';
import ReservedRockets from '../components/ReservedRockets';

const Profile = () => {
  const { missions } = useSelector((store) => store.missions);
  const { allRockets } = useSelector((store) => store.rockets);
  const joinedMissions = missions.filter((mission) => mission.joined);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved);
  return (
    <div className="d-flex">
      <div className="w-50">
        <h2 data-testid="h2Id">My Missions</h2>
        <JoinedMission mission={missions} joinedMissions={joinedMissions} />
      </div>
      <div className="w-50">
        <h2>My Rockets</h2>
        <ReservedRockets reservedRockets={reservedRockets} />
      </div>
    </div>
  );
};
export default Profile;
