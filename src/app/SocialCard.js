import HOMECSS from "./page.module.css";
import IconByType from "./IconByType";

export default function SocialCard({
  href,
  name,
  type,
  description,
  linkText,
  isHighlight,
}) {
  return (
    <a
      className={`${HOMECSS.link} ${isHighlight ? HOMECSS.link_highlight : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name === "Portfolio" && (
        <div className={HOMECSS.decorative_grid}>
          <div />
          <div />
          <div />
          <div />
        </div>
      )}

      <div className={HOMECSS.icon}>
        <IconByType type={type} />
      </div>

      <div className={HOMECSS.card_content}>
        <h3 className={HOMECSS.title}>{name}</h3>
        <p className={HOMECSS.description}>{description}</p>
      </div>

      <div className={HOMECSS.link_text_container}>
        <span className={HOMECSS.link_text}>{linkText}</span>
        <svg
          className={HOMECSS.arrow}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289L14.2071 7.79289C14.5976 8.18342 14.5976 8.81658 14.2071 9.20711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L11.0858 9.5H2.5C1.94772 9.5 1.5 9.05228 1.5 8.5C1.5 7.94772 1.94772 7.5 2.5 7.5H11.0858L8.29289 4.70711C7.90237 4.31658 7.90237 3.68342 8.29289 3.29289Z" />
        </svg>
      </div>
    </a>
  );
}
