import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeroBanner from '../components/hero-banner'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
        <title>Home page</title>
    </Head>
    <HeroBanner />
    <header className="bg-white shadow">
        {/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div> */}
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
    </main>
    </div>
  )
}
