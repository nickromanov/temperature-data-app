import { Actions as BaseActions } from 'vuex-smart-module'
import { IListItem } from '@/globalTypes';
import { IUpdatePayload } from './types'
import { getData, TAPIResp } from '@/service/api';
import Getters from './getters'
import Mutations from './mutations'
import State from './state'

export default class Actions extends BaseActions<State,
	Getters,
	Mutations,
	Actions> {
	
	/**
	 * Action for delete
	 * @param idx
	 */
	delFromList(idx: number): void {
		this.mutations.del(idx);
	}
	
	/**
	 * Load list from jsonbin API
	 */
	async loadList(): Promise<void> {
		this.mutations.setLoading(true);
		let apiData: TAPIResp | void;
		try {
			apiData = await getData();
			if (apiData) {
				for(let idx = 0; idx < apiData.data.record.length; idx++) {
					apiData.data.record[idx].$idx = idx;
				}
				this.mutations.set(apiData.data.record);
			}
		} catch (e) {
			console.log(e);
			this.mutations.set([]);
		}
		this.mutations.setLoading(false);
	}
	
	/**
	 * Appending to list and recalculate message
	 * @param value
	 */
	addToList(value: IListItem): void {
		if (!value.id || !value.temperature) {
			this.mutations.updateMessage(false);
		} else {
			this.mutations.add(value);
			this.mutations.updateMessage(true);
		}
		if (this.state.msgTimer) {
			clearTimeout(this.state.msgTimer);
		}
		this.mutations.setTimer(setTimeout(this.mutations.hideMessage, 3000));
	}
	
	/**
	 * Update list when edit is completed
	 * @param payload
	 */
	updateList(payload: IUpdatePayload): void {
		if (!payload.newValue.id || !payload.newValue.temperature) {
			this.mutations.updateMessage(false);
		} else {
			this.mutations.update(payload);
			this.mutations.updateMessage(true);
		}
		if (this.state.msgTimer) {
			clearTimeout(this.state.msgTimer)
		}
		this.mutations.setTimer(setTimeout(this.mutations.hideMessage, 3000));
	}
	
}
