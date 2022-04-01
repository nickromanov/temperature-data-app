import { Actions as BaseActions } from 'vuex-smart-module'
import { IListItem, TList } from '@/globalTypes';
import { IUpdatePayload } from './types'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'

export default class Actions extends BaseActions<State,
	Getters,
	Mutations,
	Actions> {
	
	addToList(value: IListItem): void {
		if (!value.id || !value.temperature) {
			this.mutations.updateMessage(false);
		} else {
			this.mutations.add(value);
			this.mutations.updateMessage(true);
		}
		if(this.state.msgTimer) {
			clearTimeout(this.state.msgTimer)
		}
		this.mutations.setTimer(setTimeout(this.mutations.hideMessage, 3000));
	}
	
	updateList(payload: IUpdatePayload): void {
		if (!payload.newValue.id || !payload.newValue.temperature) {
			this.mutations.updateMessage(false);
		} else {
			this.mutations.update(payload);
			this.mutations.updateMessage(true);
		}
		if(this.state.msgTimer) {
			clearTimeout(this.state.msgTimer)
		}
		this.mutations.setTimer(setTimeout(this.mutations.hideMessage, 3000));
	}
	
	setList(val: TList) {
		this.mutations.set(val);
	}
	
}
