import Button from './Button';

export default function SideMenu({
  onOpenInput,
  watchList,
  onSelectInstrument,
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
          return (
            <li key={instrument.id}>
              <button onClick={() => onSelectInstrument(instrument.id)}>
                {instrument.instrument}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
