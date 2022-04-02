import {MessageProps} from 'primevue/message';

/**
 * List
 */
export interface IListItem {
	id: string;
	temperature: string;
}

type TMessageState = Pick<MessageProps, 'severity'>

export interface IMessageState extends TMessageState {
	isVisible: boolean;
	message: string;
}

export type TList = Array<IListItem>;