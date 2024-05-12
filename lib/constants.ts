import { Article, Experience, Project, Skill, SocialLink } from "@/types";
import { DiDocker, DiPostgresql } from "react-icons/di";
import {
  FaFacebookSquare,
  FaGit,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GrCss3, GrMysql } from "react-icons/gr";
import { LiaHtml5 } from "react-icons/lia";
import { RiJavascriptLine, RiMediumLine } from "react-icons/ri";
import {
  SiExpress,
  SiGraphql,
  SiMongoose,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandLinkedin,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTypescript,
} from "react-icons/tb";

export const PROJECTS: Project[] = [
  {
    name: "PersonaNet",
    description:
      "A social media platfrom that allows users to engage 24/7 with other people without having to connect their persona will do the work for them.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    imageUrl: "/images/PersonaNET.png",
    url: "https://personanet.app/",
  },
  {
    name: "Hash tag maker",
    description:
      "A hash tag maker that use AI to search trough a target platform and retrieve the most used tags based on the topic you intrested in.",
    technologies: ["NextJs", "Typescript", "Langchain"],
    imageUrl: "/images/hashtag-maker.png",
    url: "https://hashtag-maker.vercel.app/",
  },
  {
    name: "School Portal",
    description:
      "A school management system that allows users to manage their school, students, teachers, payments, etc.",
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "MySql",
      "Spring security",
      "Firebase storage",
    ],
    imageUrl: "/images/SchoolManagment.png",
  },

  {
    name: "Portfolio Maker",
    description:
      "A portfolio maker that allows users to create their own portfolio with their projects and skills by filling forms and choosing the template.",
    technologies: ["NextJs", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: "/images/ProtfolioMaker.png",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "AfterFlea OS Conversational AI",
    jobTitle: "Full Stack Developer",
    location: "San Francisco, Remote",
    startDate: "August 2023",
    endDate: "Present",
    description: [
      "Spearheaded the development of a persona-based social media application using the MERN stack, facilitating personalized connections and matchings.",
      " Employed containerization with Docker, streamlining deployment processes and ensuring consistency acrossenvironments.",
      " Implemented a Test-Driven Development (TDD) approach, writing comprehensive unit and integration tests to ensure the reliability and stability of the application.",
      " Managed project versioning and collaboration using Git and GitHub, maintaining a well-organized and documented codebase for efficient team collaboration and code review.",
      " Mentored and trained 4 interns, providing guidance and support to enhance their technical skills and knowledge in web development.",
      " Proposed the project architecture making sure the app can scale and maintain easily.",
      "Collabored with the desginers team to ensure the design and user experience of the app was well-structured and user-friendly.",
    ],
  },
  {
    company: "GM-Soft",
    jobTitle: "Backend Developer",
    location: "Beni Mellal, Morocco (Hybrid)",
    startDate: "Januray 2023",
    endDate: "August 2023",
    description: [
      `Developed a comprehensive school management system using Java and Spring Boot, encompassing student management, attendance
tracking, and grade management functionalities.`,
      `
Collaborated with frontend developers to integrate backend
services with the Angular frontend, ensuring seamless
communication and user interaction.`,
      `
Implemented caching mechanisms using Redis to optimize data
retrieval and improve application performance, enhancing
scalability and responsiveness.`,
      `
Engineered scheduling algorithms for efficient session
management, ensuring optimal resource allocation and
maximizing system throughput.`,
      `
Integrated JSON Web Token (JWT) authentication with Spring
Security, fortifying application security and protecting sensitive
data.`,
      `Leveraged Firebase for file storage, enabling secure and scalable
storage solutions for documents and media assets.`,
    ],
  },
  {
    company: "Molay soultan solayman university",
    jobTitle: "Frontend Developer Intern",
    location: "Beni Mellal, Morocco",
    startDate: "March 2022",
    endDate: "May 2022",
    description: [
      "completed an internship where I served as a front-end developer, contributing to the redesign of the university's UI.",
      "Utilized Next.js and TypeScript to create a modern, responsive, and userfriendly interface. Implemented Tailwind CSS for efficient styling, ensuring a seamless and visually appealing experience for users",
      "Integrated with existing APIs to enable students to access their information, exam schedules, and other relevant data. Demonstrated proficiency in front-end technologies and a keen eye for UI/UX design principles.",
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express Js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: TbBrandMongodb,
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
  },
  {
    name: "HTML",
    icon: LiaHtml5,
  },
  {
    name: "CSS",
    icon: GrCss3,
  },
  {
    name: "Javascript",
    icon: RiJavascriptLine,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "MySQL",
    icon: GrMysql,
  },
  {
    name: "PostgresSQL",
    icon: DiPostgresql,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "ShadCn",
    icon: SiShadcnui,
  },
  {
    name: "Git",
    icon: FaGit,
  },
  {
    name: "Github",
    icon: FiGithub,
  },
  {
    name: "Docker",
    icon: DiDocker,
  },
  {
    name: "Firebase",
    icon: TbBrandFirebase,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    name: "Prisma",
    icon: TbBrandPrisma,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/younes-essaadani",
    icon: TbBrandLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/EssaadaniYounes",
    icon: FiGithub,
  },
  {
    name: "Medium",
    url: "https://medium.com/@essaadani.yo",
    icon: RiMediumLine,
  },
];

export const ARTICLES: Article[] = [
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/1*ty42wOKdun7WRnAZhmuhEQ.png",
    title: "Improve your application performance : NodeJs and Redis",
    description:
      "Are you tired of waiting for your data to be retrieved from the database every time a request hits your server? Opening connections, executing queries — it can slow down your application. But what if there was a way to bypass all that?",
    url: "https://medium.com/@essaadani.yo/improve-your-application-performance-nodejs-and-redis-ed90cbce0763",
  },
];
