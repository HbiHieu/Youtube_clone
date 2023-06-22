//something ,
import { configureStore } from "@reduxjs/toolkit"

import LikedVideoSlice from "./LikedVideo/LikedVideoSlice"

export const store = configureStore({
    reducer : {
       LikedVideoSlice ,
    }
});

export type RootState  = ReturnType<typeof store.getState>