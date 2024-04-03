import Button from './Button';

export default function SideMenu({
  onOpenInput,
  watchList,
  onSelectInstrument,
  selectedInstrument,
}) {
  return (
    <aside className="side-menu">
      <h2>My Trading WatchList</h2>
      <div>
        <Button className="add-trade" onClick={onOpenInput}>
          Add Trade
        </Button>
      </div>
      <ul className="watchlist">
        {watchList.map((instrument) => {
          // console.log(instrument);
          // console.log(selectedInstrument);
          let cssClasses;
          if (selectedInstrument && instrument.id === selectedInstrument.id) {
            cssClasses = 'selected-btn';
          } else {
            cssClasses = 'watchlist-btn';
          }
          return (
            <li key={instrument.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectInstrument(instrument.id)}
              >
                {instrument.instrument}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
