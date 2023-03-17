import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  allRockets: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk(
  'rocket/getRockets',
  async (name, thunkAPI) => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      const rocketsData = [];
      data.forEach((rock) => {
        const obj = {
          rocket_id: rock.rocket_id,
          rocket_name: rock.rocket_name,
          description: rock.description,
          rocket_type: rock.rocket_type,
          flickr_images: rock.flickr_images[0],
          reserved: false,
        };
        rocketsData.push(obj);
      });
      return rocketsData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    setReserved: (state, action) => ({
      ...state,
      allRockets: state.allRockets.map((rocket) => {
        if (action.payload !== rocket.rocket_id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      }),
    }),
    cancelReserved: (state, action) => ({
      ...state,
      allRockets: state.allRockets.map((rocket) => {
        if (action.payload !== rocket.rocket_id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      allRockets: action.payload,
    }));
  },
});

export default rocketSlice.reducer;
export const { setReserved, cancelReserved } = rocketSlice.actions;
