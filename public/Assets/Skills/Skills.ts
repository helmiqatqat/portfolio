import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import icons from './Icons'

type skill = {
  title: string,
  icon: StaticImport
}

type skills = skill[]

const skills: skills = [
  {title: 'next', icon: icons.next},
  {title: 'tailwind', icon: icons.tailwind},
  {title: 'typescript', icon: icons.typescript},
  {title: 'react', icon: icons.react},
  {title: 'redux', icon: icons.redux},
  {title: 'nodejs', icon: icons.nodejs},
  {title: 'express', icon: icons.express},
  {title: 'git', icon: icons.git},
  {title: 'github', icon: icons.github},
  {title: 'html', icon: icons.html},
  {title: 'css', icon: icons.css},
  {title: 'javascript', icon: icons.javascript},
  {title: 'sass', icon: icons.sass},
  {title: 'mongodb', icon: icons.mongodb},
  {title: 'postgresql', icon: icons.postgresql},
]

export default skills

