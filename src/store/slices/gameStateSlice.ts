import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchPokemonByGeneration } from '../../helpers/fetchPokemon';

interface Pokemon {
    id: number;
    name: string;
    imgUrl: string;
}

export interface gameState {
    pokemonPool: Pokemon[];
}

const initialState: gameState = {
    pokemonPool: [],
};

export const fetchPokemon = createAsyncThunk(
    'gameState/fetchPokemon',
    async (generations : number[], {fulfillWithValue}) => {
    
      const data : Pokemon[] = [];
      try {
        for(const gen of generations){
            const response = await fetchPokemonByGeneration(gen);
            data.push(...response);
        }
        return fulfillWithValue(data);
      } catch (error) {
        throw error;
      }
    }
  )


const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        addPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.pokemonPool.push(action.payload);
        },
        addPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemonPool = [...state.pokemonPool, ...action.payload];
        },
        removePokemon: (state, action: PayloadAction<number>) => {
            state.pokemonPool = state.pokemonPool.filter((pokemon) => pokemon.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            state.pokemonPool = action.payload;
        });
    }
  });

export const {
addPokemon,
addPokemons,
removePokemon} = gameStateSlice.actions;

export default gameStateSlice.reducer;