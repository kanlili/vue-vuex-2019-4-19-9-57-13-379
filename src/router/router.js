import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
// import UserInfo from './components/UserInfo.vue'
Vue.use(VueRouter)
const routes = [
  {
  path: '/',
  component: Main
  },
  {
  path: '/home',
  component:Home,
	//children: [
    //  {
    //     path: '/todoList' ,
    //      component: ToDoList
    //  } ,
	//  {
    //     path: '/userInfo', 
    //     component: UserInfo
    //  }
	// ]
  } 
]
	
export default new VueRouter({
  mode: 'history',
  routes,
}); 