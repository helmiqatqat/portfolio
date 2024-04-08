import LMS from '../Images/LMS.png'
import Tenzies from '../Images/Tenzies.png'
import Elzero from '../Images/Elzero.png'
import Kasper from '../Images/Kasper.png'
import Leon from '../Images/Leon.png'
import { IProject } from '@/app/Datatypes/interfaces'

export const projects: IProject[] = [
  {
    title: 'Learning Management System', image: LMS, repo: 'https://github.com/LM-System/frontend',
    technologies: ['Nextjs', 'Nodejs', 'PostgreSQL']
  },
  {
    title: 'Tenzies Game', image: Tenzies, repo: 'https://github.com/tenzies/frontend',
    technologies: ['React', 'SASS', 'Nodejs', 'MongoDB']
  },
  {
    title: 'Elzero', image: Elzero, repo: 'https://github.com/helmiqatqat/elzero-temp-3',
    technologies: ['HTML', 'CSS'], liveurl: 'https://helmiqatqat.github.io/elzero-temp-3/'
  },
  {
    title: 'Kasper', image: Kasper, repo: 'https://github.com/helmiqatqat/elzero-temp-2',
    technologies: ['HTML', 'CSS'], liveurl: 'https://helmiqatqat.github.io/elzero-temp-2/'
  },
  {
    title: 'Leon', image: Leon, repo: 'https://github.com/helmiqatqat/elzero-temp-1',
    technologies: ['HTML', 'CSS'], liveurl: 'https://helmiqatqat.github.io/elzero-temp-1/'
  },
]
