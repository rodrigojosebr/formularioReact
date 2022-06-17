import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormProvider } from './Contexts/FormContext';
import { Router } from './router';

const App = () => {
  return (
    <FormProvider>
      <ToastContainer />
      <Router />
    </FormProvider>
  );
}

export default App;