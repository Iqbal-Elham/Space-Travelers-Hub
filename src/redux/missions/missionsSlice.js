/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionApiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isSucceed: false,
  isLoading: false,
  error: null,
};

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await fetch(missionApiUrl);
      const data = await response.json();
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      const id = payload;
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (id !== mission.mission_id) {
            return mission;
          }
          return { ...mission, joined: true };
        }),
      };
    },
    leaveMission: (state, { payload }) => {
      const id = payload;
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (id !== mission.mission_id) {
            return mission;
          }
          return { ...mission, joined: false };
        }),
      };
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.status = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSucceed = true;
      state.missions = action.payload;
    },
    [fetchMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { fetchMissions };
export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
