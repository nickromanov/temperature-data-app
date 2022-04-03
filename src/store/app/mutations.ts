import { Mutations as BaseMutations } from 'vuex-smart-module'
import { TList, IListItem } from '@/globalTypes'
import { IUpdatePayload } from './types'
import State from './state'


export default class Mutations extends BaseMutations<State> {
	
	/**
	 * Append to list
	 * @param value
	 */
	add(value: IListItem): void {
		this.state.list.unshift(value);
	}
	
	/**
	 * Update list after finish editing
	 * @param payload
	 */
	update(payload: IUpdatePayload): void {
		this.state.list.splice(payload.idx, 1, payload.newValue);
	}
	
	/**
	 * Set new data for table
	 * @param value
	 */
	set(value: TList): void {
		this.state.list = value;
	}
	
	/**
	 * Delete list element by index
	 * @param idx
	 */
	del(idx: number): void {
		this.state.list.splice(idx, 1);
	}
	
	/**
	 * Updates message timeout instead of reopening
	 * @param value
	 */
	setTimer(value: number): void {
		this.state.msgTimer = value;
	}
	
	/**
	 * Hide message panel
	 */
	hideMessage(): void {
		this.state.messageState = {...this.state.messageState, isVisible: false};
	}
	
	/**
	 * Show message or update its text
	 * @param valid
	 */
	updateMessage(valid: boolean): void {
		this.state.messageState = {
			isVisible: true,
			severity: valid ? 'success' : 'info',
			message:  valid ? 'Your data has been successfully saved': 'Data is required'
		};
	}
	
	/**
	 * Show or hide loading indicator
	 * @param val
	 */
	setLoading(val: boolean): void {
		this.state.isLoading = val;
	}
	
}
