import React from 'react';

function TextInput({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  label,
  ...props
}) {
  return (
    <div className="form-field">
      <div className="form-field__control">
        <input
          type="text"
          className="form-field__input"
          placeholder=" "
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
        <label htmlFor={name} className="form-field__label">
          {label}
        </label>
        {touched[name] && errors[name] && (
          <p className="form-field__error">{errors[name]}</p>
        )}
      </div>
      <div className="form-field__bar"></div>
    </div>
  );
}

export default TextInput;
