
import {createSlice} from '@reduxjs/toolkit';

export interface PokemonGametoggletingsState {
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

const initialState: PokemonGametoggletingsState = {
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


const pokemonGameSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleGenerationOne: (state) => {
      state.generationOne = !state.generationOne;
    },
    toggleGenerationTwo: (state) => {
      state.generationTwo = !state.generationTwo;
    },
    toggleGenerationThree: (state) => {
      state.generationThree = !state.generationThree;
    },
    toggleGenerationFour: (state) => {
      state.generationFour = !state.generationFour;
    },
    toggleGenerationFive: (state) => {
      state.generationFive = !state.generationFive;
    },
    toggleGenerationSix: (state) => {
      state.generationSix = !state.generationSix;
    },
    toggleGenerationSeven: (state) => {
      state.generationSeven = !state.generationSeven;
    },
    toggleGenerationEight: (state) => {
      state.generationEight = !state.generationEight;
    },
    toggleGenerationNine: (state) => {
      state.generationNine = !state.generationNine;
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

export const {toggleGenerationOne, 
  toggleGenerationTwo, 
  toggleGenerationThree, 
  toggleGenerationFour, 
  toggleGenerationFive, 
  toggleGenerationSix, 
  toggleGenerationSeven, 
  toggleGenerationEight, 
  toggleGenerationNine, 
  toggleAllGenerations, 
  toggleSillhouteMode, 
  toggleZoomMode, 
  toggleAutoCompleteMode} = pokemonGameSlice.actions;

export default pokemonGameSlice.reducer;