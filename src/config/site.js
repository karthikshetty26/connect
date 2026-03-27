const ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID || "G-SHQCDTWEW3";

export const SITE_CONFIG = {
  urls: {
    base: "https://connect.karthikshetty.info",
    source: "https://github.com/karthikshetty26/connect",
    analyticsScript: `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`,
    sharingImage: "/images/sharing/connect-og-image.jpg",
  },
  profile: {
    name: "Karthik Shetty",
    bio: "Developer and digital craftsman building minimalist experiences for the modern society. Exploring the intersection of design, code, and human interaction.",
    creatorHandle: "@karthikshettyyy",
  },
  analytics: {
    id: ANALYTICS_ID,
  },
  uiText: {
    appTitle: "Connect with Karthik Shetty",
    appDescription:
      "Find all my important links in one place! Connect with me through my portfolio, GitHub, LinkedIn, YouTube channels, and social media profiles.",
    openGraphDescription:
      "All my essential links in one place. Connect with me on various platforms and explore my work.",
    twitterDescription:
      "Find all my important links in one place, including portfolio, GitHub, LinkedIn, and social media.",
    siteName: "Karthik Shetty | Connect",
    sharingImageAlt: "Karthik Shetty - Connect with Me",
    keywords:
      "Karthik Shetty, social links, connect with me, link-sharing, portfolio links, GitHub, LinkedIn, YouTube, web development, full stack developer, React, Next.js, Angular, Java, MySQL",
    copyToast: "Link copied! Connect with me anytime...",
    toggleThemeAriaLabel: "Toggle Theme",
    copyUrlAriaLabel: "Copy Page URL",
    sourceLabel: "Source",
  },
  socialLinks: [
    {
      href: "https://karthikshetty.info/",
      name: "Portfolio",
      type: "Website",
      description: "My best work in design and engineering.",
      linkText: "View Projects",
    },
    {
      href: "https://www.linkedin.com/in/karthikshetty26/",
      name: "LinkedIn",
      type: "LinkedIn",
      description: "Professional network and career updates.",
      linkText: "Connect",
    },
    {
      href: "https://github.com/karthikshetty26",
      name: "GitHub",
      type: "GitHub",
      description: "Open source contributions and repositories.",
      linkText: "View Code",
    },
    {
      isModal: true,
      name: "Read Articles",
      type: "Blog",
      description: "Essays, tutorials, and deep-dives on tech and design.",
      linkText: "Read Articles",
    },
    {
      href: "https://www.youtube.com/@karthiksinfo2020",
      name: "YouTube",
      type: "YouTube",
      description: "Video logs and development showcases.",
      linkText: "Subscribe",
    },
    {
      href: "https://www.instagram.com/karthikshettysocial/",
      name: "Instagram",
      type: "Instagram",
      description: "Visual journey and snippets of life.",
      linkText: "Follow",
    },
    {
      href: "mailto:karthikkanyana26@gmail.com",
      name: "Gmail",
      type: "Mail",
      description: "Inquiries and collaboration requests.",
      linkText: "Send Email",
      isHighlight: true,
    },
  ],
};
