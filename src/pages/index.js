import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Package MDC - MMC</title>
        <meta name="description" content="Package for Math" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/ivamgf/package-math">Package Math!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ivamgf/package-math" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find information about Package Math.</p>
          </a>

          <a href="https://github.com/ivamgf/package-math" className={styles.card}>
            <h2>Use &rarr;</h2>
            <p>Learn about MDC and MMC Application!</p>
          </a>

          <Link href="/math/mdc" className={styles.card}>
            <a>
              <h2>MDC &rarr;</h2>
              <p>Calculate the mdc</p>
            </a>            
          </Link>

          <Link href="/math/mmc" className={styles.card}>
            <a>
              <h2>MMC &rarr;</h2>
              <p>Calculate the mmc</p>
            </a>            
          </Link>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}