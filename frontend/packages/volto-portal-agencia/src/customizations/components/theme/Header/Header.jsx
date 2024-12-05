import { Anontools, Logo, Navigation } from '@plone/volto/components';
import style from './Header.module.css';

export default function Header() {
  const getFormattedDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date().toLocaleDateString('pt-BR', options);
  };

  return (
    <div>
      <nav className={style.navTopContainer}>
        <div className={style.navTopContainerLinks}>
          <a href="http://">Sala de Imprensa</a>
          <a href="http://">Área de Pesquisadores</a>
        </div>
      </nav>
      <div className={style.containerHeaderLogo}>
        <div>{getFormattedDate()}</div>
        <Logo />
        <div>
          <Anontools />
        </div>
      </div>
      <div className={style.navegationHeader}>
        <Navigation />
      </div>
    </div>
  );
}
