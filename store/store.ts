import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import menuReducer from '../store/menuSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
