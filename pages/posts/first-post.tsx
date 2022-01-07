// @ts-check
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
             <Image
                src="/images/profile.jpeg"
                height={144}
                width={144}
                alt="Your Name"
            />
            <h1>first post</h1>
            <Link href="/">
                <a> Back to home page</a>
            </Link>
        </Layout>    
    )
}