import Button from './Button';

export default function SideMenu({ onOpenInput }) {
  return (
    <aside className="side-menu">
      <h2>My Trading WatchList</h2>
      <div>
        <Button className="add-trade" onClick={onOpenInput}>
          Add Trade
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
