import { useState } from 'react';
import './App.css';
import SelectedInstrument from './components/SelectedInstrument';
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
  const [selectedInstrument, setSelectedInstrument] = useState();
  const [newInstr, setNewInstr] = useState('home');
  const [watchList, setWatchList] = useState([
    {
      id: 10,
      instrument: 'EURUSD',
      edge: 'DB',
      openDate: '10-04-2023',
    },
    {
      id: 11,
      instrument: 'SP500',
      edge: 'TCPB',
      openDate: '7-04-2023',
    },
    {
      id: 12,
      instrument: 'BITCOIN',
      edge: 'CB',
      openDate: '10-04-2023',
    },
  ]);

  function handleSelectInstrument(id) {
    setSelectedInstrument((instrument) => {
      return (instrument = watchList.find((instr) => instr.id === id));
    });
    setNewInstr('selected');
  }

  function handleOpenInstrumentInput() {
    setNewInstr('newinput');
  }

  function handleWatchList(newData) {
    setWatchList((prevList) => {
      const newInstrument = {
        ...newData,
        id: Math.random(),
      };
      setNewInstr('home');
      return [...prevList, newInstrument];
    });
  }

  console.log(watchList);

  let newContent;
  if (newInstr === 'newinput') {
    newContent = <NewInstrument onAdd={handleWatchList} />;
  } else if (newInstr === 'home') {
    newContent = <Home onOpenInput={handleOpenInstrumentInput} />;
  } else if (newInstr === 'selected') {
    newContent = <SelectedInstrument selectedInstrument={selectedInstrument} />;
  }

  return (
    <main className="main-page">
      <SideMenu
        onOpenInput={handleOpenInstrumentInput}
        watchList={watchList}
        onSelectInstrument={handleSelectInstrument}
      />
      {newContent}
      {/* <Home onOpenInput={handleOpenInstrumentInput}/> */}
      {/* <NewInstrument /> */}
    </main>
  );
}

export default App;
