import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NewInstrument from './components/NewInstrument';
import SideMenu from './components/SideMenu';

function App() {
  // const [listState, setListState] = useState({
  //   selectedInstrumentId: undefined,
  //   watchlist: [],
  // });

  // function handleOpenInstrumentInput() {
  //   setListState((prevList) => {
  //     return {
  //       ...prevList,
  //       selectedInstrumentId: null,
  //     };
  //   });
  // }

  // let newContent;

  // if (listState.selectedInstrumentId === null) {
  //   newContent = <NewInstrument />;
  // } else if (listState.selectedInstrumentId === undefined) {
  //   newContent = <Home onOpenInput={handleOpenInstrumentInput} />;
  // }

  const [newInstr, setNewInstr] = useState(false);
  const [watchList, setWatchList] = useState([]);

  function handleOpenInstrumentInput() {
    setNewInstr(true);
  }

  function handleWatchList(newData) {
    setWatchList((prevList) => {
      const newInstrument = {
        ...newData,
        id: Math.random(),
      };
      return [...prevList, newInstrument];
    });
  }

  console.log(watchList);

  let newContent;
  if (newInstr) {
    newContent = <NewInstrument onAdd={handleWatchList} />;
  } else {
    newContent = <Home onOpenInput={handleOpenInstrumentInput} />;
  }

  return (
    <main className="main-page">
      <SideMenu onOpenInput={handleOpenInstrumentInput} />
      {newContent}
      {/* <Home onOpenInput={handleOpenInstrumentInput}/> */}
      {/* <NewInstrument /> */}
    </main>
  );
}

export default App;
