import { configureStore } from "@reduxjs/toolkit";
import gameSettingsSlice from "./slices/gameSettingsSlice";
import gameStateSlice from "./slices/gameStateSlice";

export default configureStore({
  reducer: {
    gameSettings: gameSettingsSlice,
    gameState: gameStateSlice,
  },
});