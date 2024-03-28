export default function Input({ label, textarea, ...props }) {
  console.log(props);
  return (
    <div className="new-input">
      <label className="new-label">{label}</label>
      {textarea ? (
        <textarea className="new-textarea" {...props} />
      ) : (
        <input className="new-textarea" {...props} />
      )}
    </div>
  );
}
