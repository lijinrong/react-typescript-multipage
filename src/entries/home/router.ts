import PageA from './pageA/app'
import Home from './app/app'

interface route {
  path: string,
  component: any
}

var routes:route[] = [
  { path: '/', component: Home },
  { path: '/PageA', component: PageA }
]

export default routes
