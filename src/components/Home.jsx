import homeImg from '../assets/home-page.png';
import Button from './Button';

export default function Home({ onOpenInput }) {
  return (
    <div className="home-page">
      <img src={homeImg} alt="Select from the list!" />
      <h2>Select one Trade from the List</h2>
      <h4>Or Add a new one!</h4>
      <Button onClick={onOpenInput} className="add-new">
        ++ Add New
      </Button>
    </div>
  );
}
