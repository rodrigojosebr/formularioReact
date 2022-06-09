
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormStep1 } from './Pages/FormStep1';
import { FormStep2 } from './Pages/FormStep2';
import { FormStep3 } from './Pages/FormStep3';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStep1 />} />
        <Route path="/step2" element={<FormStep2 />} />
        <Route path="/step3" element={<FormStep3 />} />
      </Routes>
    </BrowserRouter>
  );
}