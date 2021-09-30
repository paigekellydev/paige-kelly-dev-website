import logo from './logo.svg';
import '../src/stylesheets/App.css';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://i.imgur.com/Xh8w5dP.png" className="App-logo" alt="logo" /> */}
        <Loading />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
