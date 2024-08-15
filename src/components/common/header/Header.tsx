import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <Link href="/">
                <h1>FRONTEND STUDY BLOG</h1>
            </Link>
            <nav>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/posts">POSTS</Link>
                <Link href="/contact">CONTACT</Link>
            </nav>
        </header>
    );
};

export default Header;
