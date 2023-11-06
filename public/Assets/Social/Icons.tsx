import linkedin from '../SVG/linkedin.svg'
import github from '../SVG/github.svg'
import leetcode from '../SVG/leetcode.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type TIcons = {
  title: string,
  href: string,
  icon: StaticImport,
}

const icons: TIcons[] = [
  {title: 'linkedin', icon: linkedin, href: 'https://www.linkedin.com/in/helmiqatqat/'},
  {title: 'github', icon: github, href: 'https://github.com/helmiqatqat'},
  {title: 'leetcode', icon: leetcode, href: 'https://leetcode.com/helmiqatqat/'}
]

export default icons