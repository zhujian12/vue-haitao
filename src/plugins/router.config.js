import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AppHome from '../components/AppHome.vue';
import AppAlipay from '../components/AppAlipay.vue';
import AppCar from '../components/AppCar.vue';
import AppCategory from '../components/AppCategory.vue';
import AppDope from '../components/AppDope.vue';
import AppHot from '../components/AppHot.vue';
import AppKill from '../components/AppKill.vue';
import AppLogin from '../components/AppLogin.vue';
import AppMe from '../components/AppMe.vue';
import AppNew from '../components/AppNew.vue';
import AppNews from '../components/AppNews.vue';
import AppOrder from '../components/AppOrder.vue';
import AppPage from '../components/AppPage.vue';
import AppRegister from '../components/AppRegister.vue';
import AppSearch from '../components/AppSearch.vue';
import AppSuit from '../components/AppSuit.vue';



let routes = [
    {path:'/home',component:AppHome},
    {path:'/alipay',component:AppAlipay},
    {path:'/car',component:AppCar},
    {path:'/category',component:AppCategory},
    {path:'/dope',component:AppDope},
    {path:'/hot',component:AppHot},
    {path:'/kill',component:AppKill},
    {path:'/login',component:AppLogin},
    {path:'/me',component:AppMe},
    {path:'/new',component:AppNew},
    {path:'/news',component:AppNews},
    {path:'/order',component:AppOrder},
    {path:'/page',component:AppPage,name:'page'},
    {path:'/register',component:AppRegister},
    {path:'/search',component:AppSearch},
    {path:'/suit',component:AppSuit},
    {path:'/',redirect:'/home'},
]

let router = new VueRouter({
    routes,
    mode:'history'
});

export default router;