import { Field, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnTitle, pagedescription, ...props }) {
  return (
    <>
      <div className="">
        <h1 data-testid="customFormTitle" className="">
          {btnTitle}
        </h1>
        <p data-testid="customFormDescription" className="">
          {pagedescription}
        </p>
      </div>
      <div className="">
        <Formik {...props}>
          {({ handleSubmit, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              {fields.map((x) => (
                <Field data-testid={x.name} key={x.name} {...x} />
              ))}
              <button
                role="button"
                type="submit"
                className="btn"
                disabled={!(dirty && isValid)}
                data-testid="customFormbtn"
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
