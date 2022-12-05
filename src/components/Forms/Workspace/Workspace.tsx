import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormContext } from "../../../context/FormContext";

function Workspace() {
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
  type ISchema = z.infer<typeof Schema>

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        workspaceName: "",
        workspaceURL: "",
      }}
      // validationSchema={toFormikValidationSchema(Schema)}
      onSubmit={(values:ISchema) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col items-center justify-center">
        <div className="mb-2 flex flex-col items-start">
          <label className="font-medium text-gray-900">Workspace Name</label>
          <Field
            name="workspaceName"
            className="rounded-md border-2 p-2"
            placeholder="My Workspace"
          />
        </div>
        <ErrorMessage name="workspaceName" render={renderError} />
        <div className="mb-2 flex flex-col items-start">
          <label className="font-medium text-gray-900">Workspace URL</label>
          <Field
            name="workspaceURL"
            className="rounded-md border-2 p-2"
            placeholder="https://my-workspace.com"
          />
        </div>
        <ErrorMessage name="workspaceURL" render={renderError} />
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

export default Workspace;
