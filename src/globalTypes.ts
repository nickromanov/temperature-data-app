import {MessageProps} from 'primevue/message';

/**
 * List item to show
 */
export interface IListItem {
	$idx: number;
	id: string;
	temperature: string;
}

/**
 * Message settings from primeVue message
 */
type TMessageState = Pick<MessageProps, 'severity'>

export interface IMessageState extends TMessageState {
	isVisible: boolean;
	message: string;
}

/**
 * Response from JSON storage
 */
export interface JSONBinResponse {
	metadata: {
		id: string,
		private: boolean,
		createdAt: Date
	}
	record: TList
}

export type TList = Array<IListItem>;