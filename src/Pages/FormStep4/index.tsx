import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Theme } from '../../Components/Theme';
import { FormActions, useForm } from '../../Contexts/FormContext';
import * as S from './styles';

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name.length < 3 || state.email === '' || state.gitHub === '') {
      navigate('/step3')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  const handleFinishClick = () => {
    toast.success(`${state.name}, seu cadastro foi enviado com sucesso!`);
    console.log(state)
    navigate('/');
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 4 / 4</p>
        <h1>Agora é só conferir {state.name}!</h1>
        <p>Confira os dados informados e clique em enviar</p>
        <hr />
        <S.Infos>
          <S.Label>Nome</S.Label>
          <S.Value>{state.name}</S.Value>
          <S.Label>Perfil</S.Label>
          <S.Value>{state.level === 0 ? 'Iniciante' : 'Programador'}</S.Value>
          <S.Label>e-mail</S.Label>
          <S.Value>{state.email}</S.Value>
          <S.Label>GitHub</S.Label>
          <S.Value>{state.gitHub}</S.Value>
        </S.Infos>
        <Link to="/step3" className="backButton">Voltar</Link>
        <button onClick={handleFinishClick}>
          Dados OK! Enviar
        </button>
      </S.Container>
    </Theme>
  );
}
