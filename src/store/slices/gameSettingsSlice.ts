
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Generation = 
  | 'generationOne'
  | 'generationTwo'
  | 'generationThree'
  | 'generationFour'
  | 'generationFive'
  | 'generationSix'
  | 'generationSeven'
  | 'generationEight'
  | 'generationNine';


export interface GameSettingsState {
  generations: number[],
  generationOne: boolean;
  generationTwo: boolean;
  generationThree: boolean;
  generationFour: boolean;
  generationFive: boolean;
  generationSix: boolean;
  generationSeven: boolean;
  generationEight: boolean;
  generationNine: boolean;
  isAllGenerations: boolean;
  isSillhouteMode: boolean;
  isZoomMode: boolean;
  isAutoCompleteMode: boolean;
}

const initialState: GameSettingsState = {
  generations: [1,2,3,4,5,6,7,8,9],
  generationOne: false,
  generationTwo: false,
  generationThree: false,
  generationFour: false,
  generationFive: false,
  generationSix: false,
  generationSeven: false,
  generationEight: false,
  generationNine: false,
  isAllGenerations: true,
  isSillhouteMode: false,
  isZoomMode: false,
  isAutoCompleteMode: false,
};


const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    toggleGeneration: (state, action: PayloadAction<number>) => {
      if(state.generations.includes(action.payload)){
        state.generations = state.generations.filter((gen) => gen !== action.payload);
      }else{
        state.generations.push(action.payload);
      }
    },
    toggleAllGenerations: (state) => {
      state.isAllGenerations = !state.isAllGenerations;
      if(state.isAllGenerations){
        state.generationOne = false;
        state.generationTwo = false;
        state.generationThree = false;
        state.generationFour = false;
        state.generationFive = false;
        state.generationSix = false;
        state.generationSeven = false;
        state.generationEight = false;
        state.generationNine = false;
      }
    },
    toggleSillhouteMode: (state) => {
      state.isSillhouteMode = !state.isSillhouteMode;
    },
    toggleZoomMode: (state) => {
      state.isZoomMode = !state.isZoomMode;
    },
    toggleAutoCompleteMode: (state) => {
      state.isAutoCompleteMode = !state.isAutoCompleteMode;
    },
  },
});

export const {
  toggleGeneration,
  toggleAllGenerations, 
  toggleSillhouteMode, 
  toggleZoomMode, 
  toggleAutoCompleteMode} = gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;