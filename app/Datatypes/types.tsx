export type TTechnologies = 'Nextjs' | 'React' | 'Nodejs' | 'Expressjs' | 'TailwindCSS' | 'SASS'
  | 'Styled-Components' | 'Git' | 'Github' | 'PostgreSQL' | 'MongoDB' | 'HTML' | 'CSS'
  | 'TypeScript' | 'JavaScript';

export type MenuListItem = {
  label: string,
  href: string,
  htmlFor?: string
}

export type TFormData = {
  name: string,
  email: string,
  msg: string
}

export type Theme = 'light' | 'dark'