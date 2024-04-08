import { ISkill } from '@/app/Datatypes/interfaces'
import icons from './Icons'

const skills: ISkill[] = Object.entries(icons).map(([title, icon]) => ({ title: title, icon: icon }))

export default skills

