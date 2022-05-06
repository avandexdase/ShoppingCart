import React from 'react';

function TextInput({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  label,
  ...props
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <br />
        <input
          type="text"
          // className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </label>
      {touched[name] && errors[name] && (
        <p className="text-red-400 text-sm">{errors[name]}</p>
      )}
    </div>
  );
}

export default TextInput;
