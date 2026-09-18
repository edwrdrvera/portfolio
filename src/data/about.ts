import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiBun,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { CsharpIcon, ClaudeCodeIcon, CodexIcon } from "@/components/ui/CustomIcons";

export const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: 'currentColor' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Bun', icon: SiBun, color: 'currentColor' },
  { name: 'C#', icon: CsharpIcon, color: '#9B4F96' },
  { name: 'Claude Code', icon: ClaudeCodeIcon, color: '#D97757' },
  { name: 'Codex', icon: CodexIcon, color: 'currentColor' },
];

type TextBlock = { type: 'text'; content: string };
type ListBlock = { type: 'list'; label: string; items: string[] };
export type AboutBlock = TextBlock | ListBlock;

export const aboutParagraphs: AboutBlock[] = [
  {
    type: 'text',
    content: `hello! i'm edward. i'm a developer who's excited about building things end to end, and i'm always looking to learn and explore new technology along the way!`,
  },
  {
    type: 'text',
    content: `right now i'm expanding into asp.net, building on my full-stack background and picking up c# along the way.`,
  },
];