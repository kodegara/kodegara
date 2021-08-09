import React from 'react'
import styles from './Footer.module.css'
import Link from '@docusaurus/Link'
import BrowserOnly from '@docusaurus/BrowserOnly'

const links = [
  {
    path: "/",
    text: "Beranda"
  },
  {
    path: "/docs/pengantar",
    text: "Tutorial"
  },
  {
    path: '/blog',
    text: "Blog"
  }
]

export default function Footer() {
  return (
    <BrowserOnly>
      {() => (
        (window.location.pathname == '/') ? (
          <></>
        ) : (
          <section className={styles.footer}>
            <img src='/img/gara-footer.png' className={styles.garawan} />
            <ul className={styles.links}>
              {links.map((link, id) => (
                <li key={id}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </section>
        )
      )}
    </BrowserOnly>
  )
}
