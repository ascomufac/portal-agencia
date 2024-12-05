import style from './Footer.module.css';
import LogoRodape from './logo-ifes-branca.svg';

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <img src={LogoRodape} alt="Agência Ifes" />
    </footer>
  );
}
