import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/weatherActions.ts";

type WeatherState = {
    data: WeatherInfo | null;
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
};

const initialState: WeatherState = {
    data: null,
    status: 'idle',
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
                state.error = null;})
            .addCase(fetchWeather.rejected, (state) => {
                state.status = 'error';
                state.error = 'Enter correct city name'})
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload
            })
    }
})

export default weatherSlice.reducer;