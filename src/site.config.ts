export const siteConfig = {
  site: "https://multilingo-club.pages.dev/",
  title: "MultilingoClub",
  description: "Lorem ipsum dolor sit amet.",
  author: "Tanja Eckert",
  ogImage: "xyz.jpg",
  socials: [
    {
      name: "instagram",
      href: "https://instagram.com/",
      active: true,
    },
  ],
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
