export default function SelectedInstrument({ selectedInstrument }) {
  return (
    <div>
      <h1>{selectedInstrument.instrument}</h1>
      <h2>Opening PATTERN : {selectedInstrument.edge}</h2>
      <h5>Opening date:- {selectedInstrument.openDate}</h5>
    </div>
  );
}
