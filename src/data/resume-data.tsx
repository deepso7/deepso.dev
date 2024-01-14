import { Huddle01Logo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Deepanshu Singh",
  initials: "DS",
  location: "Blr, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about: "Full Stack Engineer experienced in webrtc and distributed systems",
  summary:
    "I'm a Full Stack Backend Heavy Engineer with a passion for building scalable, distributed systems. I have experience in building and scaling distributed systems, and I'm currently leading development at Huddle01 where we are building People-powered Communication",
  avatarUrl: "/dp.png",
  personalWebsiteUrl: "https://deepso.dev",
  contact: {
    email: "deepanshu@huddle01.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/deepso7",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepanshu-singh-620797191/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/deepso7",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "VIT Bhopal",
      degree:
        "Bachelor's Degree in Computer Science and Engineering with Specialization in Cyber Security and Digital Forensics",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Huddle01",
      link: "https://huddle01.com",
      badges: ["Remote"],
      title: "Lead Developer",
      logo: Huddle01Logo,
      start: "2021",
      end: "Present",
      description:
        "Built apps and systems from scratch, leading squad, democratizing WebRTC & real-time communication",
    },
  ],
  skills: [
    "WebRTC",
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "Kubernetes",
    "Docker",
    "Libp2p",
  ],
  projects: [
    {
      title: "Wallet01",
      techStack: ["TypeScript", "Next.js", "Vite"],
      description:
        "A Chain Agnostic Wallets SDK for connecting a wallet to your dApp",
      logo: Huddle01Logo,
      link: {
        label: "Wallet01",
        href: "https://wallet01-v1.vercel.app/",
      },
    },
  ],
} as const;
