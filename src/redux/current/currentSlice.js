import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiKey = '64c5ba010daf9acaae687e9d64fb089e';

const cities = {
  'new delhi': [28.644800, 77.216721],
  accra: [5.614818, -0.205874],
  johannesburg: [-26.195246, 28.034088],
  brussels: [50.850346, 4.351721],
  dubai: [25.276987, 55.296249],
  berlin: [52.520008, 13.404954],
};

const Urls = Object.entries(cities).map((element) => [element[0], `https://api.openweathermap.org/data/2.5/air_pollution?lat=${element[1][0]}&lon=${element[1][1]}&appid=${apiKey}`]);

const textValues = {
  1: 'good', 2: 'fair', 3: 'moderate', 4: 'poor', 5: 'very poor',
};
const colorScheme = {
  1: '#9cd84e', 2: '#facf38', 3: '#f99049', 4: '#9c91a1', 5: '#a070b6',
};
// #f65e5f

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
        id: uuidv4(),
        name: Urls[index][0],
        aqi: each.data.list[0].main.aqi,
        textValue: textValues[each.data.list[0].main.aqi],
        colorIndicator: colorScheme[each.data.list[0].main.aqi],
        components: each.data.list[0].components,
      }
    ));
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const currentSlice = createSlice({
  name: 'currentAQIs',
  initialState,
  reducers: {},
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

export default currentSlice.reducer;
