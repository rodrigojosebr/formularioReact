import { Link } from 'react-router-dom';
import { ReactComponent as BookIcon } from '../../Assets/book.svg';
import { ReactComponent as MailIcon } from '../../Assets/mail.svg';
import { ReactComponent as ProfileIcon } from '../../Assets/profile.svg';
import * as S from './styles';
import * as I from './types';

export const SideBarItem = ({ title, description, icon, path, active }: I.SideBarItemProps) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.IconArea active={active}>
          {icon === 'profile' && <ProfileIcon fill="white" width={24} height={24} />}
          {icon === 'book' && <BookIcon fill="white" width={24} height={24} />}
          {icon === 'mail' && <MailIcon fill="white" width={24} height={24} />}
        </S.IconArea>
        <S.Point active={active}></S.Point>
      </Link>
    </S.Container>
  );
}
