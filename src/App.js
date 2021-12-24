
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import AppStyled from './components/styles/AppStyled';

function App() {
  return (
    <AppStyled className="App">
      <Header></Header>
      <Pokedex></Pokedex>
    </AppStyled>
  );
}

export default App;
