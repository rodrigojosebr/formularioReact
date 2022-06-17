import * as S from './styles';
import { Header } from '../Header';
import { SideBarItem } from '../SideBarItem';
import { useForm } from '../../Contexts/FormContext';

type Props = {
  children: React.ReactNode;
}

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Informações pessoais"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Profissional"
              description="Nível profissional"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Contatos"
              description="Informações para contato"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />

          </S.Sidebar>
          <S.Page>
            {children}
          </S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};