import { createContext, ReactElement, useState } from "react";

interface Values {
  name: string;
  email: string;
  workspaceName: string;
  workspaceURL: string;
}
export const FormContext = createContext({
  activeStepIndex: 0,
  setActiveStepIndex: (value: number) => {
    value;
  },
  formData: {},
  setFormData: (values: Values) => {
    values;
  },
});

const FormContextProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
