import {createApp} from 'vue'


import App from '@/App.vue'

import plugins from '@/plugins'
import router from '@/router'

createApp(App).use(plugins).use(router).mount('#app')

