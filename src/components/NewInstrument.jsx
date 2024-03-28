import Input from './Input';
import Button from './Button';
import { useRef } from 'react';

export default function NewInstrument({ onAdd }) {
  const instrument = useRef();
  const edge = useRef();
  const openDate = useRef();

  function handleSave() {
    const enteredInstrument = instrument.current.value;
    const enteredEdge = edge.current.value;
    const enteredDate = openDate.current.value;

    onAdd({
      instrument: enteredInstrument,
      edge: enteredEdge,
      openDate: enteredDate,
    });
  }
  return (
    <div className="new-instrument">
      <div>
        <Input ref={instrument} type="text" label="Instrument" />
        <Input ref={edge} label="Pattern and Edge" textarea />
        <Input ref={openDate} type="date" label="Planning Open date" />
      </div>
      <menu className="new-instrument-btn">
        <Button className="cancel-btn">Cancel</Button>
        <Button onClick={handleSave} className="save-btn">
          Save
        </Button>
      </menu>
    </div>
  );
}
