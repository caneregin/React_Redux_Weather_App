import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "istanbul",
        cityLat: "41.0096334",
        cityLon: "28.9651646",
        mainWeather1: "",
        mainWeather2: "",
        mainWeather3: "",
        mainWeather4: "",
        mainWeather5: "",
        tempMax1: "",
        tempMax2: "",
        tempMax3: "",
        tempMax4: "",
        tempMax5: "",
        weatherWind: "",
        pressure:"",
        humidity:""

    },
    reducers: {
        changeLatLon: (state, action) => {
            state.cityLat = action.payload[0].lat
            state.cityLon = action.payload[0].lon
        },
        changeCity: (state, action) => {
            state.city = action.payload
            console.log("girdi changecity")
        },
        changeWeather: (state, action) => {
            state.weatherWind = action.payload.list[8].wind.speed
            state.pressure = action.payload.list[8].main.pressure
            state.humidity = action.payload.list[8].main.humidity
            state.mainWeather1 = action.payload.list[8].weather[0].main
            state.mainWeather2 = action.payload.list[14].weather[0].main
            state.mainWeather3 = action.payload.list[22].weather[0].main
            state.mainWeather4 = action.payload.list[30].weather[0].main
            state.mainWeather5 = action.payload.list[38].weather[0].main
            state.tempMax1 = action.payload.list[8].main.temp_max
            state.tempMax2 = action.payload.list[14].main.temp_max
            state.tempMax3 = action.payload.list[22].main.temp_max
            state.tempMax4 = action.payload.list[30].main.temp_max
            state.tempMax5 = action.payload.list[38].main.temp_max
            console.log(state.tempMax1)

        }
    }
})
export const { changeLatLon, changeCity, changeWeather } = weatherSlice.actions
export default weatherSlice.reducer