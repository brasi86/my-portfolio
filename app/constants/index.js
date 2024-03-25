export const NAV_LINKS = [
  { href: "#home", key: "home", label: "Home" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#curriculum", key: "curriculum", label: "Curriculum" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#about", key: "about_me", label: "About" },
];
export const SKILLS = [
  { href: "/", key: "web_design", label: "Web Design" },
  { href: "/", key: "e_commerce", label: "E-Commerce" },
  { href: "/", key: "single_page", label: "Single-Page" },
  { href: "/", key: "full_stack_app", label: "Full Stack" },
];
export const SKILLS_P = [
  {
    key: "all",
    title: "Let's get to work.",
    label: (
      <span>
        What you need,
        <span className="ml-1 underline underline-offset-2 font-semibold">
          All In One place.
        </span>
        <br />
        Landing pages, multi-page websites, Single-Page applications, Full-Stack
        apps. <br /> Let&apos;s analyze the work and create something unique
        together.
      </span>
    ),
  },
  {
    key: "web_design",
    title: "Web Design",
    label:
      "Unique designs tailored to your needs, built after a thorough analysis of the situation. Typography, colors, spacing, and more will be carefully considered. We'll collaborate to create an initial prototype of the design and refine it step by step together until the design is finalized. Then, we'll move on to coding to bring the website to life.",
  },
  {
    key: "e_commerce",
    title: "E-Commerce",
    label:
      "E-commerce tailored to your needs. The idea is to provide the possibility to update your e-commerce independently by adding products, modifying pages, etc. Using the main platforms like Shopify, WooCommerce, or creating it ad-hoc.",
  },
  {
    key: "single_page",
    title: "Single-Page App",
    label:
      "Single-Page web site or Single-Page app with the goal of providing a smoother user experience and similar to traditional desktop applications of operating systems. In a single-page application, all the necessary code (HTML, JavaScript, and CSS) is retrieved in a single page load.",
  },
  {
    key: "full_stack_app",
    title: "Full Stack Application",
    label:
      "Admin dashboard, private panels, authentication, etc. Full-stack applications leveraging major frameworks (Next.js, Angular, Vue, etc.). Manage your employees, clients, and suppliers all in one full-stack package.",
  },
];

export const CURRICULUM = [
  {
    key: "html5",
    img: "/html5.svg",
    desc: "The basics HTML/CSS to build landing page and website",
  },
  {
    key: "js",
    img: "/js.svg",
    desc: "JavaScript is essential for creating interactive web pages",
  },
  {
    key: "vsc",
    img: "/vsc.svg",
    desc: "The latest technology for editing and creating web application",
  },
  {
    key: "nodejs",
    img: "/nodejs.svg",
    desc: "Web application with the most world’s popular backend",
  },
  {
    key: "database",
    img: "/database.svg",
    desc: "Manage application data with SQL and NoSQL database",
  },
  {
    key: "react",
    img: "/react.svg",
    desc: "Use the most pupular frontend framwork to create modern PWA",
  },
];
