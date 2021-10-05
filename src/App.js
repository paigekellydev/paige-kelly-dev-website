import logo from './logo.svg';
import '../src/stylesheets/App.css';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Bio from './components/Bio';
import Projects from './components/Projects';
import { useState } from 'react'

function App() {

  const [displayLoading, setDisplayLoading] = useState({displayLoading: true})

  const stopLoading = (event) => {
    event.preventDefault()
    setDisplayLoading(false)
  }

  const loadingComponent = () => {
    return displayLoading ? <Loading stopLoading={stopLoading}/> : null
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://i.imgur.com/Xh8w5dP.png" className="App-logo" alt="logo" /> */}
        {/* <Loading stopLoading={stopLoading}/> */}
        <NavBar />
        <Menu />
        <Bio  />
        <Projects />
        {loadingComponent()}
      </header>
    </div>
  );
}

export default App;
