import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>first post</h1>
            <Link href="/">
                <a> Back to home page</a>
            </Link>
        </>    
    )
}