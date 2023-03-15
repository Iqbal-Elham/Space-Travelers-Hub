/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const { data } = await axios.get(missionApiUrl);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
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

export default missionSlice.reducer;
