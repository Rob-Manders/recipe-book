import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { getOrCreateFirebaseApp } from './firebase/app'

const firebaseApp = getOrCreateFirebaseApp()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()]
})

app.mount('#app')
