import { Provider } from 'react-redux'
import './App.css'
import PokeGuesserApp from './components/PokeguesserApp'
import store from './store/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import PokemonGame from './components/GameModes/Pokemon/PokemonGame.tsx'
import TrainerGame from './components/GameModes/Trainer/TrainerGame.tsx'
import CriesGame from './components/GameModes/Cries/CriesGame.tsx'
import MusicGame from './components/GameModes/Music/MusicGame.tsx'
import Menu from './components/Menu.tsx'
import { MouseEvent } from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<PokeGuesserApp />}>
              <Route index element={<Menu />} />
              <Route path="pokemon" index element={<PokemonGame/>} />
              <Route path="trainer" index element={<TrainerGame />} />
              <Route path="cries" index element={<CriesGame />} />
              <Route path="music" index element={<MusicGame />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

export default App;
