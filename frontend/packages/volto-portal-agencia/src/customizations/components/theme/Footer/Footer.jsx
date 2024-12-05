import React from 'react';
import LogoRodape from './logo-ifes-branca.svg';

export default function Footer() {
  const styles = {
    footerContainer: {
      height: '30%',
      padding: '8rem',
      background: '#022336',
      color: 'aliceblue',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <img src={LogoRodape} alt="Agência Ifes" />
    </footer>
  );
}
