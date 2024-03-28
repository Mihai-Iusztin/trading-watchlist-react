import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  console.log(props);
  return (
    <div className="new-input">
      <label className="new-label">{label}</label>
      {textarea ? (
        <textarea ref={ref} className="new-textarea" {...props} />
      ) : (
        <input ref={ref} className="new-textarea" {...props} />
      )}
    </div>
  );
});

export default Input;
