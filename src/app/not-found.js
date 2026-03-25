import ERROR from './not-found.module.css';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className={ERROR.main}>
            <section className={ERROR.error_section}>
                {/* Large watermark 404 */}
                <div className={ERROR.bg_404}>404</div>

                {/* Content Overlay */}
                <div className={ERROR.content}>
                    <h1 className={ERROR.title}>Page not found</h1>
                    <p className={ERROR.message}>
                        The page you are looking for might have been moved or doesn&apos;t exist.
                    </p>
                    <Link href="/" className={ERROR.button}>
                        Return Home
                    </Link>
                </div>
            </section>
        </main>
    );
}