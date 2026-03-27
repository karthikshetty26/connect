import FOOTER_CSS from "./Footer.module.css";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  return (
    <footer className={FOOTER_CSS.app_cc}>
      ©&nbsp;{new Date().getFullYear()}&nbsp;{SITE_CONFIG.profile.name} |{" "}
      <a href={SITE_CONFIG.urls.source} target="_blank" rel="noopener noreferrer">
        {SITE_CONFIG.uiText.sourceLabel}
      </a>
    </footer>
  );
}

