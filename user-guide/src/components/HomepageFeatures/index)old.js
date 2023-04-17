import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Statto Stickers',
    Svg: require('@site/static/img/new stat epl sticker.svg').default,
    description: (
      <>
        Statto stickers, the Fantasy Premier League Sticker Album
      </>
    ),
  },
  {
    title: 'Statto LITE',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Statto Lite is a Power Platform personal Football League almanac, the Lite version comes with the data for 2022/2023 and the 2023/2024 season, .
      </>
    ),
  },
  {
    title: 'Statto PRO',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
