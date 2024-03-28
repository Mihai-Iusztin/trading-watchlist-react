import Input from './Input';
import Button from './Button';

export default function NewInstrument() {
  return (
    <div className="new-instrument">
      <div>
        <Input type="text" label="Instrument" />
        <Input label="Pattern and Edge" textarea />
        <Input type="date" label="Planning Open date" />
      </div>
      <menu className="new-instrument-btn">
        <Button className="cancel-btn">Cancel</Button>
        <Button className="save-btn">Save</Button>
      </menu>
    </div>
  );
}
