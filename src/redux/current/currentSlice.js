import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const cities = {
  'New Delhi': [28.644800, 77.216721],
  Accra: [5.614818, -0.205874],
  Johannesburg: [-26.195246, 28.034088],
  Brussels: [50.850346, 4.351721],
  Dubai: [25.276987, 55.296249],
  Berlin: [52.520008, 13.404954],
};
// const colorScheme = {
//   Good: '#9cd84e',
//   Fair: '#facf38',
//   Moderate: '#f99049',
//   Poor: '#f65e5f',
//   VPoor: '#a070b6',
// };

// air pollution api
const apiKey = '64c5ba010daf9acaae687e9d64fb089e';

// const Url = `http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=${apiKey}`;

// const Url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  currentAQIs: [],
  isLoading: false,
  error: undefined,
};

export const getCurrentAQIs = createAsyncThunk('currentAQIs/getCurrentAQIs', async (name, thunkAPI) => {
  try {
    const retrievedData = [];
    await Object.entries(cities).map(async (element) => {
      const resp = await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${element[1][0]}&lon=${element[1][1]}&appid=${apiKey}`);
      const { list } = resp;
      const Obj = { name: element[0], aqi: list[0].main.aqi };
      retrievedData.push(Obj);
    });
    // console.log(retrievedData);
    return retrievedData;
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
