import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Theme } from '../../Components/Theme';
import { FormActions, useForm } from '../../Contexts/FormContext';
import * as S from './styles';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleFinishClick = () => {
    if (state.email !== '' && state.gitHub !== '') {
      toast.success(`${state.name}, seu cadastro concluído com sucesso!`);
      console.log(state)
    } else {
      toast.info(`${state.name}, preencha todos os campos para concluir o cadastro!`);
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handlegitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 3 / 3</p>
        <h1>Legal {state.name}! Onde te encontramos?</h1>
        <p>Informe os seus contatos abaixo.</p>
        <hr />
        <label>
          Email:
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            placeholder="Digite o email"
          />
        </label>
        <label>
          GitHub:
          <input
            type="url"
            value={state.gitHub}
            onChange={handlegitHubChange}
            placeholder="Digite o endereço GitHub"
          />
        </label>
        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleFinishClick}>
          Finalizar Cadastro
        </button>
      </S.Container>
    </Theme>
  );
}