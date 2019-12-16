
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/1.css'
import Head from './components/publicstyle/passwordhead.vue'
import Head1 from './components/publicstyle/passwordhead1.vue'
import Left from './components/publicstyle/passwordleft.vue'
import mycourse from './components/course/my_course.vue'
import Bottom from './components/publicstyle/passwordbottom.vue'

Vue.prototype.axios = axios
Vue.component('Head1', Head1)
Vue.component('mycourse', mycourse)
Vue.component('Head', Head)
Vue.component('Left', Left)
Vue.component('Bottom', Bottom)
Vue.use(Head1)
Vue.use(Head)
Vue.use(mycourse)
Vue.use(Left)
Vue.use(Bottom)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
