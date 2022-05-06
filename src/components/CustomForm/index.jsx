import { Field, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnTitle, ...props }) {
  return (
    <Formik {...props}>
      {({ handleSubmit, isValid, dirty }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((x) => (
            <Field key={x.name} {...x} />
          ))}
          <button
            type="submit"
            className="disabled:bg-slate-400 mt-1 px-3 py-2 block w-full sm:text-sm bg-[#c91e50] text-white"
            disabled={!(dirty && isValid)}
          >
            {btnTitle}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default CustomForm;
