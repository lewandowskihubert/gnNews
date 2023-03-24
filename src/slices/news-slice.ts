import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { newsApi } from "../services/newsapi/news-api";
import {NewsArticle} from "../types/news-api"


interface newsArticlesState {
    news: NewsArticle[]
    display: boolean
}

const initialState : newsArticlesState = {
 news: [],
 display:false
}

interface getNewsParams {
    country:string
}

export const getNewsAsync = createAsyncThunk(
    "news/fetchnews",
    async(country:string) => {
        return await newsApi.getCountryNews(country || '')
    }
)


export const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers: {
        changeDisplay: (state, action:PayloadAction<boolean>) => {
            state.display = action.payload
        },
    },
    extraReducers:(builder) => {
        builder.addCase(getNewsAsync.fulfilled, (state, action) => {
            state.news = action.payload || []
        })
    }
})

export const selectNewsList = (state:RootState) =>
state.newsList.news

export const selectOrder = (state:RootState) => state.newsList.display;
export const {changeDisplay} = newsSlice.actions;
export default newsSlice.reducer;