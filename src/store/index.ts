import { createStore, Module } from 'vuex-smart-module'
import { listModule } from './user'


const store = createStore(
	new Module({
		modules: {
			list: listModule
		},
	}),
);

export const appStore = listModule.context(store);
export default store
