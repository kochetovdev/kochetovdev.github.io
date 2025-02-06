import { TDeveloperInfo } from "../types/TDevelopersInfo";
import AvatarImage from "../assets/developer/avatar.jpg";
import ProjectSrc1 from "../assets/developer/projects/1.png";
import ProjectSrc2 from "../assets/developer/projects/2.png";

export const developerInfo: TDeveloperInfo = {
  username: "yevhen-kochetov",
  name: "Yevhen Kochetov",
  position: "Front-End Engineer",
  avatar: AvatarImage,
  socials: {
    upwork: "https://www.upwork.com/freelancers/~014eb8eb298748d57e",
    github: "https://github.com/kochetovdev",
  },
  description:
    "I'm a results-driven Front-End Developer with 3 years of experience creating dynamic, user-friendly websites and applications. Proficient in modern frameworks and libraries, including Next.js, React.js, Redux.js, Material UI, SCSS, TailwindCSS, styled-components, and shadcn UI. Known for delivering responsive, intuitive interfaces and high-quality, detail-oriented work. Strong technical foundation, effective communicator, and dedicated team player committed to project success.",

  previousProjects: [
    {
      title: "ExpoDisco",
      position: "Front-End Developer",
      previewSrc: ProjectSrc1,
      duration: "6 months",
      href: "https://fuzzydisco.com/",
      description:
        "ExpoDisco is for people and organizations involved in trade shows, exhibitions, and expositions. It is designed for event organizers looking to expand their exhibition offerings, exhibitors looking for innovative ways to showcase their products and services, and attendees interested in learning about new products, networking with industry professionals, and learning about the latest trends and developments. I was responsible for full Front-End development from scratch.",
      technologies: "React, Emotion.js, MaterialUI, Google Auth",
      results:
        "I solely was responsible for the entire Front-End development from scratch, and have successfully built a fully functional server-side application with an integrated admin panel, based on, and in strict accordance with design files and product requirements, meeting and overcoming all client’s expectations. The app has a robust admin panel that supports comprehensive user and company management capabilities, and allows users to register and log in via email or Google authentication, providing options to update their profile, password, and email as needed. The admin panel offers extensive control, allowing the admin to approve or reject events and companies, manage company data, oversee team roles, and update user profiles, including their passwords and emails.",
    },
    {
      title: "Trade-CRM",
      position: "Front-End Developer",
      previewSrc: ProjectSrc2,
      duration: "6 months",
      href: "https://trade-crm-fe.vercel.app/login",
      description:
        "Trade-CRM is a robust and flexible platform designed to help businesses efficiently manage their operations while providing their services in a highly accessible and user-friendly manner. It simplifies customer interactions and ensures smooth communication between specialists and clients. With powerful tools and a high degree of customization, the platform can adapt to businesses of all sizes and industries.",
      technologies:
        "Next.js, Typescript, Tailwind CSS, Shadcn, Redux, Redux Toolkit, React-hook-form, Zod, Date-fns",
      results:
        "I successfully developed the server-side application based on Figma designs, with an admin panel, with all required features for both admin and super admin roles. I implemented secure email authentication, allowing admins to log in safely, manage their profiles by updating personal details, passwords, and emails, and oversee subscription purchases and status. The system enables admins to add, approve, update, or delete specialists, as well as create, update, and manage customers, quotes, and invoices. I also built a website editor that allows admins to customize landing pages by updating themes and uploading photos.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Next.JS",
    "React.JS",
    "Redux",
    "Redux-Toolki",
    "MaterialUI",
    "TailwindCSS",
    "styled-component",
    "shadcn U",
    "SCSS",
    "Less",
    "Sass",
    "HTML5",
    "CSS3",
    "chart.js",
    "ApexChart",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
  ],
  education: [
    {
      list: [
        "Lemon IT School JavaScript Front-end Development",
        "National University of Radio Electronics Bachelor of Applied Science (BASc), Economics 2012-2017",
      ],
    },
  ],
  employmentHistory: [
    {
      company: "Incode Group",
      position: "Front-End Developer React Next Software Engineer",
      duration: "November 2023 - Present",
    },
    {
      company: "Natiffe",
      position: "Web Developer Front-End Developer React Next Developer",
      duration: "May 2022 - November 2023",
    },
    {
      company: "Dirom Construction",
      position: "Manager-coordinator",
      duration: "March 2018 - March 2022",
    },
  ],
  languages: [
    {
      name: "English",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate",
      level: "B2",
    },
  ],
};
