import React from "react";
import { Field, ErrorMessage, useField } from "formik";

const Form = (props) => {
  const { label, placeholder, as, className } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-control text-white">
        <label className="label" htmlFor={field.name}>
          <span className="label-text text-black">{label}</span>
        </label>
        <Field
          placeholder={placeholder}
          as={as}
          className={`outline-none focus:ring-0 bg-slate-700 rounded-md px-2 py-3 ${
            meta.touched && meta.error && "is-invalid"
          } ${className}`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500"
        />
      </div>
    </>
  );
};

export default Form;
