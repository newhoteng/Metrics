import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiKey = '64c5ba010daf9acaae687e9d64fb089e';

const cities = {
  'New Delhi': [28.644800, 77.216721],
  Accra: [5.614818, -0.205874],
  Johannesburg: [-26.195246, 28.034088],
  Brussels: [50.850346, 4.351721],
  Dubai: [25.276987, 55.296249],
  Berlin: [52.520008, 13.404954],
};

const Urls = Object.entries(cities).map((element) => [element[0], `http://api.openweathermap.org/data/2.5/air_pollution?lat=${element[1][0]}&lon=${element[1][1]}&appid=${apiKey}`]);

// const colorScheme = {
//   Good: '#9cd84e',
//   Fair: '#facf38',
//   Moderate: '#f99049',
//   Poor: '#f65e5f',
//   VPoor: '#a070b6',
// };

// const Url = `http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=${apiKey}`;

const initialState = {
  currentAQIs: [],
  isLoading: false,
  error: undefined,
};

export const getCurrentAQIs = createAsyncThunk('currentAQIs/getCurrentAQIs', async (name, thunkAPI) => {
  try {
    const response = await axios.all(Urls.map((url) => axios.get(url[1])));
    return response.map((each, index) => (
      {
        item_id: uuidv4(),
        name: Urls[index][0],
        aqi: each.data.list[0].main.aqi,
      }
    ));
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const currentSlice = createSlice({
  name: 'currentAQIs',
  initialState,
  reducers: {
    // joinMission: (state, action) => {
    //   const itemId = action.payload;
    //   state.missions = state.missions.map((mission) => {
    //     if (mission.id !== itemId) return mission;
    //     return { ...mission, reserved: true };
    //   });
    // },
    // leaveMission: (state, action) => {
    //   const itemId = action.payload;
    //   state.missions = state.missions.map((mission) => {
    //     if (mission.id !== itemId) return mission;
    //     return { ...mission, reserved: false };
    //   });
    // },
  },
  extraReducers: (builder) => {
    // getCurrentAQIs
    builder.addCase(getCurrentAQIs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentAQIs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentAQIs = action.payload;
    });
    builder.addCase(getCurrentAQIs.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// export const { joinMission, leaveMission } = missionsSlice.actions;
export default currentSlice.reducer;
