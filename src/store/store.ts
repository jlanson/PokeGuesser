import { configureStore } from "@reduxjs/toolkit";
import pokemonGameReducer from "./slices/pokemonGameSlice";

export default configureStore({
  reducer: {
    pokemonGame: pokemonGameReducer,
  },
});