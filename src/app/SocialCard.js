import HOMECSS from "./page.module.css";
import IconByType from "./IconByType";
import ArrowIcon from "./ArrowIcon";

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
        <ArrowIcon className={HOMECSS.arrow} />
      </div>
    </a>
  );
}
