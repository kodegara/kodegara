import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/pengantar">
            Mulai Pelajari
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const imgSrc = useBaseUrl("img/beranda-garafungsi.png")
  const title = "Bahasa Pemrograman Gara"
  const description = "Gara adalah bahasa pemrograman berbahasa Indonesia yang fungsional dan berorientasi objek. Dengan Gara, anak-anak dapat memelajari pemrograman tanpa mahir bahasa asing terlebih dahulu."

  return (
    <Layout title={`Beranda | ${siteConfig.title}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imgSrc} />

        <meta name="twitter:site" content="@kodegara" />
        <meta name="twitter:creator" content="@kodegara" />
      </Head>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
