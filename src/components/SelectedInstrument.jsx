export default function SelectedInstrument({
  selectedInstrument,
  onDelete,
  onCancel,
}) {
  const formattedDate = new Date(selectedInstrument.openDate).toLocaleString(
    'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );
  return (
    <div className="selected-instrument">
      <h1>{selectedInstrument.instrument}</h1>
      <h2>Opening PATTERN : {selectedInstrument.edge}</h2>
      <h5>Opening date:- {formattedDate}</h5>
      <div>
        <button
          className="delete-btn"
          onClick={() => onDelete(selectedInstrument.id)}
        >
          Delete
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
