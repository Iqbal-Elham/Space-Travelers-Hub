/* eslint-disable react/prop-types */
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const JoinedMission = ({ joinedMissions }) => (
  <div>
    {
        joinedMissions.length === 0 ? <p style={{ color: 'red' }}>No joined missions</p>

          : (
            <ListGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
              {
                  joinedMissions.map((mission) => (
                    <ListGroup.Item key={mission.missionID}>{mission.missionName}</ListGroup.Item>
                  ))
              }
            </ListGroup>
          )
}
  </div>
);

JoinedMission.defaultProps = {
  missions: [],
  joinedMissions: [],
};
export default JoinedMission;
