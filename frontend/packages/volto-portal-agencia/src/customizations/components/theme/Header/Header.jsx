import { Anontools, Logo, Navigation } from '@plone/volto/components';
import React from 'react';

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

  const styles = {
    containerHeaderLogo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 'auto',
      padding: '1rem 10rem',
      backgroundColor: '#cee1ec',
    },
    navegationHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      backgroundColor: '#c1d1da',
    },
    navTopContainer: {
      color: '#e1e5e7',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      paddingTop: '2rem',
      backgroundColor: '#022336',
      padding: '2rem',
      paddingLeft: '2rem',
    },
    navTopContainerLinks: {
      display: 'flex',
      gap: '2rem',
    },
    navLink: {
      color: 'aliceblue',
      textDecoration: 'none',
    },
  };

  return (
    <div>
      <nav style={styles.navTopContainer}>
        <div style={styles.navTopContainerLinks}>
          <a href="http://" style={styles.navLink}>
            Sala de Imprensa
          </a>
          <a href="http://" style={styles.navLink}>
            Área de Pesquisadores
          </a>
        </div>
      </nav>
      <div style={styles.containerHeaderLogo}>
        <div>{getFormattedDate()}</div>
        <Logo />
        <div>
          <Anontools />
        </div>
      </div>
      <div style={styles.navegationHeader}>
        <Navigation />
      </div>
    </div>
  );
}
