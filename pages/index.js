import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Learning Next js</h1>
      <nav>
        <ul>
          <li>
            <Link href="/posts/first-post">
              <a>First Post</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <span>List of feature used</span>
        <ul>
          <li>Link</li>
        </ul>
      </div>
    </div>
  )
}
