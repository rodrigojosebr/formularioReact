import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../Components/Theme';
import { FormActions, useForm } from '../../Contexts/FormContext';
import * as S from './styles';
import { toast } from 'react-toastify';
import { SelectOption } from '../../Components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStepClick = () => {
    if (state.name.length > 3) {
      navigate('/step2');
    } else {
      toast.info('O nome deve ter mais de 3 caracteres');
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
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
        <p>Passo 2 / 3</p>
        <h1>{state.name}, qual o seu perfil?</h1>
        <p>Escolha a opção abaixo de acordo com o seu perfil!</p>

        <hr />

        <SelectOption
          title="Iniciante"
          description="Você é um iniciante e quer aprender a programar?"
          icon="🐶"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Programador"
          description="Você é um programador e quer avançar nos seus estudos?"
          icon="🦁"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStepClick}>
          Próximo
        </button>

      </S.Container>
    </Theme>
  );
}