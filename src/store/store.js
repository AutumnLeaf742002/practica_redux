import { configureStore } from "@reduxjs/toolkit";

import { sessionSlice, userSlice, productSlice } from "./"

export const store = configureStore({

    reducer: {
        session: sessionSlice.reducer,
        user: userSlice.reducer,
        product: productSlice.reducer
    }
})