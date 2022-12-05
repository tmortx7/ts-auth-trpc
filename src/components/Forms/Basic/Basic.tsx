import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormContext } from "../../../context/FormContext";

function Basic() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message:any) => (
    <p className="italic text-red-600">{message}</p>
  );

  const Schema = z.object({
    name: z.string(),
    email: z.string().email(),
    workspaceName: z.string().min(1),
    workspaceURL: z.string().url().min(1),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        workspaceName: "",
        workspaceURL: "",
      }}
      // validationSchema={toFormikValidationSchema(Schema)}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col items-center justify-center">
        <div className="mb-2 self-center text-2xl font-medium">Welcome!</div>
        <div className="mb-2 flex flex-col items-start">
          <label className="font-medium text-gray-900">Name</label>
          <Field
            name="name"
            className="rounded-md border-2 p-2"
            placeholder="John Doe"
          />
        </div>
        <ErrorMessage name="name" render={renderError} />
        <div className="mb-2 flex flex-col items-start">
          <label className="font-medium text-gray-900">Email</label>
          <Field
            name="email"
            className="rounded-md border-2 p-2"
            placeholder="john.doe@gmail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        <button
          className="my-2 rounded-md bg-indigo-500 p-2 font-medium text-white"
          type="submit"
        >
          Continue
        </button>
      </Form>
    </Formik>
  );
}

export default Basic;
