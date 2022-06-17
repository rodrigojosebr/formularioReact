import * as S from './styles';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode;
}

export const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Sidebar>
            oioioi
          </S.Sidebar>
          <S.Page>
            {children}
          </S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};