import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Statto Stickers',
    image: require('@site/static/img/album.png').default,
    description: (
      <>
        Statto stickers, the Fantasy Premier League Sticker Album
      </>
    ),
  },
  {
    title: 'Statto LITE',
    image:  require('@site/docs/lite/assets/statto-homepage.png').default,
    description: (
      <>
       Statto Lite is a Power Platform personal Football League almanac, the Lite version comes with the data for 2022/2023 and the 2023/2024 season. 
      </>
    ),
  },
  {
    title: 'Statto PRO',
    image:  require('@site/docs/pro/assets/10-04-2023.png').default,
    description: (
      <>
        Statto PRO is a Power Platform personal Football League almanac, the PRO version comes with 10+ Years of data and Statto Live.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
