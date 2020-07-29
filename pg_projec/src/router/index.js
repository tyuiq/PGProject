import Vue from 'vue'
import VueRouter from 'vue-router'
import userRouter from './userRouter'
import adminRouter from './adminRouter'

// 引入组件

// 使用 VueRouter
Vue.use(VueRouter)

// 防止路由重复引用报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

// 定义路由

// 创建 router 实例， 传入 routes 配置
const router = new VueRouter({
    mode: 'history',
    routes: [
        ...userRouter,
        ...adminRouter
    ]
})

export default router