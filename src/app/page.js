import HOMECSS from "./page.module.css"; // CSS module for styling
import BlogModalClient from "./BlogModalClient";
import SocialCard from "./SocialCard";
import { SITE_CONFIG } from "@/config/site";

// Main home page component
export default function Home() {
  return (
    <main className={HOMECSS.main}>

      {/* Bio section - contains personal info */}
      <section className={HOMECSS.section_bio}>
        {/* Container for biographical information */}
        <div className={HOMECSS.bio_content}>
          <h1>{SITE_CONFIG.profile.name}</h1>
          <p className={HOMECSS.bio}>{SITE_CONFIG.profile.bio}</p>
        </div>
      </section>

      {/* Social links section - grid of contact/social links */}
      <section className={`${HOMECSS.section_highlight} ${HOMECSS.links}`}>

        {/* Map through the array of social links to create link elements */}
        {SITE_CONFIG.socialLinks.map(({ href, name, type, description, linkText, isHighlight, isModal }) => {
          if (isModal) {
            return (
              <BlogModalClient
                key={name}
                name={name}
                type={type}
                description={description}
                linkText={linkText}
              />
            );
          }

          return (
            <SocialCard
              key={name}
              href={href}
              name={name}
              type={type}
              description={description}
              linkText={linkText}
              isHighlight={isHighlight}
            />
          );
        })}
      </section>

      {/* Copyright footer - positioned at the bottom via CSS */}
      <div className={HOMECSS.app_cc}>
        ©&nbsp;2026&nbsp;{SITE_CONFIG.profile.name} |{" "}
        <a href={SITE_CONFIG.urls.source} target="_blank">
          {SITE_CONFIG.uiText.sourceLabel}
        </a>
      </div>
    </main >
  );
}