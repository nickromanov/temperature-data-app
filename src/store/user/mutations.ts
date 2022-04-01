import { Mutations as BaseMutations } from 'vuex-smart-module'
import { TList, IListItem } from '@/globalTypes'
import { IUpdatePayload } from './types'
import State from './state'


export default class Mutations extends BaseMutations<State> {
	add(value: IListItem): void {
		this.state.list.unshift(value);
	}
	
	update(payload: IUpdatePayload): void {
		this.state.list.splice(payload.idx, 1, payload.newValue);
	}
	
	set(value: TList): void {
		this.state.list = value;
	}
	
	setTimer(value: number): void {
		this.state.msgTimer = value;
	}
	
	hideMessage(): void {
		this.state.messageState = {...this.state.messageState, isVisible: false};
	}
	
	updateMessage(valid: boolean): void {
		this.state.messageState = {
			isVisible: true,
			severity: valid ? 'success' : 'info',
			message:  valid ? 'Your data has been succesfully saved': 'Data is required'
		};
	}
	
}
