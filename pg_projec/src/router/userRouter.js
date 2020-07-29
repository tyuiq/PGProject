
// 引入组件
import helloworld from '../components/HelloWorld.vue'
import homepage from '../views/UserPage/homepage.vue'
import pagecontent from '../views/UserPage/pagecontent.vue'    // 首页内容
import encyclopedias from '../views/UserPage/encyclopedias.vue'  // 心理百科
import notice from '../views/UserPage/notice.vue'    // 通知
import eydetails from '../views/UserPage/eydetails.vue'  // 详情

import evaluation from '../views/UserPage/evaluation.vue'    // 心理测评
import inform from '../components/evaluation/inform.vue'
import selftesting from '../components/evaluation/selftesting.vue'
import E_problem from '../components/evaluation/E_problem.vue'
import selfestsubject from '../views/UserPage/selftestsubject.vue' // 心理自测题目

import consultation from '../views/UserPage/consultation.vue'    // 心理咨询
import introduce from '../components/consultation/introduce.vue'
import procedure from '../components/consultation/procedure.vue'
import teachers from '../components/consultation/teachers.vue'
import C_problem from '../components/consultation/C_problem.vue'
import tearcherdetails from '../views/UserPage/tearcherdetails.vue'

import selfhelp from '../views/UserPage/selfhelp.vue'    // 心理自助
import knowledge from '../components/selfhelp/knowledge.vue'
import bookbar from '../components/selfhelp/bookbar.vue'
import movie from '../components/selfhelp/movie.vue'

// 定义路由
const userRouter = [
    {
        path: '/',  // 首页
        component: homepage,
        children: [
            {
                path: '/helloworld', // 测试
                component: helloworld
            },
            {
                path: '/pagecontent',  // 首页内容
                component: pagecontent
            },
            {
                path: '/encyclopedias', // 心理百科
                component: encyclopedias
            },
            {
                path: '/notice',     // 通知
                component: notice
            },
            {
                path: '/eydetails/:type/:id',   // 详情
                component: eydetails
            },
            {
                path: '/selfestsubject',    // 自测题目
                component: selfestsubject
            },
            {
                path: '/tearcherdetails/:id',   // 咨询老师详情
                component: tearcherdetails
            },
            {
                path: '/evaluation',    // 心理测评
                component: evaluation,
                children: [
                    {
                        path: '/',    // 告知
                        component: inform
                    },
                    {
                        path: 'selftesting',    // 心理自测
                        component: selftesting
                    },
                    {
                        path: 'problem',   // 常见问题
                        component: E_problem
                    }
                ]
            },
            {
                path: '/consultation',  // 心理咨询
                component: consultation,
                children: [
                    {
                        path: '/',  // 心理咨询介绍
                        component: introduce
                    },
                    {
                        path: 'procedure',  // 心理咨询流程
                        component: procedure
                    },
                    {
                        path: 'teachers',   // 咨询老师介绍
                        component: teachers
                    },
                    {
                        path: 'problem',  // 常见问题解答
                        component: C_problem
                    }
                ]
            },
            {
                path: '/selfhelp',  // 心理自助
                component: selfhelp,
                children: [
                    {
                        path: '/',  // 心理知识
                        component: knowledge
                    },
                    {
                        path: 'bookbar',    // 心理书吧
                        component: bookbar
                    },
                    {
                        path: 'movie',  // 心理电影
                        component: movie
                    }
                ]
            }
        ]
    }
]

export default userRouter