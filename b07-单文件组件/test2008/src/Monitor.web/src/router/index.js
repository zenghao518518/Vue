import { createRouter,createWebHistory } from 'vue-router'
import { shallowRef } from 'vue'
const routes=[
    // {
    //     name:"home",
    //     path:"/",
    //     component:()=>import("../views/HomePage.vue")

    // },
    
    {
     path:'/',
     redirect:'/Login'
    },
    {
        name:"Login",
        path:"/Login",
        component:()=>import("../views/Login.vue"),
    },
    {
        name:"home",
        path:"/home",
       
        meta:{title:'首页'},
        component:()=>import("../components/layout/index.vue"),
        //component: ()=>import(shallowRef("../components/layout/index.vue")),
        children:[
            {
                name:"first",
                path:"/first",
                meta:{title:'首页'},
                component:()=>import("../views/first/index.vue")
                //component: ()=>import(shallowRef("../views/first/index.vue"))
            },
            {
                name:"order",
                path:"/order",
                meta:{title:'订单管理'},
                component:()=>import("../views/order/index.vue")
                //component: ()=>import(shallowRef("../views/order/index.vue"))
            },
            {
                name:"monitor",
                path:"/monitor",
                meta:{title:'系统监控'},
                component:()=>import("../views/monitor/index.vue"),
                //component: ()=>import(shallowRef("../views/monitor/index.vue")),
                children:[
                    {
                        name:"info",
                        path:"/monitor/info",
                        meta:{title:'信息详情'},
                        component:()=>import("../views/monitor/info/index.vue")
                        //component: ()=>import(shallowRef("../views/monitor/info/index.vue"))
                    },
                    {
                        name:"list",
                        path:"/monitor/list",
                        meta:{title:'列表展示'},
                        component:()=>import("../views/monitor/list/index.vue")
                        //component: ()=>import(shallowRef("../views/monitor/list/index.vue"))
                    },
                ]
            },
           
        ]
    },
   
    // {
    //     name:"admin",
    //     path:"/",
    //     component:()=>import("../views/index/RootPage.vue"),
    //     children:[
    //         {
    //             name:"一级菜单1",
    //             path:"/first",
    //             component:()=>import("../views/first/first.vue")
    //         },
    //         {
    //             name:"二级菜单1",
    //             path:"/",
    //             component:()=>import("../views/first2-1/first2-1.vue")
    //         },
    //         {
    //             name:"二级菜单2",
    //             path:"/",
    //             component:()=>import("../views/first2-2/first2-2.vue")
    //         },
    //     ]

    // },

    


]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
