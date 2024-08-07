import { Provider } from 'react-redux'
import './App.css'
import PokeGuesserApp from './components/PokeguesserApp'
import store from './store/store.ts'

function App() {
  return (
    <>
    <Provider store={store}>
      <PokeGuesserApp/>
    </Provider>
    </>
  )
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

export default App;
