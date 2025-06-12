function Radio({ children, value, name, defaultChecked, disabled, onChange }) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="form-check-input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {children}
    </label>
  );
}

export default Radio;
