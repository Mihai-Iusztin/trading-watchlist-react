import './App.css';
import Home from './components/Home';
import NewInstrument from './components/NewInstrument';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <main className="main-page">
      <SideMenu />
      {/* <Home /> */}
      <NewInstrument />
    </main>
  );
}

export default App;
