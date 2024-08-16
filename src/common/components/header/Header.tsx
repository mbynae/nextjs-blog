import Link from 'next/link';

const Header = () => {
    return (
        <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-4">
            <Link href="/">
                <h1 className="text-3xl font-bold">FRONTEND STUDY BLOG</h1>
            </Link>
            <nav className="flex gap-4 font-semibold">
                <Link className="hover:text-blue-600" href="/">
                    HOME
                </Link>
                <Link className="hover:text-blue-600" href="/about">
                    ABOUT
                </Link>
                <Link className="hover:text-blue-600" href="/posts">
                    POSTS
                </Link>
                <Link className="hover:text-blue-600" href="/contact">
                    CONTACT
                </Link>
            </nav>
        </header>
    );
};

export default Header;
