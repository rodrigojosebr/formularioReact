import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Components/Theme';
import { FormActions, useForm } from '../../Contexts/FormContext';
import * as S from './styles';
import { toast } from 'react-toastify';

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStepClick = () => {
    if (state.name.length > 3) {
      navigate('/step2');
    } else {
      toast.info('O nome deve ter mais de 3 caracteres');
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/ 3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Nome completo:
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
            placeholder="Digite nome completo"
          />
        </label>
        <button onClick={handleNextStepClick}>
          Próximo
        </button>
      </S.Container>
    </Theme>
  );
}