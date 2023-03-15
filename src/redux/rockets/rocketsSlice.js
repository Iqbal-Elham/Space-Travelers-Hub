import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  allRockets: [],
  reserved: false,
  isLoading: false,
};

export const getRockets = createAsyncThunk(
  'rocket/getRockets',
  async (name, thunkAPI) => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    setReserved: (state, action) => {
      state.allRockets.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    },
    cancelReserved: (state, action) => {
      state.allRockets.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const rockets = Object.entries(action.payload).map((rocket) => ({
        id: rocket[0],
        ...rocket[1],
      }));
      return { ...state, allRockets: rockets };
    });
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
  },
});

export default rocketSlice.reducer;
export const { setReserved, cancelReserved } = rocketSlice.actions;
