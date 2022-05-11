import { Field, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnTitle, pagedescription, ...props }) {
  return (
    <>
      <div className="">
        <h1 className="">{btnTitle}</h1>
        <p className="">{pagedescription}</p>
      </div>
      <div className="">
        <Formik {...props}>
          {({ handleSubmit, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              {fields.map((x) => (
                <Field key={x.name} {...x} />
              ))}
              <button
                type="submit"
                className="btn"
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
