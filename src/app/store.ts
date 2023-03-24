import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsListReducer from "../slices/news-slice"
import countryListReducer from "../slices/country-slice"


export const store = configureStore({
    reducer: {
        newsList: newsListReducer,
        countryList: countryListReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


