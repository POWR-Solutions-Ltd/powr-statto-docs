import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <h1 className="hero__title"><img className={styles.featureSvg} alt="statto logo" src="/img/logo.svg" width="350px"/></h1>
        <h2 className="title">The Power Platform English Football Almanac</h2>
        <h2 style={{color: '#ffffff'}}>from</h2>
        <div className={styles.buttons}>
        <img className={styles.featureSvg} alt="powr solutions logo" src="/img/powr_200_white.svg" width="350px"/>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
