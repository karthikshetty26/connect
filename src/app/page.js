import HOMECSS from "./page.module.css"; // CSS module for styling
import BlogModalClient from "./BlogModalClient";
import SocialCard from "./SocialCard";

// Array of social media and contact links with metadata
const SOCIAL_LINKS = [
  { href: 'https://karthikshetty.info/', name: 'Portfolio', type: 'Website', description: 'My best work in design and engineering.', linkText: 'View Projects' },
  { href: 'https://www.linkedin.com/in/karthikshetty26/', name: 'LinkedIn', type: 'LinkedIn', description: 'Professional network and career updates.', linkText: 'Connect' },
  { href: 'https://github.com/karthikshetty26', name: 'GitHub', type: 'GitHub', description: 'Open source contributions and repositories.', linkText: 'View Code' },
  { isModal: true, name: 'Read Articles', type: 'Blog', description: 'Essays, tutorials, and deep-dives on tech and design.', linkText: 'Read Articles' },
  { href: 'https://www.youtube.com/@karthiksinfo2020', name: 'YouTube', type: 'YouTube', description: 'Video logs and development showcases.', linkText: 'Subscribe' },
  { href: 'https://www.instagram.com/karthikshettysocial/', name: 'Instagram', type: 'Instagram', description: 'Visual journey and snippets of life.', linkText: 'Follow' },
  { href: 'mailto:karthikkanyana26@gmail.com', name: 'Gmail', type: 'Mail', description: 'Inquiries and collaboration requests.', linkText: 'Send Email', isHighlight: true },
];

// Main home page component
export default function Home() {
  return (
    <main className={HOMECSS.main}>

      {/* Bio section - contains personal info */}
      <section className={HOMECSS.section_bio}>
        {/* Container for biographical information */}
        <div className={HOMECSS.bio_content}>
          <h1>Karthik Shetty</h1>
          <p className={HOMECSS.bio}>Developer and digital craftsman building minimalist experiences for the modern society. Exploring the intersection of design, code, and human interaction.</p>
        </div>
      </section>

      {/* Social links section - grid of contact/social links */}
      <section className={`${HOMECSS.section_highlight} ${HOMECSS.links}`}>

        {/* Map through the array of social links to create link elements */}
        {SOCIAL_LINKS.map(({ href, name, type, description, linkText, isHighlight, isModal }) => {
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
        ©&nbsp;2026&nbsp;Karthik Shetty | <a href="https://github.com/karthikshetty26/connect" target="_blank">Source</a>
      </div>
    </main >
  );
}