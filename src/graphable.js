import { createApp } from 'vue'
import GraphableLanding from './GraphableLanding.vue'
import './style.css'
import { initTheme } from './theme.js'

initTheme()
createApp(GraphableLanding).mount('#app')
