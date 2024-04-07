import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { StaticImageData } from 'next/image'

export interface ISkill {
  title: string,
  icon: StaticImport
}

export type TTechnologies = 'Nextjs' | 'React' | 'Nodejs' | 'Expressjs' | 'TailwindCSS' | 'SASS'
  | 'Styled-Components' | 'Git' | 'Github' | 'PostgreSQL' | 'MongoDB' | 'HTML' | 'CSS'
  | 'TypeScript' | 'JavaScript';

export interface IProject {
  title: string,
  image: StaticImageData,
  repo: string,
  technologies: TTechnologies[],
  liveurl?: string
}