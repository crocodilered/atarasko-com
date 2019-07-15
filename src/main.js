import Vue from 'vue'
import { LayoutPlugin, NavbarPlugin, CollapsePlugin, BImg, ButtonPlugin, ModalPlugin, FormGroupPlugin, FormInputPlugin, FormPlugin, FormTextareaPlugin, BFormRadioGroup } from 'bootstrap-vue'
import App from './app.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookSquare, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faPhone,
  faInstagram,
  faFacebookSquare,
  faSkype,
  faEnvelope,
  faFilePdf,
  faSpinner
)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('b-img', BImg)
Vue.component('b-form-radio-group', BFormRadioGroup)

Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CollapsePlugin)
Vue.use(ButtonPlugin)
Vue.use(ModalPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormPlugin)
Vue.use(FormTextareaPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
