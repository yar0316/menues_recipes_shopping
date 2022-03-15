import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import { loadFonts } from './plugins/webfontloader'
import '@aws-amplify/ui-vue'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
