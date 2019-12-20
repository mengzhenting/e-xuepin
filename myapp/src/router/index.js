import Vue from 'vue'
import VueRouter from 'vue-router'
import password from '../components/componentstwo/passwordmanage'
import personal from '../components/componentstwo/personalcenter'
import authentication from '../components/componentstwo/authentication'
// import certification from '../components/componentstwo/certification'
// import certified from '../components/componentstwo/certified'
import information from '../components/componentstwo/information'
import allCourse from '../components/course/allCourse'
import auditfailure from '../components/course/auditfailure'
import published from '../components/course/published'
import reviewing from '../components/course/reviewing'
import course from '../components/course/course'
import edit from '../components/componentstwo/edit'
import success from '../components/componentstwo/success'
import aa from '../components/componentstwo/aa'
import bb from '../components/componentstwo/bb'
import cc from '../components/componentstwo/cc'
import questions from '../components/questions/questions'
import addclass from '../components/course/addclass'
import addclassall from '../components/course/addclassall'
import addsuccess from '../components/course/addsuccess'
import essential from '../components/componentstwo/essential'
import income from '../components/componentstwo/income'
import login from '../components/login.vue'
import login1 from '../components/publicstyle/login1.vue'
import login2 from '../components/publicstyle/login2.vue'
import mobile from '../components/publicstyle/mobilelogin.vue'
import myinfo from '../components/mymessage/myinfo.vue'
import editinfo from '../components/mymessage/editinfo.vue'
import myreply from '../components/answers/myreply.vue'
import problem from '../components/answers/problem.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/aa',
    component: aa,
    children: [
      {
        path: '',
        component: bb
      },
      {
        path: 'bb',
        component: cc
      }
    ]
  },
  {
    path: '/password',
    name: 'password',
    component: password,
    children: [
      {
        path: '',
        component: essential
      },
      {
        path: 'questions',
        component: questions
      },
      {
        path: 'myreply',
        component: myreply
      },
      {
        path: 'problem',
        component: problem
      },
      {
        path: 'income',
        component: income
      },
      {
        path: 'allCourse',
        component: allCourse,
        children: [
          {
            path: 'addclassall',
            component: addclassall,
            children: [
              {
                path: 'addclass',
                name: 'addclass',
                component: addclass
              },
              {
                path: 'addsuccess',
                component: addsuccess
              }
            ]
          },
          {
            path: 'course',
            name: 'course',
            component: course
          },
          {
            path: 'auditfailure',
            component: auditfailure
          },
          {
            path: 'published',
            component: published
          },
          {
            path: 'reviewing',
            component: reviewing
          }
        ]
      },
      {
        path: 'information',
        component: information,
        children: [
          {
            path: 'authentication',
            component: authentication
          },
          {
            path: 'edit',
            component: edit
          },
          {
            path: 'success',
            component: success
          },
          {
            path: 'myinfo',
            component: myinfo
          },
          {
            path: 'editinfo',
            component: editinfo
          }
        ]
      }
    ]
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/',
    name: 'login',
    redirect: '/login1',
    component: login,
    children: [
      {
        path: 'mobile',
        component: mobile
      },
      {
        path: 'login1',
        component: login1
      },
      {
        path: 'login2',
        component: login2
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
