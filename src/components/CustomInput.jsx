const CustomInput = ({
  value,
  onChange,
  setState,
  type,
  placeholder,
  label,
  title,
}) => {
  return (
    <div className="inputs-container">
      <label htmlFor={label}>{title}</label>
      <input
        onChange={(event) => {
          onChange(event, setState);
        }}
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
export default CustomInput;
