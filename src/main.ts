import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message  from 'primevue/message';

import "primeicons/primeicons.css";
import 'primevue/resources/themes/vela-blue/theme.css';
import './main.scss';

createApp(App)
	.use(store)
	.use(router)
	.component('DataTable', DataTable)
	.component('Column', Column)
	.component('InputText', InputText)
	.component('Button', Button)
	.component('Message', Message)
	.mount('#app');
