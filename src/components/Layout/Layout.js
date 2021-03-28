import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <section className={styles.Layout}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </section>
  );
}

export default Layout;