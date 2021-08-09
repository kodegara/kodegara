import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fungsional',
    image: "img/beranda-garafungsi.png",
    description: (
      <>
        Elemen fungsional seperti imutabilitas dan fungsi berorde tinggi
        menjadikan Gara sangat modern, kaya, dan <i>scalable</i>.
      </>
    ),
  },
  {
    title: 'Berbasis Objek',
    image: "img/beranda-garaoop.png",
    description: (
      <>
        Seluruh data adalah objek. Paradigma pemrograman yang lazim digunakan dalam membuat sistem di industri.
      </>
    ),
  },
  {
    title: 'Ramah',
    image: "img/beranda-garaindo.png",
    description: (
      <>
        Memiliki sintaksis yang mudah dipelajari bagi penutur bahasa Indonesia yang ingin menjadi pemrogram handal.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} height="300" />
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
