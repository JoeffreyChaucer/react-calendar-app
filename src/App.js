import Main from './components/Main';
import './App.css';
import AppState from './context/App/AppState';

function App() {
  return (
    <>
      <AppState>
        <Main />
      </AppState>
    </>
  );
}

export default App;
