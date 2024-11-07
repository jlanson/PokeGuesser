import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App";
import { toggleAllGenerations, toggleGeneration, type Generation } from "./slices/gameSettingsSlice";

export function usePokemonReducer(gen: Generation | 'all'): [boolean, () => void] {

  let selectedGeneration = null;
  let toggleSelectedGeneration = null;

  const dispatch = useDispatch<AppDispatch>();

  if(gen === 'all'){
    selectedGeneration = useSelector((state: RootState) => state.gameSettings.isAllGenerations);
    toggleSelectedGeneration = () => { dispatch(toggleAllGenerations()) };
  }else{
    selectedGeneration = useSelector((state: RootState) => state.gameSettings[gen]);
    toggleSelectedGeneration = () => { dispatch(toggleGeneration(1)) };
  }
  
  return [selectedGeneration, toggleSelectedGeneration];
}