import { Field, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnTitle, pagedescription, ...props }) {
  return (
    <>
      <div className="col-start-2 col-span-3">
        <h1 className="text-2xl font-bold tracking-tight mb-6">{btnTitle}</h1>
        <p className="lg:text-sm tracking-tight text-xs">{pagedescription}</p>
      </div>
      <div className="col-start-5 col-end-7">
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
      </div>
    </>
  );
}

export default CustomForm;
