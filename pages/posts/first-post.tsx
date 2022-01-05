// @ts-check
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
    return (
        <>
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
        </>    
    )
}