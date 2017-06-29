import Vue from 'vue'
import Router from 'vue-router'
/*import Index from '../pages/index'*/
import Audio from '../pages/audio/Audio'
import Home from '../pages/home/Home'
import Broadcast from '../pages/broadcast/Broadcast'
import Mine from '../pages/mine/Mine'
import Group from '../pages/group/Group'
import Film from '../components/Film'
import Book from '../components/Book'
import TV from '../components/TV'
import City from '../components/City'
import Music from '../components/Music'
import Search from '../components/Search'
import QCode from '../components/QCode'
import Logger from '../components/Logger'
import Edit from '../components/Edit'
import More from '../components/More'
import CurrentFilm from '../components/CurrentFilm'
import ComingFilm from '../components/ComingFilm'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Audio',
      name: 'Audio',
      component: Audio,
      children:[
        {path:"/",component:Film},
        {path:"Film",component:Film},
        {path:"Book",component:Book},
        {path:"TV",component:TV},
        {path:"City",component:City},
        {path:"Music",component:Music}
      ]
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/QCode',
      name: 'QCode',
      component: QCode
    },
    {
      path: '/Logger',
      name: 'Logger',
      component: Logger
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/More',
      name: 'More',
      component: More,
      children:[
        {path:"/",component:CurrentFilm},
        {path:"CurrentFilm",component:CurrentFilm},
        {path:"ComingFilm",component:ComingFilm}
      ]
    }
  ]
})
