import { createApp } from 'vue'
import App from './App.vue'

// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

createApp(App).mount('#app')

import { Button } from 'vant'
const app = createApp();
app.use(Button);

