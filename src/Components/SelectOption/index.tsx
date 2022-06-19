import * as S from './styles';
import * as I from './types'

export const SelectOption = ({ title, description, icon, selected, onClick }: I.SelectOptionProps) => {
  return (
    <S.Container onClick={onClick} selected={selected}>
      <S.Icon>{icon}</S.Icon>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  );
}