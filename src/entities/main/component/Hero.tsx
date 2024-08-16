import Image from 'next/image';
import ProfileImage from '../../../../public/images/profile.webp';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="mt-12 text-center">
            <Image
                className="mx-auto mb-2 rounded-full border border-slate-200"
                src={ProfileImage}
                alt="프로필 이미지"
                width={250}
                height={250}
                priority
            />
            <h2 className="text-3xl font-bold">{`Hi, I'm Developer`}</h2>
            <h3 className="text-xl font-semibold">FrontEnd Engineer</h3>
            <p className="mb-2">개인 학습용 기술 블로그 예정</p>
            <Link href="/contact">
                <button className="rounded-lg bg-yellow-500 px-4 py-1 font-bold transition-all duration-100 hover:brightness-110">
                    Contact Me
                </button>
            </Link>
        </section>
    );
}
