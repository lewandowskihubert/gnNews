import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { newsApi } from "../services/newsapi/news-api";
import {NewsArticle , Countries} from "../types/news-api"


interface countryListState {
    countries: Countries[],

}

const initialState : countryListState = {
 countries: [],

}



export const getCountriesAsync = createAsyncThunk(
    "countries/fetchcountries",
    async() => {
        return await newsApi.getCountryList();
    }
)


export const countryListSlice = createSlice({
    name:"country",
    initialState,
    reducers: {
        
        
    },
    extraReducers:(builder) => {
        builder.addCase(getCountriesAsync.fulfilled, (state, action) => {
            state.countries = action.payload || []
        })
    }
})

export const selectCountryList = (state:RootState) =>
state.countryList.countries



export default countryListSlice.reducer;