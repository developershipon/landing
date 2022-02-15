import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import Form from "./Form";

const Contact = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    subject: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <>
          <form
            className="bg-blue-100 p-10 rounded-md"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-wrap flex-row justify-between">
              <div className="w-full sm:grid sm:grid-cols-2 gap-4">
                <div className="">
                  <Form
                    label="First Name"
                    placeholder=""
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className="">
                  <Form
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <Form
              label="Email"
              name="email"
              placeholder="Enter Your E-mail"
              type="email"
            />
            <Form
              label="Subject"
              name="subject"
              placeholder="Subject"
              type="text"
            />
            <div className="">
              <Form
                as="textarea"
                label="Message"
                name="message"
                placeholder="Leave your message here..."
                className="h-52 outline-none focus:ring-0 bg-slate-700 rounded-md px-2 py-3"
              />
            </div>
            <div className="py-5">
              <Button value="Send Message" type="submit" />
            </div>
          </form>
        </>
      )}
    </Formik>
  );
};

export default Contact;
