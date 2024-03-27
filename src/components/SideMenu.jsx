import Button from './Button';
export default function SideMenu() {
  return (
    <aside className="side-menu">
      <h2>My Trading WatchList</h2>
      <div>
        <Button className="add-trade">Add Trade</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
