import { Anontools, Logo, Navigation } from '@plone/volto/components';
import style from './Header.module.css';

export default function Header() {
  return (
    <div>
      <nav className={style.navTopContainer}>
        <div className={style.navTopContainerLinks}>
          <a href="http://">Sala de Imprensa</a>
          <a href="http://">Área de Pesquisadores</a>
        </div>
      </nav>
      <div className={style.containerHeaderLogo}>
        <Date />
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
