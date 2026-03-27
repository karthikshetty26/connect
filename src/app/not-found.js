import ERROR from './not-found.module.css';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export default function NotFound() {
    return (
        <main className={ERROR.main}>
            <section className={ERROR.error_section}>
                {/* Large watermark 404 */}
                <div className={ERROR.bg_404}>{SITE_CONFIG.notFound.code}</div>

                {/* Content Overlay */}
                <div className={ERROR.content}>
                    <h1 className={ERROR.title}>{SITE_CONFIG.notFound.title}</h1>
                    <p className={ERROR.message}>
                        {SITE_CONFIG.notFound.message}
                    </p>
                    <Link href={SITE_CONFIG.notFound.homeHref} className={ERROR.button}>
                        {SITE_CONFIG.notFound.homeLabel}
                    </Link>
                </div>
            </section>
        </main>
    );
}