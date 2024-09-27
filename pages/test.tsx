import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Test.module.css'

export default function TestPage() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Test Page</title>
        <meta name="description" content="A simple test page for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Next.js Test Page
        </h1>

        <p className={styles.description}>
          This is a simple page to test Next.js functionality
        </p>

        <div className={styles.counter}>
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  )
}
