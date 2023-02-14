import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import '../assets/scss/custom.scss'
import '../assets/scss/main.scss'

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '../node_modules/@fortawesome/free-solid-svg-icons'

library.add(faHatWizard)

createApp(App).use(router).use(store).mount('#app')

//import { IconName } from '../node_modules/@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
//Vue.component('font-awesome-icon', FontAwesomeIcon)
