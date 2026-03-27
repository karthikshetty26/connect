"use client";

import { useEffect, useId, useRef, useState } from "react";
import HOMECSS from "./page.module.css";
import { SITE_CONFIG } from "@/config/site";
import ArrowIcon from "./ArrowIcon";

const BLOG_PLATFORM_ICON_PATHS = {
  Hashnode:
    "m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z",
  Medium:
    "M6.15791 4H17.8422C19.034 4 20.0001 4.96612 20.0001 6.15789V9.61314C19.8226 9.65789 19.653 9.71748 19.5077 9.79063C19.1077 9.97583 18.7549 10.2528 18.4614 10.6162C17.9888 11.2018 17.7026 11.9931 17.633 12.8824C17.6181 13.059 17.6132 13.2366 17.6164 13.4138C17.6574 15.1766 18.4959 16.6295 20.0001 16.9647V17.8421C20.0001 19.0339 19.034 20 17.8422 20H6.15791C4.96613 20 4.00001 19.0339 4.00001 17.8421V6.15789C4.00001 4.96612 4.96613 4 6.15791 4ZM21.0001 6.15789C21.0001 4.41384 19.5863 3 17.8422 3H6.15791C4.41385 3 3 4.41384 3 6.15789V17.8421C3 19.5862 4.41385 21 6.15791 21H17.8422C19.5863 21 21.0001 19.5862 21.0001 17.8421V6.15789ZM20.0001 10.298V12.2813H19.3839C19.4227 11.4139 19.6365 10.7014 20.0001 10.298ZM20.0001 12.6621V14.7252C19.5588 14.2117 19.3013 13.4758 19.3474 12.6621H20.0001ZM17.6974 7.30004L17.7116 7.29693V7.18701H14.8128L12.1212 13.5132L9.42956 7.18701H6.30575V7.29693L6.31977 7.30004C6.84888 7.41946 7.11751 7.59757 7.11751 8.23987V15.7595C7.11751 16.4018 6.84784 16.5799 6.31874 16.6993L6.30471 16.7024V16.8127H8.42412V16.7028L8.41011 16.6996C7.88098 16.5802 7.61235 16.4021 7.61235 15.7598V8.67605L11.07 16.8127H11.2661L14.8246 8.44914V15.9455C14.7792 16.4528 14.513 16.6095 14.0339 16.7176L14.0197 16.7209V16.83H17.7116V16.7209L17.6974 16.7176C17.2178 16.6095 16.9452 16.4528 16.8999 15.9455L16.8974 8.23987H16.8999C16.8999 7.59757 17.1685 7.41946 17.6974 7.30004Z",
};

function BlogModalOption({ href, title, ctaLabel }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={HOMECSS.modal_option}>
      <div className={HOMECSS.modal_icon_wrapper}>
        <svg viewBox="0 0 24 24">
          <path d={BLOG_PLATFORM_ICON_PATHS[title]} />
        </svg>
      </div>
      <div className={HOMECSS.modal_option_info}>
        <span className={HOMECSS.modal_option_title}>{title}</span>
        <div className={HOMECSS.link_text_container}>
          <span className={HOMECSS.link_text}>{ctaLabel}</span>
          <ArrowIcon className={HOMECSS.arrow} />
        </div>
      </div>
    </a>
  );
}

export default function BlogModalClient({ name, type, description, linkText }) {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const triggerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalTitleId = useId();

  const closeModal = () => {
    setIsBlogModalOpen(false);
    triggerButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isBlogModalOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isBlogModalOpen]);

  return (
    <>
      <button
        ref={triggerButtonRef}
        type="button"
        className={`${HOMECSS.link} ${HOMECSS.link_button}`}
        onClick={() => setIsBlogModalOpen(true)}
        aria-label={`${name} - ${linkText}`}
      >
        <div className={HOMECSS.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            {type === "Blog" && (
              <path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM3.06361 21.6132C4.08854 15.422 6.31105 1.99658 21 1.99658C19.5042 4.99658 18.5 6.49658 17.5 7.49658L16.5 8.49658L18 9.49658C17 12.4966 14 15.9966 10 16.4966C7.33146 16.8301 5.66421 18.6635 4.99824 21.9966H3C3.02074 21.8722 3.0419 21.7443 3.06361 21.6132Z" />
            )}
          </svg>
        </div>

        <div className={HOMECSS.card_content}>
          <h3 className={HOMECSS.title}>{name}</h3>
          <p className={HOMECSS.description}>{description}</p>
        </div>

        <div className={HOMECSS.link_text_container}>
          <span className={HOMECSS.link_text}>{linkText}</span>
          <ArrowIcon className={HOMECSS.arrow} />
        </div>
      </button>

      {isBlogModalOpen && (
        <div className={HOMECSS.modal_overlay} onClick={closeModal}>
          <div
            className={HOMECSS.modal_content}
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={HOMECSS.modal_header}>
              <h3 id={modalTitleId}>{SITE_CONFIG.blogModal.heading}</h3>
              <button
                ref={closeButtonRef}
                type="button"
                className={HOMECSS.close_button}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className={HOMECSS.modal_options}>
              {SITE_CONFIG.blogModal.platforms.map(({ title, href }) => (
                <BlogModalOption
                  key={title}
                  href={href}
                  title={title}
                  ctaLabel={SITE_CONFIG.blogModal.ctaLabel}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
