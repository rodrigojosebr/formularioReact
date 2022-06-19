//Criação do context baseia-se em : Context, Reducer, Provider, Hook
import { createContext, useContext, useReducer } from "react";
import * as I from './FormContext.types';

const initialData: I.State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  gitHub: ''
};

//Criação do context
const FormContext = createContext<I.ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
};

const formReducer = (state: I.State, action: I.Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, gitHub: action.payload };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: I.FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch };
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
};

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('UseForm must be used within a FormProvider');
  }
  return context;
};
