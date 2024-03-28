import './App.css';
import Home from './components/Home';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <main className="main-page">
      <SideMenu />
      <Home />
    </main>
  );
}

export default App;
