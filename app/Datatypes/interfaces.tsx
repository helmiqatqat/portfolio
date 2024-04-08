import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { StaticImageData } from 'next/image'
import { TTechnologies, Theme } from './types';
import { ReactNode } from 'react';

export interface ISkill {
  title: string,
  icon: StaticImport
}

export interface IProject {
  title: string,
  image: StaticImageData,
  repo: string,
  technologies: TTechnologies[],
  liveurl?: string
}

export interface IIcons {
  [key: string]: StaticImport;
}

export interface IToastProps {
  show: boolean
}

export interface IEmailTemplateProps {
  firstName: string;
}

export interface IThemeContext {
  theme: Theme | null,
  toggleTheme: () => void
}

export interface IThemeProviderProps {
  children: ReactNode
}

export interface IFooterIconLinks {
  title: string,
  href: string,
  icon: StaticImport,
}