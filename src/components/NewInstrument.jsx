import Input from './Input';
import Button from './Button';
import Modal from './Modal';
import { useRef } from 'react';

export default function NewInstrument({ onAdd }) {
  const modal = useRef();
  const instrument = useRef();
  const edge = useRef();
  const openDate = useRef();

  function handleSave() {
    const enteredInstrument = instrument.current.value;
    const enteredEdge = edge.current.value;
    const enteredDate = openDate.current.value;

    if (
      enteredInstrument.trim() === '' ||
      enteredEdge.trim() === '' ||
      enteredDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      instrument: enteredInstrument,
      edge: enteredEdge,
      openDate: enteredDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close" className="new-modal">
        <h2>Invalid Input</h2>
        <h4>Please provide valid input for every field!</h4>
      </Modal>
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
    </>
  );
}
