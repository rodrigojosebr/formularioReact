import { FormActions } from "./FormContext";

export type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  gitHub: string;
};

export type Action = {
  type: FormActions;
  payload: any;
};

export type FormProviderProps = {
  children: React.ReactNode;
};

export type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
