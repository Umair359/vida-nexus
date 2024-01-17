import { configureStore } from '@reduxjs/toolkit'
import { AppApi } from './api/appApi.js'
export default configureStore({
    reducer: {
        // home: homeReducer,
        [AppApi.reducerPath]: AppApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            AppApi.middleware,
        )
})