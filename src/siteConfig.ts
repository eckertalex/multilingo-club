export const siteConfig = {
  site: "https://multilingo-club.pages.dev/",
  title: "MultilingoClub",
  description: "Lorem ipsum dolor sit amet.",
  locale: "fr-FR",
  author: "Tanja Eckert",
  ogImage: "xyz.jpg",
  socials: {
    instagram: "https://instagram.com/",
  },
  navigation: [
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/a-propos",
      label: "A propos",
    },
  ],
} as const;
