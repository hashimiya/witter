import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// https://aws-amplify.github.io/docs/js/vue#configuration
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)
Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
