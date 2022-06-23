import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuStateEnum } from '../enum/enum';
import { RootState } from './store';

export type MenuState = {
    value: MenuStateEnum;
};

const initialState: MenuState = {
    value: MenuStateEnum.MENU,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuState: (state, action: PayloadAction<MenuStateEnum>) => {
            state.value = action.payload;
        },
    },
});
export const { setMenuState } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.value;

export default menuSlice.reducer;
