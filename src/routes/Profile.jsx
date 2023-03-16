import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import JoinedMission from '../components/JoinedMission';

const Profile = () => {
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  return (
    <div className="d-flex">
      <div className="w-50">
        <h2>My Missions</h2>
        <JoinedMission mission={missions} joinedMissions={joinedMissions} />
      </div>
      <div className="w-50">
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};
export default Profile;
