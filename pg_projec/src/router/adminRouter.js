
// 引入组件
import login from '../views/AdminPage/login.vue'    // 登录
import managementpage from '../views/AdminPage/managementpage.vue'  // 管理主页
import encyclopediaslist from '../components/adminlist/encyclopedias/encyclopediaslist.vue'
import encyclopediasdetail from '../components/adminlist/encyclopedias/encyclopediasdetail.vue'
import evaluationdetail from '../components/adminlist/evaluation/evaluationdetail.vue'
import evaluationlist from '../components/adminlist/evaluation/evaluationlist.vue'
import noticedetail from '../components/adminlist/notice/noticedetail.vue'
import noticelist from '../components/adminlist/notice/noticelist.vue'
import teachersdetail from '../components/adminlist/teachers/teachersdetail.vue'
import teacherslist from '../components/adminlist/teachers/teacherslist.vue'

// 定义路由
const adminRouter = [
    {
        path: '/login', // 登录
        component: login
    },
    {
        path: '/managementpage',    // 管理主页
        component: managementpage,
        children: [
            {
                path: '/encyclopediaslist',     // 心理百科列表
                component: encyclopediaslist
            },
            {
                path: '/encyclopediasdetail/:type/:id',    // 增删改页面
                component: encyclopediasdetail
            },
            {
                path: '/evaluationlist',   // 心理测评试题列表
                component: evaluationlist
            },
            {
                path: '/evaluationdetail/:type',     
                component: evaluationdetail
            },
            {
                path: '/noticelist',    // 通知
                component: noticelist
            },
            {
                path: '/noticedetail/:type/:id',
                component: noticedetail
            },
            {
                path: '/teacherslist',  // 咨询老师
                component: teacherslist
            },
            {
                path: '/teachersdetail/:type',
                component: teachersdetail
            }
        ]
    }
]

export default adminRouter